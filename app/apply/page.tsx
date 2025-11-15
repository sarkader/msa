type SearchParams = {
  success?: string;
  error?: string;
};

type Props = {
  searchParams?: SearchParams;
};

function getErrorMessage(error: string | undefined): string {
  if (!error) return "";
  if (error === "rate_limit") return "Too many submissions. Please try again later.";
  if (error === "validation") return "Please check your form and try again.";
  if (error === "server") return "Something went wrong. Please try again or contact us directly.";
  return "";
}

export default function ApplyPage({ searchParams }: Props) {
  const success = searchParams?.success === "true";
  const error = getErrorMessage(searchParams?.error);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-tight tracking-tight text-[#171717] mb-4">
          Apply
        </h1>
        <p className="text-[clamp(1rem,1.3vw,1.0625rem)] leading-relaxed text-[#525252] mb-12">
          Tell us about your business and current revenue. We&apos;ll review and get back to you.
        </p>

        {success && (
          <div
            className="mb-8 p-4 rounded-lg bg-[#ecfdf5] border border-[#10b981] text-sm text-[#065f46]"
            role="alert"
          >
            <p className="font-medium">Thank you!</p>
            <p className="mt-1">We&apos;ve received your application and will review it shortly.</p>
          </div>
        )}

        {error && (
          <div
            className="mb-8 p-4 rounded-lg bg-[#fef2f2] border border-[#ef4444] text-sm text-[#991b1b]"
            role="alert"
          >
            <p className="font-medium">Error</p>
            <p className="mt-1">{error}</p>
          </div>
        )}

        <form
          method="POST"
          action="/api/apply"
          className="space-y-6"
          noValidate={!success}
          aria-label="Application form"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#171717] mb-2">
              Name{" "}
              <span className="text-[#ef4444]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
              aria-describedby={error ? "name-error" : undefined}
              aria-invalid={error ? "true" : undefined}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#171717] mb-2">
              Email{" "}
              <span className="text-[#ef4444]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
              aria-describedby={error ? "email-error" : undefined}
              aria-invalid={error ? "true" : undefined}
            />
          </div>

          <div>
            <label htmlFor="businessUrl" className="block text-sm font-medium text-[#171717] mb-2">
              Business URL{" "}
              <span className="text-[#ef4444]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </label>
            <input
              type="url"
              id="businessUrl"
              name="businessUrl"
              placeholder="https://example.com"
              required
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
              aria-describedby={error ? "businessUrl-error" : undefined}
              aria-invalid={error ? "true" : undefined}
            />
          </div>

          <div>
            <label
              htmlFor="currentRevenue"
              className="block text-sm font-medium text-[#171717] mb-2"
            >
              Current Monthly Revenue (USD){" "}
              <span className="text-[#ef4444]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </label>
            <input
              type="number"
              id="currentRevenue"
              name="currentRevenue"
              min="0"
              step="0.01"
              required
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
              aria-describedby={error ? "currentRevenue-error" : undefined}
              aria-invalid={error ? "true" : undefined}
            />
          </div>

          <div>
            <label htmlFor="mainOffer" className="block text-sm font-medium text-[#171717] mb-2">
              Main Offer{" "}
              <span className="text-[#ef4444]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </label>
            <textarea
              id="mainOffer"
              name="mainOffer"
              rows={4}
              required
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed resize-y"
              aria-describedby={error ? "mainOffer-error" : undefined}
              aria-invalid={error ? "true" : undefined}
            />
          </div>

          <div>
            <label
              htmlFor="biggestBottleneck"
              className="block text-sm font-medium text-[#171717] mb-2"
            >
              Biggest Bottleneck{" "}
              <span className="text-[#ef4444]" aria-hidden="true">
                *
              </span>
              <span className="sr-only">required</span>
            </label>
            <select
              id="biggestBottleneck"
              name="biggestBottleneck"
              required
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed"
              aria-describedby={error ? "biggestBottleneck-error" : undefined}
              aria-invalid={error ? "true" : undefined}
            >
              <option value="">Select one</option>
              <option value="lead-generation">Lead Generation</option>
              <option value="conversion">Conversion</option>
              <option value="pricing">Pricing</option>
              <option value="messaging">Messaging</option>
              <option value="scaling">Scaling Operations</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="additionalContext"
              className="block text-sm font-medium text-[#171717] mb-2"
            >
              Additional Context
            </label>
            <textarea
              id="additionalContext"
              name="additionalContext"
              rows={4}
              disabled={success}
              className="w-full px-4 py-2 text-sm border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:border-[#0F766E] disabled:bg-[#f5f5f5] disabled:cursor-not-allowed resize-y"
            />
          </div>

          {/* Honeypot field */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Turnstile placeholder - will be populated by client if available */}
          <input type="hidden" name="cf-turnstile-response" value="" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              type="submit"
              disabled={success}
              className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-[#0F766E] rounded-lg transition-colors hover:bg-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white disabled:bg-[#9ca3af] disabled:cursor-not-allowed"
            >
              {success ? "Submitted" : "Submit Application"}
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-[#525252]">
          Prefer email?{" "}
          <a
            href="mailto:process@muslimscaleaccelerator.com"
            className="text-[#0F766E] hover:text-[#0d6361] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] focus:ring-offset-white rounded"
          >
            process@muslimscaleaccelerator.com
          </a>
        </p>
      </div>
    </div>
  );
}
