import type { Metadata } from "next";
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
    title: "Brain Nourishment Quiz - Discover How Much Life You're Losing to Screens",
    description:
        "Take our eye-opening quiz to discover how many years of your precious life you're spending on social media and screens. Get personalized insights and reclaim your time for what truly matters.",
    keywords:
        "brain health, screen time, social media addiction, digital wellness, time management, life optimization, phone addiction test",
    openGraph: {
        title: "Brain Nourishment Quiz - Discover How Much Life You're Losing to Screens",
        description:
            "Shocking reality: 5 hours of daily screen time = 12.5 years of your life. Take our quiz to see your personal impact and learn how to reclaim your time.",
        type: "website",
        images: [
            {
                url: "/brain-nourishment-quiz-share.png",
                width: 1200,
                height: 630,
                alt: "Brain Nourishment Quiz - Discover Your Screen Time Impact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Brain Nourishment Quiz - How Much Life Are You Losing to Screens?",
        description:
            "I just discovered I'm spending X years of my life on screens! Take this eye-opening quiz to see your impact.",
        images: ["/brain-nourishment-quiz-twitter-card.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: "width=device-width, initial-scale=1",
}


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