"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertTriangle, AlertCircle, CheckCircle, Clock, Share2, Camera } from "lucide-react"
import { AchievementBadges } from "./achievement-badges"
import { ShareableCard } from "./shareable-card"

interface ResultsDisplayProps {
    score: number
    screenTimeData: { socialMedia: number; totalScreen: number }
}

interface ResultData {
    title: string
    description: string
    icon: React.ReactNode
    color: string
    bgColor: string
    badge: string
    character: string
    shareMessage: string
    tips: string[]
}

export function ResultsDisplay({ score, screenTimeData }: ResultsDisplayProps) {
    const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutes in seconds
    const [showShareCard, setShowShareCard] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const calculateLifetimeImpact = () => {
        const { socialMedia, totalScreen } = screenTimeData

        // Calculate years of life spent (assuming 70 year lifespan)
        const socialMediaYears = Math.round(((socialMedia * 365 * 70) / (24 * 365)) * 10) / 10
        const totalScreenYears = Math.round(((totalScreen * 365 * 70) / (24 * 365)) * 10) / 10

        return { socialMediaYears, totalScreenYears }
    }

    const lifetimeImpact = calculateLifetimeImpact()

    const getResult = (): ResultData => {
        if (score >= 24) {
            return {
                title: "Severe Phone Addiction",
                description:
                    "Your phone usage patterns indicate a significant dependency that may be impacting your daily life, relationships, and productivity. Consider taking immediate action to regain control.",
                icon: <AlertTriangle className="w-8 h-8" />,
                color: "text-red-600",
                bgColor: "bg-red-50 border-red-200",
                badge: "🚨 DIGITAL DETOX NEEDED",
                character: "😵‍💫",
                shareMessage: "I just discovered I have severe phone addiction! Time for a digital detox 📱➡️🧘‍♀️",
                tips: [
                    "Turn off all non-essential notifications",
                    "Use app timers to limit social media",
                    "Create phone-free zones in your home",
                    "Practice mindful breathing when you feel the urge to check your phone",
                ],
            }
        } else if (score >= 17) {
            return {
                title: "Moderate Phone Addiction",
                description:
                    "You're showing signs of problematic phone usage. While not severe, these patterns could develop into more serious issues if left unchecked. Now is a great time to make positive changes.",
                icon: <AlertCircle className="w-8 h-8" />,
                color: "text-orange-600",
                bgColor: "bg-orange-50 border-orange-200",
                badge: "⚠️ MINDFUL USER",
                character: "🤔",
                shareMessage: "My phone addiction test shows I'm a mindful user with room for improvement! 📱⚖️",
                tips: [
                    "Set specific times for checking social media",
                    "Use grayscale mode to make your phone less appealing",
                    "Keep your phone out of the bedroom",
                    "Take regular digital breaks throughout the day",
                ],
            }
        } else {
            return {
                title: "Mild Phone Dependency",
                description:
                    "Your phone usage appears relatively healthy, but there's always room for improvement. You're in a good position to optimize your digital habits and maintain a balanced relationship with technology.",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "text-green-600",
                bgColor: "bg-green-50 border-green-200",
                badge: "✅ DIGITAL WELLNESS CHAMPION",
                character: "😌",
                shareMessage: "I'm a Digital Wellness Champion! 🏆 My phone doesn't control me 📱✨",
                tips: [
                    "Continue your healthy digital habits",
                    "Help others develop better phone relationships",
                    "Use your phone intentionally for productivity",
                    "Be a role model for balanced technology use",
                ],
            }
        }
    }

    const result = getResult()
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="space-y-6">
            {(screenTimeData.socialMedia > 0 || screenTimeData.totalScreen > 0) && (
                <Card className="p-6 bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] border-[#ca6e3f]/30">
                    <div className="text-center space-y-4">
                        <div className="text-4xl">⏰</div>
                        <h3 className="text-xl font-bold text-[#1b201c]">Your Lifetime Impact</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {screenTimeData.socialMedia > 0 && (
                                <div className="bg-white/50 rounded-lg p-4 border border-[#ca6e3f]/20">
                                    <div className="text-2xl font-bold text-[#ca6e3f]">{lifetimeImpact.socialMediaYears} years</div>
                                    <div className="text-sm text-[#1b201c]">of your life on social media</div>
                                    <div className="text-xs text-[#1b201c] opacity-70 mt-1">({screenTimeData.socialMedia} hours/day)</div>
                                </div>
                            )}
                            {screenTimeData.totalScreen > 0 && (
                                <div className="bg-white/50 rounded-lg p-4 border border-[#ca6e3f]/20">
                                    <div className="text-2xl font-bold text-[#ca6e3f]">{lifetimeImpact.totalScreenYears} years</div>
                                    <div className="text-sm text-[#1b201c]">of your life on screens</div>
                                    <div className="text-xs text-[#1b201c] opacity-70 mt-1">({screenTimeData.totalScreen} hours/day)</div>
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-[#1b201c] opacity-80 italic">
                            &quot;Time is the most valuable thing we have. Once it&apos;s gone, we can never get it back.&quot;
                        </p>
                    </div>
                </Card>
            )}

            {/* Main Results */}
            <div className="text-center">
                <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${result.bgColor} border-4`}
                >
                    <span className="text-4xl">{result.character}</span>
                </div>

                <div className="mb-4">
                    <div
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${result.bgColor} ${result.color} border-2`}
                    >
                        {result.badge}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-[#1b201c] mb-3">{result.title}</h2>

                <div className="text-right mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ca6e3f] text-white">
                        Score: {score}/30
                    </span>
                </div>
            </div>

            <Card className={`p-6 border-2 ${result.bgColor} bg-white`}>
                <p className="text-[#1b201c] leading-relaxed text-lg">{result.description}</p>
            </Card>

            {/* Personalized Tips */}
            <Card className="p-6 bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] border-[#ca6e3f]/30">
                <h3 className="text-lg font-semibold text-[#1b201c] mb-4 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Your Personalized Action Plan
                </h3>
                <ul className="space-y-2">
                    {result.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-[#ca6e3f] mr-2 mt-1">•</span>
                            <span className="text-[#1b201c]">{tip}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* Achievement Badges */}
            <AchievementBadges score={score} />

            {/* Share Your Results */}
            <Card className="p-6 bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] border-[#ca6e3f]/30">
                <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold text-[#1b201c] flex items-center justify-center">
                        <Share2 className="w-5 h-5 mr-2" />
                        Share Your Journey
                    </h3>
                    <p className="text-[#1b201c] opacity-80">
                        Inspire others by sharing your digital wellness journey on social media
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            variant="outline"
                            onClick={() => setShowShareCard(!showShareCard)}
                            className="flex items-center border-[#ca6e3f] text-[#ca6e3f] hover:bg-[#ca6e3f] hover:text-white"
                        >
                            <Camera className="w-4 h-4 mr-2" />
                            {showShareCard ? "Hide" : "Create"} Share Card
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: "Phone Addiction Test Results",
                                        text: result.shareMessage,
                                        url: window.location.href,
                                    })
                                } else {
                                    navigator.clipboard.writeText(`${result.shareMessage} Take the test: ${window.location.href}`)
                                }
                            }}
                            className="flex items-center border-[#ca6e3f] text-[#ca6e3f] hover:bg-[#ca6e3f] hover:text-white"
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Results
                        </Button>
                    </div>
                </div>
            </Card>

            {/* Shareable Card */}
            {showShareCard && (
                <ShareableCard
                    score={score}
                    badge={result.badge}
                    character={result.character}
                    title={result.title}
                    color={result.color}
                    bgColor={result.bgColor}
                    lifetimeImpact={lifetimeImpact}
                />
            )}

            {/* Challenge CTA */}
            <Card className="p-6 bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] border-[#ca6e3f]/30">
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-[#ca6e3f]">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">Limited Time Offer</span>
                    </div>

                    <div className="text-2xl font-bold text-[#1b201c]">
                        {timeLeft > 0 ? `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}` : "Expired"}
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-[#1b201c]">Ready to Take Control?</h3>
                        <p className="text-[#1b201c] opacity-80">
                            Join our 14-Day Dopamine Detox Challenge and transform your relationship with technology.
                        </p>
                    </div>

                    <Button
                        className="w-full h-12 text-lg font-semibold bg-[#ca6e3f] hover:bg-[#ca6d41] text-white shadow-lg shadow-[#ca6e3f]/40 hover:shadow-[#ca6e3f]/60 hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open("https://whop.com/checkout/plan_C5WP9a2Mp1FhC?d2c=true", "_blank")}
                        disabled={timeLeft === 0}
                    >
                        {timeLeft > 0 ? "Join the 14-Day Challenge" : "Offer Expired"}
                    </Button>

                </div>
            </Card>

            <div className="text-center">
                <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="text-[#1b201c] hover:text-[#ca6e3f] border-[#ca6e3f]/30 hover:border-[#ca6e3f]"
                >
                    Take Test Again
                </Button>
            </div>
        </div>
    )
}
