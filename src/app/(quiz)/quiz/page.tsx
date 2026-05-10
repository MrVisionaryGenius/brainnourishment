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
  efficiencyData: { weeklyHoursLost: number; annualHoursLost: number }
}

export default function AIOperatorQuiz() {
  const [state, setState] = useState<QuizState>("quiz")
  const [quizData, setQuizData] = useState<QuizData>({
    currentQuestion: 0,
    score: 0,
    totalQuestions: 10,
    efficiencyData: { weeklyHoursLost: 0, annualHoursLost: 0 },
  })

  const handleQuizComplete = (
    finalScore: number,
    efficiencyData: { weeklyHoursLost: number; annualHoursLost: number }
  ) => {
    setQuizData((prev) => ({ ...prev, score: finalScore, efficiencyData }))
    setState("email")
  }

  const handleEmailSubmitted = () => {
    setState("results")
  }

  const progress = (quizData.currentQuestion / quizData.totalQuestions) * 100

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f1010]">
        <div className="container mx-auto px-4 py-4 md:py-8 max-w-2xl">

          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f1b] rounded-full mb-3 md:mb-4 border-2 border-[#f97316]">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full px-4 py-1 mb-3">
              <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">The AI Operator · Free Assessment</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3">
              Are You Using AI to Its Full Potential?
            </h1>
            <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
              10 questions. 2 minutes. Find out exactly where you&apos;re leaving time and money on the table — and what to do about it.
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
          <div className="bg-[#1a1f1b] rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-white/10">
            {state === "quiz" && (
              <QuizContainer
                onComplete={handleQuizComplete}
                onProgress={(current) => setQuizData((prev) => ({ ...prev, currentQuestion: current }))}
              />
            )}
            {state === "email" && <EmailCollector onSubmitted={handleEmailSubmitted} />}
            {state === "results" && (
              <ResultsDisplay score={quizData.score} efficiencyData={quizData.efficiencyData} />
            )}
          </div>

          <p className="text-center text-xs text-gray-600 mt-6">
            The AI Operator · Practical AI tools & automations every Tuesday & Thursday · No fluff
          </p>
        </div>
      </div>
    </>
  )
}