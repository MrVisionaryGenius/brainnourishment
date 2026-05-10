"use client"

import { Button } from "@/components/ui/button"
import { Copy, Share2 } from "lucide-react"
import { useRef, useState } from "react"
import { CustomModal } from "./CustomModal"

interface ShareableCardProps {
    score: number
    badge: string
    character: string
    title: string
    color: string
    bgColor: string
    efficiencyData?: { weeklyHoursLost: number; annualHoursLost: number }
}

export function ShareableCard({ score, badge, character, title, color, bgColor, efficiencyData }: ShareableCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [modalState, setModalState] = useState({ isOpen: false, title: "", content: <div /> })

    const closeModal = () => setModalState({ isOpen: false, title: "", content: <div /> })

    const showManualInstructions = (isDownload: boolean) => {
        const instructions = isDownload ? (
            <div className="space-y-3">
                <div className="bg-[#1a1f1b] rounded-lg p-3 text-sm">
                    <p className="font-bold text-white mb-1">📱 Mobile</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-xs">
                        <li>Screenshot the page and crop to the card</li>
                    </ul>
                </div>
                <div className="bg-[#1a1f1b] rounded-lg p-3 text-sm">
                    <p className="font-bold text-white mb-1">💻 Desktop</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-xs">
                        <li>Right-click the card → &quot;Save image as&quot;</li>
                    </ul>
                </div>
            </div>
        ) : (
            <div className="bg-[#f97316]/10 rounded-lg p-3 text-sm border border-[#f97316]/20">
                <p className="font-bold text-[#f97316]">✅ Copied!</p>
                <p className="text-gray-400 mt-1 text-xs">Paste it on X or LinkedIn and tag us @theoperatorai</p>
            </div>
        )
        setModalState({ isOpen: true, title: isDownload ? "How to Save" : "Copied!", content: instructions })
    }

    const shareCard = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "The AI Operator — AI Skills Quiz",
                    text: `I just took The AI Operator AI skills quiz and scored ${score}/30! ${title}`,
                    url: window.location.href,
                })
            } catch { copyShareText() }
        } else { copyShareText() }
    }

    const copyShareText = async () => {
        const effText = efficiencyData && efficiencyData.weeklyHoursLost > 0
            ? `\n⏱️ I'm losing ~${efficiencyData.weeklyHoursLost} hours/week to inefficiency — ${efficiencyData.annualHoursLost} hours/year.`
            : ""

        const shareText = `⚡ I just took The AI Operator AI skills quiz.

Score: ${score}/30
${character} ${title}
${badge}${effText}

Are you using AI to its full potential?
Take the free 2-min quiz: ${window.location.href}

#AIOperator #BuildInPublic #AITools`

        try {
            await navigator.clipboard.writeText(shareText)
            showManualInstructions(false)
        } catch {
            prompt("Copy this to share:", shareText)
        }
    }

    return (
        <div className="space-y-4">
            <div className="text-center">
                <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">Your Share Card</h3>
                <p className="text-xs text-gray-500 mb-4">Post it on X or LinkedIn and challenge your network</p>
            </div>

            <div className="flex justify-center">
                <div
                    ref={cardRef}
                    className="w-80 bg-[#0f1010] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
                    style={{ aspectRatio: "2/3" }}
                >
                    <div className="bg-[#f97316] p-6 text-white text-center">
                        <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">The AI Operator</p>
                        <h2 className="text-base font-bold mb-2">AI Skills Assessment</h2>
                        <div className="text-5xl mb-3">{character}</div>
                        <div className="bg-black/20 rounded-full px-3 py-1 text-sm font-semibold inline-block">
                            {score}/30
                        </div>
                    </div>

                    <div className="p-6 space-y-4">
                        <div className="text-center">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${bgColor} ${color} border mb-2`}>
                                {badge}
                            </div>
                            <h3 className="text-sm font-bold text-white leading-snug">{title}</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-[#1a1f1b] rounded-lg p-2 border border-white/10">
                                <div className="text-sm font-bold text-white">{Math.round((score / 30) * 100)}%</div>
                                <div className="text-xs text-gray-500">Gap</div>
                            </div>
                            <div className="bg-[#1a1f1b] rounded-lg p-2 border border-white/10">
                                <div className="text-sm font-bold text-white">10</div>
                                <div className="text-xs text-gray-500">Questions</div>
                            </div>
                            <div className="bg-[#1a1f1b] rounded-lg p-2 border border-white/10">
                                <div className="text-sm font-bold text-white">2025</div>
                                <div className="text-xs text-gray-500">Year</div>
                            </div>
                        </div>

                        {efficiencyData && efficiencyData.weeklyHoursLost > 0 && (
                            <div className="bg-[#f97316]/10 rounded-lg p-3 text-center border border-[#f97316]/20">
                                <div className="text-lg font-bold text-[#f97316]">{efficiencyData.weeklyHoursLost}h/week</div>
                                <div className="text-xs text-gray-500">lost to inefficiency</div>
                            </div>
                        )}

                        <div className="bg-[#1a1f1b] rounded-lg p-3 text-center border border-white/10">
                            <p className="text-xs text-gray-400 italic">
                                {score >= 24
                                    ? '"The biggest gains are still ahead of you."'
                                    : score >= 17
                                        ? '"A system beats scattered tools every time."'
                                        : '"Your AI stack is your competitive edge."'}
                            </p>
                        </div>

                        <div className="text-center pt-2 border-t border-white/10">
                            <p className="text-xs text-gray-600">@theoperatorai · Tue & Thu</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-2 justify-center">
                <Button
                    onClick={shareCard}
                    variant="outline"
                    className="border border-white/20 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] bg-transparent text-gray-300 text-sm"
                >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                </Button>
                <Button
                    onClick={copyShareText}
                    variant="outline"
                    className="border border-white/20 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] bg-transparent text-gray-300 text-sm"
                >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Text
                </Button>
            </div>

            <p className="text-xs text-gray-600 text-center">
                Right-click the card → &quot;Save image as&quot; to download it
            </p>

            <CustomModal isOpen={modalState.isOpen} onClose={closeModal} title={modalState.title} content={modalState.content} />
        </div>
    )
}