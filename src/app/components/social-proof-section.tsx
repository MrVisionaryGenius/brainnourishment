"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

// Mock hook for demonstration - replace with your actual implementation
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = (node: Element | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold }
      )
      observer.observe(node)

      // Cleanup function
      return () => observer.disconnect()
    }
  }

  return { ref, isVisible }
}
const testimonials = [
  {
    id: 1,
    quote:
      "I’ve been battling phone overuse for years. I’m joining this challenge because I want to finally reclaim my focus and feel present again.",
    name: "Mohsin Ahmed, 24",
    role: "Software Engineer",
    image: null,
  },
  {
    id: 2,
    quote:
      "My evenings vanish into scrolling. I’m hoping this challenge gives me the reset I need to start reading, coding, and actually enjoying my time again.",
    name: "Rehan Momin, 23",
    role: "AI Engineer",
    image: "/images/rehan.jpg",
  },
  {
    id: 3,
    quote:
      "I struggle with late-night screen time and poor sleep. I’m joining because I want to wake up refreshed and not feel drained all day.",
    name: "Jennifer Smith, 32",
    role: "Designer",
    image: null,
  },
  {
    id: 4,
    quote:
      "At work I keep checking my phone every few minutes. I’m signing up because I expect this challenge to help me stay focused and more productive.",
    name: "Ahmed Raza, 26",
    role: "Marketing Manager",
    image: "/images/ahmed.png",
  },
  {
    id: 5,
    quote:
      "I’ve wasted too many nights on social media. I’m joining because I want structure, accountability, and the chance to reset my habits.",
    name: "Sarah Johnson, 29",
    role: "Teacher",
    image: null,
  },
  {
    id: 6,
    quote:
      "For years I’ve wanted to step away from my phone but never managed it. I’m hoping this event finally gives me the push I need.",
    name: "David Lee, 35",
    role: "Entrepreneur",
    image: "/images/david.jpg",
  },
]

const SocialProofSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)


  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-[#1a1f1b] transition-all duration-700 ease-out overflow-hidden ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      <div className="container mx-auto px-6 text-center mb-12">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 text-[#f0e9d9] transition-all duration-700 ease-out delay-200 ${sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
            }`}
        >
          Why People are Joining.
        </h2>
        <p
          className={`text-lg text-[#f0e9d9]/70 mb-12 transition-all duration-700 ease-out delay-300 ${sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
            }`}
        >
          Real stories from people reclaiming their time and focus.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => {
            const firstLetter = testimonial.name.charAt(0)

            return (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 hover:bg-white/10 transition-all duration-300 "
              >
                <div className="flex justify-center mb-4">
                  <div className="flex text-xl">⭐⭐⭐⭐⭐</div>
                </div>

                <blockquote className="text-[#f1eada] mb-6 text-lg leading-relaxed italic min-h-[120px] flex items-center">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="border-t border-[#ca6e3f]/20 pt-4">
                  <div className="flex items-center space-x-3">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ca6e3f] to-[#ca6d41] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {firstLetter}
                      </div>
                    )}
                    <div className="text-left">
                      <div className="font-semibold text-[#f0e9d9] text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-[#ca6e3f] text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats and CTA Section */}
      <div className="container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out delay-600 ${sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
            }`}
        >
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ca6e3f] mb-2">
                  2,500+
                </div>
                <div className="text-[#f0e9d9]/70 text-sm">Hours Reclaimed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ca6e3f] mb-2">
                  94%
                </div>
                <div className="text-[#f0e9d9]/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ca6e3f] mb-2">
                  40+
                </div>
                <div className="text-[#f0e9d9]/70 text-sm">Lives Changed</div>
              </div>
            </div>

            <a href="/quiz">
              <button
                className="group bg-[#ca6e3f] text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-[#ca6e3f]/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#ca6e3f]/40 hover:shadow-[#ca6e3f]/60 hover:shadow-xl inline-flex items-center gap-2"
              >
                Join Them Today - Take The Test
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </div>

          {/* Live Counter */}
          <div className="inline-flex items-center bg-[#ca6e3f]/20 backdrop-blur-sm border border-[#ca6e3f]/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-[#ca6e3f] rounded-full animate-pulse mr-3"></div>
            <span className="text-[#f1eada] text-sm font-medium">
              <span className="font-bold text-[#ca6e3f]">6</span> people started
              their reset in the last hour
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
