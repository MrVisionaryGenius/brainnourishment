"use client"

import type React from "react"

import { X } from "lucide-react"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: React.ReactNode
}

export function CustomModal({ isOpen, onClose, title, content }: CustomModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-[#f1eada] rounded-2xl shadow-2xl p-6 w-full max-w-sm border-4 border-[#ca6e3f]/20">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold text-[#1b201c]">{title}</h4>
          <button onClick={onClose} className="text-[#1b201c] opacity-60 hover:opacity-100 transition-opacity">
            <X size={24} />
          </button>
        </div>
        <div className="text-[#1b201c] space-y-3">{content}</div>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-[#ca6e3f] hover:bg-[#ca6d41] text-white font-semibold rounded-lg transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}
