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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className={`bg-[#1a1f1b] p-6 rounded-2xl shadow-xl max-w-md w-full mx-4 relative border border-[#ca6e3f]/20 transform transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}>

        {/* Clean minimal background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/3 to-transparent rounded-2xl"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#ca6e3f] mb-3  ">
              WAIT - BEFORE YOU GO
            </h3>
            <p className="text-base text-[#f1eada] leading-relaxed">
              One year from now, do you want to be{" "}
              <span className="text-[#ca6e3f]">in the same place</span>…{" "}
              or finally <span className="text-green-400">free from the scroll trap</span>?
            </p>
          </div>

          {/* Content box */}
          <div className="bg-[#f1eada]/5 p-5 rounded-xl mb-6 border border-[#f1eada]/10 space-y-3">
            <p className="text-sm text-[#f0e9d9] leading-relaxed">
              If you walk away now, nothing changes. You&apos;ll keep losing hours every day, watching others move forward while you feel stuck.
            </p>
            <p className="text-sm text-[#ca6e3f] font-medium leading-relaxed">
              But if you take action today, you reclaim your focus, your time, and your future.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={() => {
                onClose()
                onBuyClick()
              }}
              className="w-full bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] hover:from-[#ca6d41] hover:to-[#ca6e3f] text-white font-bold text-base py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]  "
            >
              YES - I&apos;M TAKING BACK MY LIFE
            </button>

            <button
              onClick={onClose}
              className="w-full bg-[#f1eada]/10 hover:bg-[#f1eada]/20 text-[#f1eada]/70 hover:text-[#f1eada] font-medium text-sm py-2.5 rounded-xl transition-all duration-300 border border-[#f1eada]/20"
            >
              Not Today - I&apos;ll Stay Stuck
            </button>
          </div>

          {/* Trust indicators */}
          <div className="text-center mt-4">
            <p className="text-xs text-[#f1eada]/50">
              Join 2,470+ others • 14-day guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExitModal