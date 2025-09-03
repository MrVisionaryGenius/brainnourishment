"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FloatingActionButtonProps {
  onBuyClick: () => void
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onBuyClick }) => {
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>(0.1)

  return (
    <div
      ref={buttonRef}
      className={`fixed bottom-6 right-6 z-40 transition-all duration-700 ease-out ${
        buttonVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
      }`}
    >
      <button
        onClick={onBuyClick}
        className="group relative bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] hover:from-[#ca6d41] hover:to-[#ca6e3f] text-white font-bold py-3 px-5 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-1   overflow-hidden"
      >
        <div className="flex items-center space-x-2 relative z-10">
          <span className="text-sm">Get Started — $14</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Soft pulsing indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
      </button>
    </div>
  )
}

export default FloatingActionButton
