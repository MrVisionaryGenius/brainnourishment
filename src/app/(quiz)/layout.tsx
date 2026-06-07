import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "The AI Operator — Are You Actually in Control of Your Attention?",
    description:
        "Builders who can't control their screen time can't control their output. Take this 2-minute assessment to find out how much of your focus is being stolen — and what to do about it.",

    keywords: [
        "AI productivity",
        "screen time",
        "attention management",
        "digital focus",
        "builder habits",
        "phone addiction",
        "deep work",
        "dopamine detox",
        "operator mindset",
    ],

    openGraph: {
        title: "The AI Operator — Are You Actually in Control of Your Attention?",
        description:
            "5 hours of daily scrolling = 12.5 years of your life. As a builder, your attention is your most valuable asset. Find out how much you're leaking.",
        type: "website",
        images: [
            {
                url: "/ai-operator-quiz-share.png",
                width: 1200,
                height: 630,
                alt: "The AI Operator Attention Audit",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "The AI Operator — How Much of Your Attention Is Being Stolen?",
        description:
            "I just audited my screen habits. The numbers are shocking. Take the Attention Audit yourself.",
        images: ["/ai-operator-quiz-twitter-card.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}