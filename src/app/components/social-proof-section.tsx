"use client"

import { useState, useEffect } from "react"
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
      
      return () => observer.disconnect()
    }
  }
  
  return { ref, isVisible }
}

const testimonials = [
  {
    id: 1,
    quote: "I went from 6 hours a day on social media to under 2 hours. Now I actually have time to study and exercise again.",
    name: "Mohsin, 22",
    role: "Software Engineer"
  },
  {
    id: 2,
    quote: "I cut my daily screen time by 70%. In the past month I read 3 books and finally finished a side project I'd been putting off for years.",
    name: "Rehan, 28",
    role: "AI Engineer"
  },
  {
    id: 3,
    quote: "The daily reset helped me break habits I thought were permanent. I'm sleeping better, and my evenings finally feel free again.",
    name: "Jennifer, 32",
    role: "Designer"
  },
  {
    id: 4,
    quote: "My productivity at work doubled after I stopped checking my phone every 5 minutes. My boss even noticed the improvement!",
    name: "Ahmed, 26",
    role: "Marketing Manager"
  },
  {
    id: 5,
    quote: "I used to scroll until 2 AM every night. Now I fall asleep by 10 PM and wake up feeling refreshed. Life-changing!",
    name: "Sarah, 29",
    role: "Teacher"
  },
  {
    id: 6,
    quote: "After 3 weeks, I realized I hadn't mindlessly picked up my phone in days. The anxiety and FOMO are completely gone.",
    name: "David, 35",
    role: "Entrepreneur"
  }
]

const SocialProofSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 4000) // Change every 4 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused])

  const handleCTAClick = () => {
    console.log("Social proof CTA clicked")
    // Add your tracking/conversion logic here
  }

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-[#1a1f1b] transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 text-[#f0e9d9] transition-all duration-700 ease-out delay-200 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Why People are Joining.
        </h2>
        <p
          className={`text-lg text-[#f0e9d9]/70 mb-12 transition-all duration-700 ease-out delay-300 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          See how others are planning to reclaim their time
        </p>

        {/* Horizontal Scrolling Carousel */}
        <div 
          className="relative overflow-hidden mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              width: `${(testimonials.length * 100) / 3}%`
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="flex text-2xl">⭐⭐⭐⭐⭐</div>
                  </div>
                  <blockquote className="text-[#f1eada] mb-6 text-lg leading-relaxed italic min-h-[120px] flex items-center">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <cite className="text-[#ca6e3f] font-semibold not-italic">
                    – {testimonial.name} ({testimonial.role})
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mb-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#ca6e3f] scale-125' 
                  : 'bg-[#ca6e3f]/30 hover:bg-[#ca6e3f]/60'
              }`}
            />
          ))}
        </div>

        {/* Stats and CTA Section */}
        <div
          className={`transition-all duration-700 ease-out delay-600 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-[#ca6e3f]/20 mb-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ca6e3f] mb-2">2,500+</div>
                <div className="text-[#f0e9d9]/70 text-sm">Hours Reclaimed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ca6e3f] mb-2">94%</div>
                <div className="text-[#f0e9d9]/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ca6e3f] mb-2">40+</div>
                <div className="text-[#f0e9d9]/70 text-sm">Lives Changed</div>
              </div>
            </div>
            
            <button
              onClick={handleCTAClick}
              className="group bg-[#ca6e3f] text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-[#ca6e3f]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Join Them Today - Take The Test
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Live Counter */}
          <div className="inline-flex items-center bg-[#ca6e3f]/20 backdrop-blur-sm border border-[#ca6e3f]/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-[#ca6e3f] rounded-full animate-pulse mr-3"></div>
            <span className="text-[#f1eada] text-sm font-medium">
              <span className="font-bold text-[#ca6e3f]">6</span> people started their reset in the last hour
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-1-3 {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}

export default SocialProofSection
