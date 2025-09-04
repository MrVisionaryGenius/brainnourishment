"use client"

import { useState } from "react"
import { Smartphone, TrendingDown, Target, ArrowRight, Clock, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock hook for demonstration - replace with your actual implementation
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = (node: any) => {
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

const ShockSection = () => {
  const router = useRouter()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1)
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2)
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1)

  const handleCTAClick = (position: any) => {
    console.log(`CTA clicked from: ${position}`)
    router.push("/quiz")
  }

  return (
    <section
      ref={sectionRef}
      className={`py-20 rounded-4xl bg-gradient-to-br from-[#ca6e3f] to-[#ca6d41] transition-all duration-700 ease-out ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-white transition-all duration-700 ease-out delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
          >
            Are You Addicted To Your Phone?
            <br className="hidden sm:block" />
            Take The 10-Second Test.
          </h2>

          {/* First CTA - Right after the hook */}
          <div
            className={`mb-8 transition-all duration-700 ease-out delay-250 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            <button
              onClick={() => handleCTAClick('header')}
              className="group bg-white text-[#ca6e3f] font-bold text-lg px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Take The 10-Second Test Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          <div
            className={`bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl mb-12 border border-white/20 transition-all duration-700 ease-out delay-300 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
          >
            <p className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              If you&apos;re reading this and already feel the urge to check your notifications-you&apos;re not alone.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              It&apos;s not weakness. It&apos;s design. Tech companies spend billions making sure you can&apos;t look away.
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              The result? <span className="font-semibold text-white">Every year, the average person loses 2 entire months of their life to scrolling.</span>
            </p>
            <div className="text-3xl md:text-4xl font-bold text-white bg-white/10 rounded-2xl py-6 px-8 border border-white/20 mb-8">
              &quot;Your time is their business model.&quot;
            </div>

            {/* Urgency CTA inside the main content block */}
            <div className="bg-white/15 rounded-2xl p-6 border border-white/30">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-white" />
                <p className="text-white font-medium">Don't lose another day to endless scrolling</p>
              </div>
              <button
                onClick={() => handleCTAClick('urgency')}
                className="group bg-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 inline-flex items-center gap-2"
              >
                Start Your Phone Detox Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <div
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-800 ease-out delay-400 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">4+ Hours Daily</h3>
              <p className="text-white/90 text-sm leading-relaxed">That&apos;s 60 full days every year, gone.</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">72% Admit It Hurts Their Life</h3>
              <p className="text-white/90 text-sm leading-relaxed">Work, health, relationships all take the hit.</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
              <Target className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-3 text-white">94% Who Tried Our Reset</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-4">Cut screen time in half. Freedom is possible.</p>

              {/* Social proof CTA in the success stat card */}
              <button
                onClick={() => handleCTAClick('social_proof')}
                className="group bg-green-500/20 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-500/30 transition-all duration-300 border border-green-400/30 hover:border-green-400/50 text-sm inline-flex items-center gap-2 w-full justify-center"
              >
                <CheckCircle className="w-4 h-4" />
                Join The 94%
              </button>
            </div>
          </div>

          {/* Final strong CTA section */}
          <div
            ref={ctaRef}
            className={`bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 transition-all duration-700 ease-out delay-500 ${ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready To Reclaim Your Life?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Join thousands who've already broken free from phone addiction
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleCTAClick('primary_final')}
                className="group bg-white text-[#ca6e3f] font-bold text-xl px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3"
              >
                Take The Free 10-Second Test
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => handleCTAClick('secondary_final')}
                className="group border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-white/70"
              >
                Learn More About Our Method
              </button>
            </div>

            <p className="text-white/70 text-sm mt-4">
              ✓ No spam, ever  ✓ Free forever  ✓ Takes 10 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShockSection
