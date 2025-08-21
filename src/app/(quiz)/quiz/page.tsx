"use client"

import { useState } from "react"
import { ProgressBar } from "../_components/progress-bar"
import { QuizContainer } from "../_components/quiz-container"
import { EmailCollector } from "../_components/email-collector"
import { ResultsDisplay } from "../_components/results-display"
import { Navbar } from "@/app/components/navbar"


export type QuizState = "quiz" | "email" | "results"

export interface QuizData {
  currentQuestion: number
  score: number
  totalQuestions: number
  screenTimeData: { socialMedia: number; totalScreen: number }
}

export default function PhoneAddictionTest() {
  const [state, setState] = useState<QuizState>("quiz")
  const [quizData, setQuizData] = useState<QuizData>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: 10,
    screenTimeData: { socialMedia: 0, totalScreen: 0 },
  })

  const handleQuizComplete = (finalScore: number, screenTimeData: { socialMedia: number; totalScreen: number }) => {
    setQuizData((prev) => ({ ...prev, score: finalScore, screenTimeData }))
    setState("email")
  }

  const handleEmailSubmitted = () => {
    setState("results")
  }

  const progress = (quizData.currentQuestion / quizData.totalQuestions) * 100

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f0e9d9]">
        <div className="container mx-auto px-4 py-4 md:py-8 max-w-2xl">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f1eada] rounded-full mb-3 md:mb-4 border-2 border-[#ca6e3f]">
              <span className="text-2xl">📱</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1b201c] mb-2 md:mb-3">
              Phone Addiction Test
            </h1>
            <p className="text-base md:text-lg text-[#1b201c] opacity-80 max-w-md mx-auto">
              Take this science-backed assessment to understand your relationship with your phone
            </p>
          </div>

          {/* Progress Bar */}
          {state === "quiz" && (
            <ProgressBar
              progress={progress}
              currentQuestion={quizData.currentQuestion}
              totalQuestions={quizData.totalQuestions}
            />
          )}

          {/* Main Content */}
          <div className="bg-[#f1eada] rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-[#ca6e3f]/20">
            {state === "quiz" && (
              <QuizContainer
                onComplete={handleQuizComplete}
                onProgress={(current) => setQuizData((prev) => ({ ...prev, currentQuestion: current }))}
              />
            )}

            {state === "email" && <EmailCollector onSubmitted={handleEmailSubmitted} />}

            {state === "results" && <ResultsDisplay score={quizData.score} screenTimeData={quizData.screenTimeData} />}
          </div>
        </div>
      </div>
    </>
  )
}
