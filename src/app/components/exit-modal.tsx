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
            <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full relative border border-red-500/50">
                <h3 className="text-2xl font-black text-red-500 mb-4 font-serif">ARE YOU LEAVING?</h3>
                <p className="text-xl font-bold text-gray-300 mb-6">
                    This is your <span className="text-red-400">red pill</span> or{" "}
                    <span className="text-blue-400">blue pill</span> solution.
                </p>
                <div className="bg-gray-800 p-6 rounded-2xl mb-6">
                    <p className="text-lg text-gray-200">
                        Choose the **blue pill**, and a year from now, you'll still be endlessly scrolling, watching others achieve
                        their dreams, and wondering why you feel so lost. You're not depressed; you're just trapped in a loop.
                    </p>
                    <p className="text-lg text-red-400 mt-4">
                        Choose the **red pill**, and you will face your addiction head-on and claim your life back.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => {
                            onClose()
                            onBuyClick()
                        }}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 rounded-full transition-all duration-300 hover:scale-105 font-serif"
                    >
                        I CHOOSE THE RED PILL
                    </button>
                    <button
                        onClick={onClose}
                        className="w-full bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold text-lg py-4 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        No, I'll Keep Scrolling
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExitModal
