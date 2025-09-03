"use client"

import type React from "react"
import { useState } from "react"

interface AgeInputModalProps {
    isOpen: boolean
    onAgeSubmit: (age: number) => void
}

const AgeInputModal: React.FC<AgeInputModalProps> = ({ isOpen, onAgeSubmit }) => {
    const [inputAge, setInputAge] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const age = parseInt(inputAge)

        if (!inputAge || isNaN(age)) {
            setError("Please enter a valid age")
            return
        }

        if (age < 13 || age > 100) {
            setError("Please enter an age between 13 and 100")
            return
        }

        setError("")
        onAgeSubmit(age)
    }

    const handleSkip = () => {
        onAgeSubmit(25) // Better default age
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#1a1f1b] p-8 rounded-2xl shadow-xl max-w-md w-full mx-4 relative border border-[#ca6e3f]/20">

                {/* Subtle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/5 to-transparent rounded-2xl"></div>

                <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#ca6e3f] to-[#ca6d41] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-white">👋</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#f0e9d9] mb-2  ">
                            Quick Question...
                        </h3>
                        <p className="text-sm text-[#f1eada]/80 leading-relaxed">
                            To show you exactly how much time you could be wasting, what&apos;s your age?
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-[#f1eada] mb-2">
                                Your Age
                            </label>
                            <input
                                type="number"
                                id="age"
                                value={inputAge}
                                onChange={(e) => setInputAge(e.target.value)}
                                placeholder="e.g., 25"
                                min="13"
                                max="100"
                                className="w-full px-4 py-3 bg-[#f1eada]/10 border border-[#f1eada]/20 rounded-xl text-[#f0e9d9] placeholder-[#f1eada]/50 focus:outline-none focus:ring-2 focus:ring-[#ca6e3f]/50 focus:border-[#ca6e3f]/50 transition-all duration-300"
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-400 text-xs mt-2 flex items-center">
                                    <span className="mr-1">⚠️</span>
                                    {error}
                                </p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3 pt-2">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ca6e3f] to-[#ca6d41] hover:from-[#ca6d41] hover:to-[#ca6e3f] text-white font-bold text-base py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]  "
                            >
                                Show Me My Results
                            </button>

                            <button
                                type="button"
                                onClick={handleSkip}
                                className="w-full bg-transparent hover:bg-[#f1eada]/5 text-[#f1eada]/70 hover:text-[#f1eada] font-medium text-sm py-2 rounded-xl transition-all duration-300 border border-[#f1eada]/20"
                            >
                                Skip (Use Age 25)
                            </button>
                        </div>
                    </form>

                    {/* Privacy note */}
                    <div className="text-center mt-4">
                        <p className="text-xs text-[#f1eada]/50">
                            🔒 Your age is only used for time calculations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgeInputModal
