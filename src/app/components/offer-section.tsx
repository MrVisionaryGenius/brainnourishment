"use client";

import type React from "react";
import { Mail, BookOpen, Trophy, Brain, Gift, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface OfferSectionProps {
  onBuyClick: () => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ onBuyClick }) => {
  // ✅ Explicitly type refs
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLElement>(0.1);
  const { ref: featuresRef, isVisible: featuresVisible } =
    useScrollAnimation<HTMLDivElement>(0.2);
  const { ref: pricingRef, isVisible: pricingVisible } =
    useScrollAnimation<HTMLDivElement>(0.3);

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-gray-900 to-black transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out delay-200 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-serif">
            THE PHONE FREEDOM BLUEPRINT
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A scientifically-designed 14-day system that doesn't just reduce
            screen time, it completely rewires your brain's relationship with
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Value Stack */}
          <div
            ref={featuresRef}
            className={`space-y-6 transition-all duration-800 ease-out delay-300 ${
              featuresVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30 hover:border-red-500/30 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-600 p-2 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">
                  14 Daily Brain-Rewiring Emails
                </h3>
              </div>
              <p className="text-gray-300">
                Personalized daily missions that systematically break your
                addiction patterns. No fluff, just pure psychological warfare
                against your phone dependency.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30 hover:border-red-500/30 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-600 p-2 rounded-full">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">
                  Interactive Progress Journal
                </h3>
              </div>
              <p className="text-gray-300">
                A powerful daily accountability system that tracks your mental
                state, urges, and breakthroughs. Watch your addiction crumble in
                real-time.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30 hover:border-red-500/30 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-600 p-2 rounded-full">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">
                  Live Gamified Leaderboard
                </h3>
              </div>
              <p className="text-gray-300">
                Compete with thousands of other freedom fighters. Social
                accountability that makes quitting addictive behaviors actually
                addictive.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30 hover:border-red-500/30 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-600 p-2 rounded-full">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">
                  $229 Mental Wellness Arsenal
                </h3>
              </div>
              <p className="text-gray-300">
                Exclusive brain-training templates and AI prompts designed by
                addiction specialists. Tools worth more than 8x your investment.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-red-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-600 p-2 rounded-full">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif">
                  🎁 SECRET DAY 14 BONUS
                </h3>
              </div>
              <p className="text-gray-300">
                The "4-Hour Transformation Protocol" - Turn your reclaimed time
                into a life-changing success foundation. This alone is worth
                $500+.
              </p>
            </div>
          </div>

          {/* Pricing Box */}
          <div
            ref={pricingRef}
            className={`relative transition-all duration-800 ease-out delay-400 ${
              pricingVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-red-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-md p-8 rounded-3xl border border-red-500/50 text-center">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block mb-4 animate-pulse">
                🔥 LIMITED TIME OFFER
              </div>

              <div className="mb-6">
                <div className="text-lg text-gray-400 line-through">
                  Normal Price: $49
                </div>
                <div className="text-6xl font-black text-white font-serif">
                  $14
                </div>
                <div className="text-sm text-gray-300">
                  One-time investment in your freedom
                </div>
              </div>

              <div className="bg-gray-800/30 p-4 rounded-2xl mb-6">
                <div className="text-lg font-bold text-white font-serif">
                  🎯 Success Guarantee
                </div>
                <div className="text-sm text-gray-300">
                  94% of participants report life-changing results or your money
                  back
                </div>
              </div>

              <button
                onClick={onBuyClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 mb-4 font-serif"
              >
                🚀 TRANSFORM MY LIFE NOW
              </button>

              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>30+ joined today</span>
                </div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
