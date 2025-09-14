"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-[#1a1f1b] text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.jpeg"
                            alt="Logo"
                            height={28}
                            width={28}
                            className="rounded-full"
                        />
                        <span className="text-xl font-bold">Brain Nourishment</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="hover:text-[#ca6e3f] transition-colors">
                            Home
                        </Link>
                        <Link href="/quiz" className="hover:text-[#ca6e3f] transition-colors">
                            Take Quiz
                        </Link>
                        <Link href="/leaderboard" className="hover:text-[#ca6e3f] transition-colors">
                            Leaderboard
                        </Link>
                        <Link href="/about-us" className="hover:text-[#ca6e3f] transition-colors">
                            About us
                        </Link>
                        <Link
                            href="/quiz"
                            className="bg-[#ca6e3f] hover:bg-[#ca6d41] px-4 py-2 rounded-lg font-semibold transition-colors"
                        >
                            Start Test
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-[#ca6e3f] transition-colors"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a1f1b] border-t border-gray-700">
                            <Link
                                href="/"
                                className="block px-3 py-2 hover:text-[#ca6e3f] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/quiz"
                                className="block px-3 py-2 hover:text-[#ca6e3f] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Take Quiz
                            </Link>
                            <Link
                                href="/leaderboard"
                                className="block px-3 py-2 hover:text-[#ca6e3f] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Leaderboard
                            </Link>
                            <Link
                                href="/about-us"
                                className="block px-3 py-2 hover:text-[#ca6e3f] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About us
                            </Link>
                            <Link
                                href="/quiz"
                                className="block mx-3 mt-4 bg-[#ca6e3f] hover:bg-[#ca6d41] px-4 py-2 rounded-lg font-semibold text-center transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Start Test
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
