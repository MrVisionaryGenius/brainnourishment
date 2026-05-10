"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Share2, Camera } from "lucide-react"
import { AchievementBadges } from "./achievement-badges"
import { ShareableCard } from "./shareable-card"

interface ResultsDisplayProps {
    score: number
    efficiencyData: { weeklyHoursLost: number; annualHoursLost: number }
}

interface ResultData {
    title: string
    description: string
    color: string
    bgColor: string
    badge: string
    character: string
    shareMessage: string
    tips: string[]
    newsletterHook: string
}

export function ResultsDisplay({ score, efficiencyData }: ResultsDisplayProps) {
    const [timeLeft, setTimeLeft] = useState(5 * 60)
    const [showShareCard, setShowShareCard] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) { clearInterval(timer); return 0 }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const getResult = (): ResultData => {
        if (score >= 24) {
            return {
                title: "You're Leaving a Lot on the Table",
                description:
                    "Your results show you're still doing most things manually — and AI is largely untapped in your workflow. The good news? You're in the best possible position to see immediate, dramatic gains. Builders who go from zero AI system to a basic automated stack typically reclaim 10–20 hours per week within the first month.",
                color: "text-orange-400",
                bgColor: "bg-orange-500/10 border-orange-500/20",
                badge: "🚀 MASSIVE UPSIDE AHEAD",
                character: "🤖",
                shareMessage: "Just took The AI Operator quiz. I'm leaving a ton on the table — time to fix that. ⚡",
                newsletterHook: "This is exactly why we built The AI Operator. Every Tuesday & Thursday we send one practical AI tool or automation you can implement same-day. No 4,000-word essays. No theory. Just: here's the tool, here's how to use it, here's what it saves you.",
                tips: [
                    "Start with one task you do daily and find an AI tool that handles it — start small, build momentum",
                    "Learn the basics of structured prompting — it's the highest-ROI skill you can develop right now",
                    "Subscribe to The AI Operator and implement one thing from each issue — that's all it takes",
                    "Don't try to overhaul everything at once — one workflow automated per week compounds fast",
                ],
            }
        } else if (score >= 17) {
            return {
                title: "You're Getting There — But the Gap Is Still Costly",
                description:
                    "You've dipped into AI but you don't yet have a real system. You're using tools reactively rather than proactively, and it's costing you hours every week that could be going into higher-leverage work. The builders pulling ahead right now aren't using more tools — they're using fewer tools, better.",
                color: "text-yellow-400",
                bgColor: "bg-yellow-500/10 border-yellow-500/20",
                badge: "⚙️ SYSTEM UPGRADE NEEDED",
                character: "⚙️",
                shareMessage: "Took The AI Operator quiz — I need a system upgrade. My AI stack is reactive, not proactive. ⚡",
                newsletterHook: "The AI Operator is built for exactly where you are right now. We skip the beginner stuff and go straight to the workflows and automations that turn scattered tool usage into a real, repeatable system.",
                tips: [
                    "Audit your week: write down every task that took over 30 mins and ask 'could AI do 80% of this?'",
                    "Pick your three core tools and go deep on them before adding anything new",
                    "Start connecting your tools — a simple Zapier or Make automation between two apps saves more time than any single tool",
                    "Read every issue of The AI Operator and flag one thing to implement before the next one lands",
                ],
            }
        } else {
            return {
                title: "You're Operating at a High Level",
                description:
                    "Your AI habits are well above average. You've built real systems, you're saving serious time, and you understand that the goal isn't to use every tool — it's to use the right ones deliberately. The next level is staying sharp as the landscape shifts every week and finding the marginal gains that compound over time.",
                color: "text-green-400",
                bgColor: "bg-green-500/10 border-green-500/20",
                badge: "✅ ADVANCED OPERATOR",
                character: "🎯",
                shareMessage: "Took The AI Operator quiz — scored as an Advanced Operator. AI is a core part of how I work and earn. ⚡",
                newsletterHook: "Even advanced operators find value in The AI Operator — because the landscape moves fast and there's always a better way to do what you're already doing. We surface the 20% of new tools worth paying attention to, so you don't have to.",
                tips: [
                    "Document your AI stack so you can refine and share it — teaching it compounds your own clarity",
                    "Focus on the frontier: what's new in the last 30 days that could upgrade your core workflow?",
                    "Start monetising your AI knowledge — builders at your level can charge for systems others are desperate for",
                    "Stay subscribed to The AI Operator — we'll keep surfacing the edge cases worth your attention",
                ],
            }
        }
    }

    const result = getResult()
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className="space-y-6">

            {/* Efficiency Impact */}
            {(efficiencyData.weeklyHoursLost > 0 || efficiencyData.annualHoursLost > 0) && (
                <Card className="p-6 bg-[#0f1010] border-white/10">
                    <div className="text-center space-y-4">
                        <div className="text-3xl">⏱️</div>
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm">Your Efficiency Gap</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#1a1f1b] rounded-lg p-4 border border-white/10">
                                <div className="text-2xl font-bold text-[#f97316]">{efficiencyData.weeklyHoursLost}h</div>
                                <div className="text-xs text-gray-400">lost every week</div>
                            </div>
                            <div className="bg-[#1a1f1b] rounded-lg p-4 border border-white/10">
                                <div className="text-2xl font-bold text-[#f97316]">{efficiencyData.annualHoursLost}h</div>
                                <div className="text-xs text-gray-400">lost every year</div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 italic">
                            At a conservative $50/hr, that&apos;s{" "}
                            <span className="text-[#f97316] font-semibold">
                                ${(efficiencyData.annualHoursLost * 50).toLocaleString()}
                            </span>{" "}
                            of unrealised value per year — recoverable with the right systems.
                        </p>
                    </div>
                </Card>
            )}

            {/* Main Result */}
            <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${result.bgColor} border-2`}>
                    <span className="text-4xl">{result.character}</span>
                </div>
                <div className="mb-4">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold ${result.bgColor} ${result.color} border`}>
                        {result.badge}
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{result.title}</h2>
                <div className="text-right mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f97316] text-white">
                        Score: {score}/30
                    </span>
                </div>
            </div>

            {/* Description */}
            <Card className={`p-6 border ${result.bgColor} bg-[#0f1010]`}>
                <p className="text-gray-300 leading-relaxed text-sm">{result.description}</p>
            </Card>

            {/* Newsletter Hook */}
            <Card className="p-6 bg-[#f97316]/5 border-[#f97316]/30">
                <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">📬</span>
                    <div>
                        <h3 className="text-xs font-semibold text-[#f97316] uppercase tracking-widest mb-2">You&apos;re now subscribed to The AI Operator</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{result.newsletterHook}</p>
                        <p className="text-xs text-gray-500 mt-3">
                            Your first issue lands this Tuesday or Thursday — check your inbox (and spam folder, just in case).
                        </p>
                    </div>
                </div>
            </Card>

            {/* Action Plan */}
            <Card className="p-6 bg-[#0f1010] border-white/10">
                <h3 className="text-xs font-semibold text-[#f97316] mb-4 uppercase tracking-widest flex items-center">
                    <span className="mr-2">⚡</span>
                    Your {score >= 24 ? "Quickstart" : score >= 17 ? "Upgrade" : "Edge-Sharpening"} Action Plan
                </h3>
                <ul className="space-y-3">
                    {result.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-[#f97316] text-xs font-mono mt-0.5 shrink-0">0{index + 1}</span>
                            <span className="text-gray-300 text-sm leading-relaxed">{tip}</span>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* Badges */}
            <AchievementBadges score={score} />

            {/* Share */}
            <Card className="p-6 bg-[#0f1010] border-white/10">
                <div className="text-center space-y-4">
                    <h3 className="text-xs font-semibold text-white uppercase tracking-widest flex items-center justify-center gap-2">
                        <Share2 className="w-3 h-3" />
                        Challenge Another Builder
                    </h3>
                    <p className="text-gray-500 text-xs">
                        Share your results and see how your network stacks up
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            variant="outline"
                            onClick={() => setShowShareCard(!showShareCard)}
                            className="flex items-center border-white/20 text-gray-300 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] text-sm"
                        >
                            <Camera className="w-4 h-4 mr-2" />
                            {showShareCard ? "Hide" : "Create"} Share Card
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({ title: "The AI Operator — AI Skills Quiz", text: result.shareMessage, url: window.location.href })
                                } else {
                                    navigator.clipboard.writeText(`${result.shareMessage} Take the quiz: ${window.location.href}`)
                                }
                            }}
                            className="flex items-center border-white/20 text-gray-300 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] text-sm"
                        >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Results
                        </Button>
                    </div>
                </div>
            </Card>

            {showShareCard && (
                <ShareableCard
                    score={score}
                    badge={result.badge}
                    character={result.character}
                    title={result.title}
                    color={result.color}
                    bgColor={result.bgColor}
                    efficiencyData={efficiencyData}
                />
            )}

            {/* CTA */}
            <Card className="p-6 bg-[#0f1010] border-[#f97316]/30">
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-[#f97316]">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-widest">Limited Offer</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">
                        {timeLeft > 0
                            ? `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
                            : "Expired"}
                    </div>
                    <h3 className="text-base font-semibold text-white">Want to Accelerate Even Faster?</h3>
                    <p className="text-gray-400 text-sm">
                        Join our 14-Day AI Workflow Sprint — a structured challenge to build your full AI stack in two weeks.
                    </p>
                    <Button
                        className="w-full h-12 text-base font-semibold bg-[#f97316] hover:bg-[#ea6c0a] text-white"
                        onClick={() => window.open("https://whop.com/checkout/plan_W5EqYxoadkQdR?d2c=true", "_blank")}
                        disabled={timeLeft === 0}
                    >
                        {timeLeft > 0 ? "Join the 14-Day AI Sprint →" : "Offer Expired"}
                    </Button>
                </div>
            </Card>

            <div className="text-center">
                <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                    className="text-gray-600 hover:text-[#f97316] border-white/10 hover:border-[#f97316] text-sm"
                >
                    Retake the Quiz
                </Button>
            </div>
        </div>
    )
}