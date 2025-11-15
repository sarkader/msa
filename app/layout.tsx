import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
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
      <body className={`${instrumentSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
