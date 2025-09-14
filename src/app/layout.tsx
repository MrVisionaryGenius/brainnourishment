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
  title: "Phone Freedom Challenge - Break Free from Digital Addiction",
  description:
    "Transform your life in 14 days. Join 15,000+ people who escaped phone addiction and reclaimed their time, focus, and freedom.",
  keywords: ["phone addiction", "digital detox", "14 day challenge", "break phone addiction"],
  openGraph: {
    type: "website",
    url: "https://www.brainnourishment.club",
    title: "Phone Freedom Challenge - Break Free from Digital Addiction",
    description:
      "Transform your life in 14 days. Join 15,000+ people who escaped phone addiction and reclaimed their time, focus, and freedom.",
    images: [
      {
        url: "https://www.brainnourishment.club/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phone Freedom Challenge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phone Freedom Challenge - Break Free from Digital Addiction",
    description:
      "Transform your life in 14 days. Join 15,000+ people who escaped phone addiction and reclaimed their time, focus, and freedom.",
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
        {/* ✅ Google Analytics Scripts */}
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
