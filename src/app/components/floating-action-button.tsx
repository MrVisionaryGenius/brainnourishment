"use client"

import type React from "react"
import { Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FloatingActionButtonProps {
    onBuyClick: () => void
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onBuyClick }) => {
    const { ref: buttonRef, isVisible: buttonVisible } =
    useScrollAnimation<HTMLDivElement>(0.1)

    return (
        <div
            ref={buttonRef}
            className={`fixed bottom-8 right-8 z-40 transition-all duration-700 ease-out ${buttonVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75"
                }`}
        >
            <button
                onClick={onBuyClick}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-bounce flex items-center space-x-2 font-serif"
            >
                <Zap className="w-5 h-5" />
                <span>BREAK FREE NOW!</span>
            </button>
        </div>
    )
}

export default FloatingActionButton
