"use client";

import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FinalCtaSectionProps {
  onBuyClick: () => void;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onBuyClick }) => {
  // Section ref can be generic HTMLElement
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLElement>(0.1);

  // Button ref is specifically HTMLButtonElement
  const { ref: buttonRef, isVisible: buttonVisible } =
    useScrollAnimation<HTMLButtonElement>(0.3);

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-red-900 via-gray-900 to-black text-center transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-black mb-6 font-serif transition-all duration-700 ease-out delay-200 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          YOUR LIFE IS ON THE LINE
        </h2>
        <p
          className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-700 ease-out delay-300 ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          Every second you wait, your addiction gets stronger. Every scroll
          steals your future. Every notification is a nail in the coffin of your
          dreams.
          <br />
          <br />
          <span className="text-red-400 font-bold">
            The choice is simple: Stay trapped, or break free TODAY.
          </span>
        </p>

        <div
          className={`max-w-md mx-auto mb-8 transition-all duration-700 ease-out delay-400 ${
            sectionVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div className="bg-black/50 p-6 rounded-3xl backdrop-blur-md border border-red-500/50">
            <div className="text-red-400 font-bold mb-2">⚠️ WARNING</div>
            <div className="text-sm text-gray-300">
              This offer expires when we hit 3,000 participants. Current count:
              30
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div
                className="bg-red-400 h-2 rounded-full"
                style={{ width: "94%" }}
              ></div>
            </div>
          </div>
        </div>

        <button
          ref={buttonRef}
          onClick={onBuyClick}
          className={`bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse font-serif ${
            buttonVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-90"
          }`}
        >
          🚨 CLAIM YOUR FREEDOM NOW - $14 🚨
        </button>
      </div>
    </section>
  );
};

export default FinalCtaSection;
