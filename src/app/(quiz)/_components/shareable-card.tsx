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
    lifetimeImpact?: { socialMediaYears: number; totalScreenYears: number }
}

export function ShareableCard({ score, badge, character, title, color, bgColor, lifetimeImpact }: ShareableCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)

    const [modalState, setModalState] = useState({
        isOpen: false,
        title: "",
        content: <div />,
    })

    const closeModal = () => {
        setModalState({ isOpen: false, title: "", content: <div /> })
    }

    const showManualInstructions = (isDownload: boolean) => {
        const instructions = isDownload ? (
            <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <p className="font-bold text-blue-900 mb-1">📱 On Mobile</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                        <li>Take a screenshot (volume + power button)</li>
                        <li>Crop to include just the card</li>
                    </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <p className="font-bold text-blue-900 mb-1">💻 On Desktop</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                        <li>Right-click the card → &quot;Save image as...&quot;</li>
                        <li>Or use Ctrl+Shift+S (Windows) / Cmd+Shift+4 (Mac)</li>
                    </ul>
                </div>
            </div>
        ) : (
            <div className="bg-green-50 rounded-lg p-3 text-sm text-green-800">
                <p className="font-bold">✅ Share text copied!</p>
                <p>You can now paste it into your social media posts. 🎉</p>
            </div>
        )

        setModalState({
            isOpen: true,
            title: isDownload ? "📸 Manual Save Instructions" : "Text Copied",
            content: instructions,
        })
    }

    const shareCard = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "My Phone Addiction Test Results",
                    text: `I just took a phone addiction test and scored ${score}/30! ${badge} - ${title}`,
                    url: window.location.href,
                })
            } catch (error) {
                console.log("Share failed:", error)
                copyShareText()
            }
        } else {
            copyShareText()
        }
    }

    const copyShareText = async () => {
        const lifetimeText = lifetimeImpact
            ? `\n⏰ At my current usage, I'm on track to spend ${lifetimeImpact.totalScreenYears} years of my life on screens!`
            : ""

        const shareText = `📱 I just took a phone addiction test and scored ${score}/30!

${character} ${badge} - ${title}

Addiction Level: ${Math.round((score / 30) * 100)}%${lifetimeText}

Take the test yourself at https://brain-nourishmenttt-quiz.vercel.app/! 

#PhoneAddiction #DigitalWellness #TechBalance`

        try {
            await navigator.clipboard.writeText(shareText)
            showManualInstructions(false) // Show a success modal instead of an alert
        } catch (error) {
            console.error("Could not copy to clipboard:", error)
            // Fallback: show the text to copy manually
            prompt("Copy this text to share:", shareText)
        }
    }

    return (
        <div className="space-y-4">
            <div className="text-center">
                <h3 className="text-lg font-semibold text-[#1b201c] mb-2">Your Shareable Results Card</h3>
                <p className="text-sm text-[#1b201c] opacity-80 mb-4">
                    Perfect for Instagram, Twitter, or any social platform!
                </p>
            </div>

            <div className="flex justify-center">
                <div
                    ref={cardRef}
                    className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#ca6e3f]/20"
                    style={{ aspectRatio: "2/3" }}
                >
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-br from-[#ca6e3f] via-[#ca6d41] to-[#1a1f1b] p-6 text-white text-center relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-2">📱 Phone Addiction Test</h2>
                            <div className="text-6xl mb-3">{character}</div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                                Score: {score}/30
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <div className="text-center">
                            <div
                                className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-bold ${bgColor} ${color} border-2 mb-3`}
                            >
                                {badge}
                            </div>
                            <h3 className="text-lg font-bold text-[#1b201c] leading-tight">{title}</h3>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="bg-[#f1eada] rounded-lg p-2">
                                <div className="text-lg font-bold text-[#1b201c]">{Math.round((score / 30) * 100)}%</div>
                                <div className="text-xs text-[#1b201c] opacity-70">Addiction Level</div>
                            </div>
                            <div className="bg-[#f1eada] rounded-lg p-2">
                                <div className="text-lg font-bold text-[#1b201c]">10</div>
                                <div className="text-xs text-[#1b201c] opacity-70">Questions</div>
                            </div>
                            <div className="bg-[#f1eada] rounded-lg p-2">
                                <div className="text-lg font-bold text-[#1b201c]">2025</div>
                                <div className="text-xs text-[#1b201c] opacity-70">Year</div>
                            </div>
                        </div>

                        {lifetimeImpact && lifetimeImpact.totalScreenYears > 0 && (
                            <div className="bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] rounded-lg p-3 text-center border border-[#ca6e3f]/30">
                                <div className="text-lg font-bold text-[#ca6e3f]">{lifetimeImpact.totalScreenYears} years</div>
                                <div className="text-xs text-[#1b201c]">of life on screens</div>
                            </div>
                        )}

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] rounded-lg p-3 text-center border border-[#ca6e3f]/20">
                            <p className="text-sm font-medium text-[#1b201c] italic">
                                {score >= 24
                                    ? '"The first step to freedom is awareness."'
                                    : score >= 17
                                        ? '"Progress, not perfection."'
                                        : '"Digital wellness is self-care."'}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="text-center pt-2 border-t border-[#ca6e3f]/20">
                            <p className="text-xs text-[#1b201c] opacity-70 font-medium">Take the test yourself!</p>
                            <p className="text-xs text-[#1b201c] opacity-50">PhoneAddictionTest.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-3">
                <div className="flex gap-2 justify-center flex-wrap">
                    <Button
                        onClick={shareCard}
                        variant="outline"
                        className="border-2 border-[#ca6e3f] hover:bg-[#ca6e3f] hover:text-white bg-transparent text-[#ca6e3f]"
                    >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                    </Button>
                    <Button
                        onClick={copyShareText}
                        variant="outline"
                        className="border-2 border-[#ca6e3f] hover:bg-[#ca6e3f] hover:text-white bg-transparent text-[#ca6e3f]"
                    >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Text
                    </Button>
                </div>
                <p className="text-xs text-[#1b201c] opacity-70 max-w-md mx-auto">
                    🎯 <strong>Pro tip:</strong> Right-click the card above and select &quot;Save image as...&quot; for the
                    easiest download!
                </p>
            </div>

            {/* Instructions Card */}
            <div className="bg-[#f1eada] rounded-lg p-4 text-center max-w-md mx-auto border border-[#ca6e3f]/20">
                <h4 className="font-semibold text-[#1b201c] mb-2">📱 How to Share Your Results</h4>
                <div className="text-sm text-[#1b201c] opacity-80 space-y-1">
                    <p>
                        <strong>Mobile:</strong> Screenshot this page & crop the card
                    </p>
                    <p>
                        <strong>Desktop:</strong> Right-click card → &quot;Save image as&quot;
                    </p>
                    <p>
                        <strong>Quick Share:</strong> Use the &quot;Copy Text&quot; button above
                    </p>
                </div>
            </div>

            <CustomModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                title={modalState.title}
                content={modalState.content}
            />
        </div>
    )
}
