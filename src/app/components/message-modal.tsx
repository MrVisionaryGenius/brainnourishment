"use client"

import type React from "react"

interface ExitModalProps {
  isOpen: boolean
  onClose: () => void
  onBuyClick: () => void
}

const ExitModal: React.FC<ExitModalProps> = ({ isOpen, onClose, onBuyClick }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className={`bg-[#1a1f1b] p-8 md:p-10 rounded-3xl shadow-2xl max-w-2xl w-full relative border border-[#ca6e3f]/30 transform transition-all duration-700 ease-out ${
        isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/5 to-transparent rounded-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#f0e9d9] mb-4 font-serif leading-tight">
              Before you go, ask yourself this…
            </h3>
            <p className="text-lg md:text-xl text-[#f1eada]/90 leading-relaxed max-w-lg mx-auto">
              One year from now, do you want to be in the exact same place you are today - or finally free from the scroll trap?
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f1eada]/5 to-[#f1eada]/10 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-[#f1eada]/10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-red-400 flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  If you walk away now…
                </h4>
                <p className="text-[#f1eada]/90 leading-relaxed pl-5">
                  You&apos;ll keep losing hours every day, watching others move forward while you stand still.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-green-400 flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                  If you take action today…
                </h4>
                <p className="text-[#f1eada]/90 leading-relaxed pl-5">
                  You&apos;ll reclaim your time, your focus, and your future.
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <button
              onClick={() => {
                onClose()
                onBuyClick()
              }}
              className="group w-full bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] hover:from-[#ca6d41] hover:to-[#ca6e3f] text-white font-bold text-lg md:text-xl py-5 rounded-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-0.5 font-serif relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Yes, I&apos;m Taking Back My Life
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-[#f1eada]/10 hover:bg-[#f1eada]/20 text-[#f1eada]/80 hover:text-[#f1eada] font-medium text-lg py-4 rounded-2xl transition-all duration-500 hover:scale-[1.01] border border-[#f1eada]/20"
            >
              Not Today - I&apos;ll Stay Stuck
            </button>
          </div>

          {/* Trust indicators */}
          <div className="text-center mt-6">
            <p className="text-sm text-[#f1eada]/60">
              Join 2,470+ others who chose freedom • 14-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExitModal
