import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brainnourishment.club"),
  title: "The AI Operator — Are You Using AI to Its Full Potential?",
  description:
    "Take our free 2-minute assessment and find out exactly where you're leaving time and money on the table. Then get practical AI tools, prompts & automations in your inbox every Tuesday & Thursday.",
  keywords: [
    "AI tools",
    "AI automation",
    "AI for builders",
    "earn with AI",
    "AI prompts",
    "AI newsletter",
    "AI operator",
    "productivity",
    "no-code automation",
  ],
  openGraph: {
    type: "website",
    url: "https://www.brainnourishment.club",
    title: "The AI Operator — Are You Using AI to Its Full Potential?",
    description:
      "Free 2-minute AI skills assessment for builders. Find your efficiency gap and get practical AI tools & automations in your inbox twice a week.",
    images: [
      {
        url: "https://www.brainnourishment.club/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The AI Operator — Free AI Skills Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Operator — Are You Using AI to Its Full Potential?",
    description:
      "Free 2-minute AI skills assessment for builders. Find your efficiency gap and get practical AI tools & automations in your inbox twice a week.",
    images: ["https://www.brainnourishment.club/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.brainnourishment.club",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W3T3SJRKQW"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W3T3SJRKQW');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}