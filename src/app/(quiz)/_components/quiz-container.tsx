"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Question {
    id: number
    text: string
    options: {
        text: string
        points: number
        screenTimeHours?: number // For calculating lifetime impact
    }[]
}

const questions: Question[] = [
    {
        id: 1,
        text: "How often do you check your phone within 5 minutes of waking up?",
        options: [
            { text: "Always", points: 3 },
            { text: "Often", points: 2 },
            { text: "Rarely", points: 1 },
        ],
    },
    {
        id: 2,
        text: "Do you feel restless when you can't check your phone for 30 minutes?",
        options: [
            { text: "Yes", points: 3 },
            { text: "Sometimes", points: 2 },
            { text: "No", points: 1 },
        ],
    },
    {
        id: 3,
        text: "How often do you lose track of time while scrolling?",
        options: [
            { text: "Daily", points: 3 },
            { text: "Weekly", points: 2 },
            { text: "Rarely", points: 1 },
        ],
    },
    {
        id: 4,
        text: "Have you skipped tasks, meals, or sleep because of your phone?",
        options: [
            { text: "Yes", points: 3 },
            { text: "Sometimes", points: 2 },
            { text: "No", points: 1 },
        ],
    },
    {
        id: 5,
        text: "Do you open your phone without knowing why?",
        options: [
            { text: "All the time", points: 3 },
            { text: "Sometimes", points: 2 },
            { text: "Rarely", points: 1 },
        ],
    },
    {
        id: 6,
        text: "Do you ever feel anxious if your battery is below 20%?",
        options: [
            { text: "Yes", points: 3 },
            { text: "Sometimes", points: 2 },
            { text: "No", points: 1 },
        ],
    },
    {
        id: 7,
        text: "How many hours do you spend on social media daily?",
        options: [
            { text: "4+ hours", points: 3, screenTimeHours: 5 },
            { text: "2-4 hours", points: 2, screenTimeHours: 3 },
            { text: "Less than 2 hours", points: 1, screenTimeHours: 1 },
        ],
    },
    {
        id: 8,
        text: "What's your total daily screen time (including all apps)?",
        options: [
            { text: "8+ hours", points: 3, screenTimeHours: 9 },
            { text: "5-8 hours", points: 2, screenTimeHours: 6.5 },
            { text: "Less than 5 hours", points: 1, screenTimeHours: 3.5 },
        ],
    },
    {
        id: 9,
        text: "Have you tried deleting apps to focus but reinstalled them soon after?",
        options: [
            { text: "Yes", points: 3 },
            { text: "Once or twice", points: 2 },
            { text: "Never", points: 1 },
        ],
    },
    {
        id: 10,
        text: "Do you feel phone use affects your relationships?",
        options: [
            { text: "Yes, badly", points: 3 },
            { text: "Somewhat", points: 2 },
            { text: "Not really", points: 1 },
        ],
    },
]

interface QuizContainerProps {
    onComplete: (score: number, screenTimeData: { socialMedia: number; totalScreen: number }) => void
    onProgress: (currentQuestion: number) => void
}

export function QuizContainer({ onComplete, onProgress }: QuizContainerProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [screenTimeData, setScreenTimeData] = useState({ socialMedia: 0, totalScreen: 0 })
    const [isAnimating, setIsAnimating] = useState(false)

    const handleAnswer = (points: number, screenTimeHours?: number) => {
        if (isAnimating) return

        setIsAnimating(true)
        setScore((prev) => prev + points)

        // Track screen time data for quantification
        if (screenTimeHours) {
            const question = questions[currentQuestion]
            if (question.id === 7) {
                // Social media question
                setScreenTimeData((prev) => ({ ...prev, socialMedia: screenTimeHours }))
            } else if (question.id === 8) {
                // Total screen time question
                setScreenTimeData((prev) => ({ ...prev, totalScreen: screenTimeHours }))
            }
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1

            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion)
                onProgress(nextQuestion)
                setIsAnimating(false)
            } else {
                onComplete(score + points, screenTimeData)
            }
        }, 300)
    }

    const question = questions[currentQuestion]

    return (
        <div className="space-y-4">
            <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ca6e3f] text-white mb-3">
                    Question {currentQuestion + 1} of {questions.length}
                </span>
            </div>

            <Card
                className={`p-4 md:p-6 transition-all duration-300 bg-white border-[#ca6e3f]/20 ${isAnimating ? "opacity-50 scale-95" : "opacity-100 scale-100"}`}
            >
                <h2 className="text-lg md:text-xl font-semibold text-[#1b201c] mb-4 md:mb-6 leading-relaxed">
                    {question.text}
                </h2>

                <div className="space-y-2 md:space-y-3">
                    {question.options.map((option, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="w-full p-3 md:p-4 h-auto text-left justify-start hover:bg-[#ca6e3f] hover:text-white hover:border-[#ca6e3f] transition-all duration-200 bg-transparent text-[#1b201c] border-[#ca6e3f]/30 text-sm md:text-base"
                            onClick={() => handleAnswer(option.points, option.screenTimeHours)}
                            disabled={isAnimating}
                        >
                            <span>{option.text}</span>
                        </Button>
                    ))}
                </div>
            </Card>

            {(question.id === 7 || question.id === 8) && (
                <Card className="p-4 bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] border-[#ca6e3f]/30">
                    <div className="text-center">
                        <div className="text-2xl mb-2">⏰</div>
                        <h3 className="font-semibold text-[#1b201c] mb-2">Did You Know?</h3>
                        <p className="text-sm text-[#1b201c] opacity-80">
                            {question.id === 7
                                ? "3 hours on social media daily = 9 years of your life spent scrolling!"
                                : "8 hours of daily screen time = 24 years of your life looking at screens!"}
                        </p>
                    </div>
                </Card>
            )}
        </div>
    )
}
