"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface EmailCollectorProps {
  onSubmitted: () => void
}

export function EmailCollector({ onSubmitted }: EmailCollectorProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

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
    } catch (err) {
      console.error("Error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="text-center space-y-6 py-2">

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f97316]/10 rounded-full border-2 border-[#f97316]">
        <span className="text-2xl">⚡</span>
      </div>

      {/* Headline */}
      <div>
        <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 rounded-full px-4 py-1 mb-3">
          <span className="text-[#f97316] text-xs font-semibold uppercase tracking-widest">Your results are ready</span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">
          One last step — where should we send them?
        </h2>
        <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
          Drop your email below to unlock your full results. You&apos;ll also get added to{" "}
          <span className="text-[#f97316] font-medium">The AI Operator</span> — our free Substack where we send practical AI tools,
          prompts, and automations every Tuesday & Thursday. No fluff, no theory. Just stuff that works.
        </p>
      </div>

      {/* What you're getting */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
        {[
          { icon: "📬", label: "2x per week", desc: "Every Tue & Thu" },
          { icon: "🔧", label: "Practical only", desc: "Tools you can use today" },
          { icon: "🚫", label: "Zero fluff", desc: "No hype, no theory" },
        ].map((item) => (
          <div key={item.label} className="bg-[#0f1010] rounded-lg p-3 border border-white/10 text-center">
            <div className="text-xl mb-1">{item.icon}</div>
            <div className="text-xs font-semibold text-white">{item.label}</div>
            <div className="text-xs text-gray-500">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      <Card className="p-6 bg-[#0f1010] border-white/10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-center text-base h-12 bg-[#1a1f1b] border-white/20 focus:border-[#f97316] text-white placeholder:text-gray-600"
            disabled={isSubmitting}
          />
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold bg-[#f97316] hover:bg-[#ea6c0a] text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              "Show My Results & Join the Newsletter →"
            )}
          </Button>
        </form>
      </Card>

      <p className="text-xs text-gray-600">
        Free forever. Unsubscribe anytime. We respect your inbox — we hate spam as much as you do.
      </p>
    </div>
  )
}