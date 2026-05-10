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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#1a1f1b] rounded-2xl shadow-2xl p-6 w-full max-w-sm border border-white/10">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-base font-bold text-white">{title}</h4>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="text-gray-300 space-y-3">{content}</div>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}