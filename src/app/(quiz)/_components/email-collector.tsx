"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Loader2 } from "lucide-react"

interface EmailCollectorProps {
  onSubmitted: () => void
}

export function EmailCollector({ onSubmitted }: EmailCollectorProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return

    if (!email.trim() || !validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      // Send email to Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbyNVQNJvOJAsfrqoTy-V2SfHdWrWen-_cILCe_3Dv4-EDNLlrTqoeJ47K1N_HUQK6wDmw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim() }),
        },
      )

      onSubmitted()
    } catch (error) {
      console.error("Error:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ca6e3f]/10 rounded-full mb-4 border-2 border-[#ca6e3f]">
        <Mail className="w-8 h-8 text-[#ca6e3f]" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#1b201c] mb-3">Get Your Results & Free Detox Tips</h2>
        <p className="text-[#1b201c] opacity-80 mb-6">
          Enter your email to see your personalized results and receive science-backed tips to reduce phone addiction.
        </p>
      </div>

      <Card className="p-6 bg-white border-[#ca6e3f]/20">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center text-lg h-12 border-[#ca6e3f]/30 focus:border-[#ca6e3f] text-[#1b201c]"
              disabled={isSubmitting}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold bg-[#ca6e3f] hover:bg-[#ca6d41] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "See My Results"
            )}
          </Button>
        </form>
      </Card>

      <p className="text-sm text-[#1b201c] opacity-70">
        We respect your privacy. Your email will only be used to send you your results and helpful tips.
      </p>
    </div>
  )
}
