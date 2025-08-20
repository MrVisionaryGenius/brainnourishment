"use client";

import { Smartphone, TrendingUp, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ShockSection = () => {
  // ✅ Explicitly type the refs for correct DOM elements
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>(0.2);

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-gradient-to-r from-red-900 to-red-700 transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-black mb-8 text-white font-serif transition-all duration-700 ease-out delay-200 ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            THE ADDICTION TEST THAT WILL TERRIFY YOU
          </h2>

          <div
            className={`bg-black/50 p-8 rounded-3xl mb-8 backdrop-blur-md border border-red-500/30 transition-all duration-700 ease-out delay-300 ${
              sectionVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <p className="text-2xl font-bold text-red-300 mb-4 font-serif">
              Right now, as you read this, you probably have the urge to check
              your phone.
            </p>
            <p className="text-xl text-gray-300 mb-6">
              That's not normal. That's not human. That's addiction programming
              designed by billion-dollar tech companies to harvest your
              attention and sell it to the highest bidder.
            </p>
            <div className="text-6xl font-black text-red-400 animate-pulse mb-4 font-serif">
              YOU ARE THE PRODUCT
            </div>
          </div>

          <div
            ref={cardsRef}
            className={`grid md:grid-cols-3 gap-6 mb-8 transition-all duration-800 ease-out delay-400 ${
              cardsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-bold mb-2 font-serif">
                Average Daily Usage
              </h3>
              <div className="text-3xl font-black text-red-500 font-serif">
                4+ Hours
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-bold mb-2 font-serif">Life Impact</h3>
              <div className="text-3xl font-black text-red-500 font-serif">
                DEVASTATING
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30">
              <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-xl font-bold mb-2 font-serif">
                Success Rate
              </h3>
              <div className="text-3xl font-black text-white font-serif">
                94%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShockSection;
