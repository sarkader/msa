import { type NextRequest, NextResponse } from "next/server";

type FormData = {
  name: string;
  email: string;
  businessUrl: string;
  currentRevenue: string;
  mainOffer: string;
  biggestBottleneck: string;
  additionalContext?: string | undefined;
  website?: string | undefined; // honeypot
  "cf-turnstile-response"?: string | undefined;
};

type ValidationErrors = {
  name?: string;
  email?: string;
  businessUrl?: string;
  currentRevenue?: string;
  mainOffer?: string;
  biggestBottleneck?: string;
};

// In-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function validateFormData(data: FormData): {
  valid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  // Honeypot check
  if (data.website && data.website.trim() !== "") {
    errors.name = "Validation failed";
    return { valid: false, errors };
  }

  // Required fields
  if (!data.name || data.name.trim().length === 0) {
    errors.name = "Name is required";
  }
  if (!data.email || data.email.trim().length === 0) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Invalid email format";
  }
  if (!data.businessUrl || data.businessUrl.trim().length === 0) {
    errors.businessUrl = "Business URL is required";
  } else if (!validateURL(data.businessUrl)) {
    errors.businessUrl = "Invalid URL format";
  }
  if (!data.currentRevenue || data.currentRevenue.trim().length === 0) {
    errors.currentRevenue = "Current revenue is required";
  } else {
    const revenue = parseFloat(data.currentRevenue);
    if (Number.isNaN(revenue) || revenue < 0) {
      errors.currentRevenue = "Invalid revenue amount";
    }
  }
  if (!data.mainOffer || data.mainOffer.trim().length === 0) {
    errors.mainOffer = "Main offer is required";
  }
  if (!data.biggestBottleneck || data.biggestBottleneck.trim() === "") {
    errors.biggestBottleneck = "Please select a bottleneck";
  }

  const valid = Object.keys(errors).length === 0;
  return { valid, errors };
}

async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) {
    return true; // Skip if not configured
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        response: token,
      }),
    });

    const result = await response.json();
    return result.success === true;
  } catch {
    return false;
  }
}

async function sendEmail(data: FormData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return false;
  }

  try {
    const emailBody = `
New Application Submission

Name: ${data.name}
Email: ${data.email}
Business URL: ${data.businessUrl}
Current Monthly Revenue: $${data.currentRevenue}
Main Offer: ${data.mainOffer}
Biggest Bottleneck: ${data.biggestBottleneck}
${data.additionalContext ? `Additional Context: ${data.additionalContext}` : ""}
`.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "process@muslimscaleaccelerator.com",
        to: "process@muslimscaleaccelerator.com",
        subject: "New Apply form submission",
        text: emailBody,
      }),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

function sanitizeForLog(data: FormData): Record<string, unknown> {
  return {
    email: data.email
      ? `${data.email.split("@")[0]?.substring(0, 2)}***@${data.email.split("@")[1]}`
      : "***",
    businessUrl: data.businessUrl ? new URL(data.businessUrl).hostname : "***",
    currentRevenue: data.currentRevenue ? "$***" : "***",
    biggestBottleneck: data.biggestBottleneck || "***",
  };
}

export async function POST(request: NextRequest) {
  // Set no-store headers
  const responseHeaders = new Headers({
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });

  try {
    const ip = getClientIP(request);

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.redirect(new URL("/apply?error=rate_limit", request.url), {
        headers: responseHeaders,
        status: 302,
      });
    }

    const formData = await request.formData();
    const data: FormData = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      businessUrl: formData.get("businessUrl")?.toString() ?? "",
      currentRevenue: formData.get("currentRevenue")?.toString() ?? "",
      mainOffer: formData.get("mainOffer")?.toString() ?? "",
      biggestBottleneck: formData.get("biggestBottleneck")?.toString() ?? "",
      additionalContext: formData.get("additionalContext")?.toString(),
      website: formData.get("website")?.toString(),
      "cf-turnstile-response": formData.get("cf-turnstile-response")?.toString(),
    };

    // Validation
    const validation = validateFormData(data);
    if (!validation.valid) {
      return NextResponse.redirect(new URL("/apply?error=validation", request.url), {
        headers: responseHeaders,
        status: 302,
      });
    }

    // Turnstile verification
    const turnstileValid = await verifyTurnstile(data["cf-turnstile-response"]);
    if (!turnstileValid) {
      return NextResponse.redirect(new URL("/apply?error=validation", request.url), {
        headers: responseHeaders,
        status: 302,
      });
    }

    // Send email (if configured)
    const emailSent = await sendEmail(data);

    // Log server-side if email not configured
    if (!emailSent) {
      const sanitized = sanitizeForLog(data);
      console.log("[Apply Form] New submission (email not configured):", sanitized);
    }

    return NextResponse.redirect(new URL("/apply?success=true", request.url), {
      headers: responseHeaders,
      status: 302,
    });
  } catch (error) {
    console.error("[Apply Form] Error:", error);
    return NextResponse.redirect(new URL("/apply?error=server", request.url), {
      headers: responseHeaders,
      status: 302,
    });
  }
}
