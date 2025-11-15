import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
