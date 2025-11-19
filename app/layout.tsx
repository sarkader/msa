import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muslim Scale Accelerator",
  description:
    "We partner with Muslim founders to scale offers—courses, consulting, and productized services. Double your revenue or your fee back.",
  metadataBase: new URL("https://muslimscaleaccelerator.com"),
  openGraph: {
    title: "Muslim Scale Accelerator",
    description:
      "We partner with Muslim founders to scale offers—courses, consulting, and productized services. Double your revenue or your fee back.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muslim Scale Accelerator",
    description:
      "We partner with Muslim founders to scale offers—courses, consulting, and productized services. Double your revenue or your fee back.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Calendly domains for faster loading */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className={`${instrumentSans.variable} antialiased`}>
        {/* Preload Calendly script early for faster booking section load */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          id="calendly-script"
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
