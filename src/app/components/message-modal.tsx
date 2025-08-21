"use client"

import type React from "react"

interface MessageModalProps {
  message: string
  onClose: () => void
}

const MessageModal: React.FC<MessageModalProps> = ({ message, onClose }) => {
  if (!message) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-[#ca6e3f] to-[#ca6d41] p-8 rounded-3xl shadow-2xl max-w-md w-full text-center transform animate-pulse">
        <p className="text-xl font-bold text-white mb-6 font-serif">{message}</p>
        <button
          onClick={onClose}
          className="bg-white text-[#ca6e3f] font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-serif"
        >
          Let&apos;s Go! 🚀
        </button>
      </div>
    </div>
  )
}

export default MessageModal
