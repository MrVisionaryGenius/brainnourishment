"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SocialProofSection = () => {
    // ✅ Explicitly type refs as <HTMLDivElement>
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>(0.1)
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>(0.2)

    return (
        <section
            ref={sectionRef}
            className={`py-16 bg-gradient-to-r from-gray-900 to-black transition-all duration-700 ease-out ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="container mx-auto px-4 text-center">
                <h2
                    className={`text-3xl font-bold mb-8 font-serif transition-all duration-700 ease-out delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    JOIN 15,000+ PEOPLE WHO ESCAPED
                </h2>
                <div
                    ref={cardsRef}
                    className={`grid md:grid-cols-3 gap-6 mb-8 transition-all duration-800 ease-out delay-300 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:border-red-500/30 transition-colors duration-300">
                        <div className="text-4xl mb-2">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-300 mb-4">
                            "I got my life back. Lost 40lbs, started my business, found love. This challenge saved my future."
                        </p>
                        <div className="text-red-400 font-bold mt-2 font-serif">- Sarah M., 26</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:border-red-500/30 transition-colors duration-300">
                        <div className="text-4xl mb-2">🔥</div>
                        <p className="text-gray-300 mb-4">
                            "From 8 hours daily to 30 minutes. I read 12 books, learned coding, and got promoted. Worth every penny."
                        </p>
                        <div className="text-red-400 font-bold mt-2 font-serif">- Marcus T., 29</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:border-red-500/30 transition-colors duration-300">
                        <div className="text-4xl mb-2">💎</div>
                        <p className="text-gray-300 mb-4">
                            "The bonus on Day 14 alone generated $50k in revenue for my side hustle. This is life-changing."
                        </p>
                        <div className="text-red-400 font-bold mt-2 font-serif">- Jennifer L., 32</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialProofSection
