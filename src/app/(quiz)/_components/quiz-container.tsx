"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Question {
    id: number
    text: string
    category: string
    options: {
        text: string
        points: number
        hoursLost?: number
    }[]
}

const questions: Question[] = [
    {
        id: 1,
        category: "AI Awareness",
        text: "How would you honestly describe your current use of AI tools in your daily work?",
        options: [
            { text: "I barely use them — still figuring out where to start", points: 3 },
            { text: "I use ChatGPT occasionally but have no real system", points: 2 },
            { text: "I have a consistent AI workflow that saves me hours weekly", points: 1 },
        ],
    },
    {
        id: 2,
        category: "Automation",
        text: "How many hours per week do you spend on repetitive tasks you know could be automated?",
        options: [
            { text: "10+ hours — I'm basically a human copy-paste machine", points: 3, hoursLost: 10 },
            { text: "3–10 hours — I know it's a problem but haven't fixed it", points: 2, hoursLost: 6 },
            { text: "Under 3 hours — most of my repetitive work is automated", points: 1, hoursLost: 2 },
        ],
    },
    {
        id: 3,
        category: "Prompting Skills",
        text: "When you use an AI tool and get a bad output, what do you usually do?",
        options: [
            { text: "Give up and do it manually — prompting feels like guesswork", points: 3 },
            { text: "Try rephrasing once or twice and hope for the best", points: 2 },
            { text: "I have a structured prompting approach that gets consistent results", points: 1 },
        ],
    },
    {
        id: 4,
        category: "Earning Potential",
        text: "Are you actively using AI to earn more — whether in your business, freelance work, or side income?",
        options: [
            { text: "No — I haven't figured out how to monetise it yet", points: 3 },
            { text: "Somewhat — I've saved time but haven't translated that into more money", points: 2 },
            { text: "Yes — AI directly contributes to my income", points: 1 },
        ],
    },
    {
        id: 5,
        category: "Keeping Up",
        text: "How do you currently stay updated on new AI tools and workflows?",
        options: [
            { text: "Random Twitter/LinkedIn posts — very hit or miss", points: 3 },
            { text: "A few YouTube channels or newsletters but nothing consistent", points: 2 },
            { text: "I have a reliable, curated source that gives me actionable intel weekly", points: 1 },
        ],
    },
    {
        id: 6,
        category: "Time & Output",
        text: "How long does it typically take you to produce a solid first draft — whether that's content, a proposal, code, or a plan?",
        options: [
            { text: "Hours — I mostly do everything from scratch manually", points: 3 },
            { text: "30–90 minutes — I use some AI but the process is still slow", points: 2 },
            { text: "Under 30 minutes — AI compresses my drafting time dramatically", points: 1 },
        ],
    },
    {
        id: 7,
        category: "Weekly Hours Lost",
        text: "Roughly how many hours per week do you estimate you're losing to inefficiency — tasks that AI could handle faster or better?",
        options: [
            { text: "15+ hours — a huge chunk of my week", points: 3, hoursLost: 15 },
            { text: "5–15 hours — noticeable but manageable", points: 2, hoursLost: 10 },
            { text: "Under 5 hours — I run a tight, AI-assisted operation", points: 1, hoursLost: 3 },
        ],
    },
    {
        id: 8,
        category: "AI Stack",
        text: "How would you describe your current AI tool stack?",
        options: [
            { text: "I don't really have one — I just use whatever I hear about", points: 3, hoursLost: 12 },
            { text: "A few tools I use regularly but no real system connecting them", points: 2, hoursLost: 7 },
            { text: "A deliberate, connected stack optimised for my specific workflow", points: 1, hoursLost: 2 },
        ],
    },
    {
        id: 9,
        category: "Implementation",
        text: "When you read about a useful AI tool or automation, what usually happens next?",
        options: [
            { text: "I bookmark it and never actually implement it", points: 3 },
            { text: "I try it once but rarely build it into my regular workflow", points: 2 },
            { text: "I test it quickly and integrate it if it saves meaningful time", points: 1 },
        ],
    },
    {
        id: 10,
        category: "Builder Mindset",
        text: "If you could get one practical, no-fluff AI tool or automation dropped in your inbox twice a week — would that move the needle for you?",
        options: [
            { text: "100% yes — that's exactly what I've been looking for", points: 3 },
            { text: "Probably — depends on how actionable it actually is", points: 2 },
            { text: "Maybe — I already have good sources but always open to better", points: 1 },
        ],
    },
]

interface QuizContainerProps {
    onComplete: (score: number, efficiencyData: { weeklyHoursLost: number; annualHoursLost: number }) => void
    onProgress: (currentQuestion: number) => void
}

export function QuizContainer({ onComplete, onProgress }: QuizContainerProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [totalHoursLost, setTotalHoursLost] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleAnswer = (points: number, hoursLost?: number) => {
        if (isAnimating) return

        setIsAnimating(true)
        const newScore = score + points
        setScore(newScore)

        if (hoursLost) {
            setTotalHoursLost((prev) => prev + hoursLost)
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion)
                onProgress(nextQuestion)
                setIsAnimating(false)
            } else {
                const weeklyHoursLost = Math.round(totalHoursLost / 2)
                onComplete(newScore, {
                    weeklyHoursLost,
                    annualHoursLost: weeklyHoursLost * 52,
                })
            }
        }, 300)
    }

    const question = questions[currentQuestion]

    return (
        <div className="space-y-4">
            <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/30 mb-3 uppercase tracking-widest">
                    {question.category} · {currentQuestion + 1} of {questions.length}
                </span>
            </div>

            <Card
                className={`p-4 md:p-6 transition-all duration-300 bg-[#0f1010] border-white/10 ${isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
            >
                <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 leading-relaxed">
                    {question.text}
                </h2>

                <div className="space-y-2 md:space-y-3">
                    {question.options.map((option, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="w-full p-3 md:p-4 h-auto text-left justify-start hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all duration-200 bg-transparent text-gray-300 border-white/15 text-sm md:text-base"
                            onClick={() => handleAnswer(option.points, option.hoursLost)}
                            disabled={isAnimating}
                        >
                            <span>{option.text}</span>
                        </Button>
                    ))}
                </div>
            </Card>

            {(question.id === 7 || question.id === 8) && (
                <Card className="p-4 bg-[#f97316]/5 border-[#f97316]/20">
                    <div className="text-center">
                        <div className="text-xl mb-2">⚡</div>
                        <h3 className="font-semibold text-white mb-1 text-xs uppercase tracking-widest">Operator Insight</h3>
                        <p className="text-sm text-gray-400">
                            {question.id === 7
                                ? "15 hrs/week lost to inefficiency = 780 hours a year. That's nearly 5 months of full-time work given away for free."
                                : "Builders with a deliberate AI stack report saving 10–20 hrs/week. That's time you could spend building, selling, or sleeping."}
                        </p>
                    </div>
                </Card>
            )}
        </div>
    )
}