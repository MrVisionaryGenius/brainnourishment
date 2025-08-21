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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-md">
      <div className="bg-[#1a1f1b] p-8 rounded-3xl shadow-2xl max-w-lg w-full relative border border-[#ca6e3f]/50">
        <h3 className="text-2xl font-black text-[#ca6e3f] mb-4 font-serif">ARE YOU LEAVING?</h3>
        <p className="text-xl font-bold text-[#f1eada] mb-6">
          This is your <span className="text-[#ca6e3f]">red pill</span> or{" "}
          <span className="text-blue-400">blue pill</span> solution.
        </p>
        <div className="bg-[#f1eada]/10 p-6 rounded-2xl mb-6">
          <p className="text-lg text-[#f0e9d9]">
            Choose the **blue pill**, and a year from now, you&apos;ll still be endlessly scrolling, watching others
            achieve their dreams, and wondering why you feel so lost. You&apos;re not depressed; you&apos;re just
            trapped in a loop.
          </p>
          <p className="text-lg text-[#ca6e3f] mt-4">
            Choose the **red pill**, and you will face your addiction head-on and claim your life back.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              onClose()
              onBuyClick()
            }}
            className="w-full bg-[#ca6e3f] hover:bg-[#ca6d41] text-white font-black text-lg py-4 rounded-full transition-all duration-300 hover:scale-105 font-serif"
          >
            I CHOOSE THE RED PILL
          </button>
          <button
            onClick={onClose}
            className="w-full bg-[#f1eada]/20 hover:bg-[#f1eada]/30 text-[#f1eada] font-bold text-lg py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            No, I&apos;ll Keep Scrolling
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExitModal
