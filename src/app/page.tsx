"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Clock,
  CalendarCheck,
  BookOpen,
  Brain,
  Trophy,
  X,
  DollarSign,
  CheckCircle,
  Zap,
  Target,
  Users,
  Gift,
  Timer,
  Smartphone,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const App = () => {
  const [timeWasted, setTimeWasted] = useState(0);
  const [age, setAge] = useState(22);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set your Gumroad or Whop product URL here
  const GUMROAD_WHOP_URL = "https://your-product-link.com";

  // Real-time counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWasted((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timer-based exit pop-up
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isModalOpen) {
        setIsExitModalOpen(true);
      }
    }, 25000); // Triggers after 25 seconds

    return () => clearTimeout(timer);
  }, [isModalOpen]);

  const handleBuyClick = () => {
    window.location.href = GUMROAD_WHOP_URL;
  };

  const calculateLifeLost = (hoursDaily: number) => {
    const yearsLeft = 60 - age;
    const daysPerYear = (hoursDaily * 365) / 24;
    const totalDaysLost = daysPerYear * yearsLeft;
    const yearsLost = Math.round((totalDaysLost / 365) * 10) / 10;
    return { daysPerYear: Math.round(daysPerYear), yearsLost };
  };

  const stats = calculateLifeLost(3);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={handleBuyClick}
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-4 px-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-bounce flex items-center space-x-2"
        >
          <Zap className="w-5 h-5" />
          <span>BREAK FREE NOW!</span>
        </button>
      </div>

      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
          {/* Attention-grabbing counter */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">
              <AlertTriangle className="w-6 h-6 mr-2" />
              <Timer className="w-5 h-5 mr-2" />
              Time Wasted Today: {Math.floor(timeWasted / 3600)}h{" "}
              {Math.floor((timeWasted % 3600) / 60)}m {timeWasted % 60}s
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 text-white">
              YOUR PHONE IS
              <br />
              <span className="text-red-500 animate-pulse">
                STEALING YOUR LIFE
              </span>
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-400 mb-8 animate-bounce">
              🚨 BRUTAL REALITY CHECK INCOMING 🚨
            </div>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              You're{" "}
              <span className="text-red-500 font-bold">{age} years old.</span>{" "}
              At 3 hours daily screen time, you'll lose{" "}
              <span className="text-red-500 font-bold">
                {stats.yearsLost} YEARS
              </span>{" "}
              of your remaining life to endless scrolling.
              <br />
              <span className="text-gray-200 font-semibold">
                Your prime years are disappearing. Right. Now.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={handleBuyClick}
                className="bg-red-600 hover:bg-red-700 text-white font-black text-xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 flex items-center space-x-3"
              >
                <Zap className="w-6 h-6" />
                <span>ESCAPE THE MATRIX ($29)</span>
              </button>

              <div className="text-center">
                <div className="text-sm text-gray-400">⚡ LIMITED TIME</div>
                <div className="text-lg font-bold text-red-400">
                  94% OFF NORMAL PRICE
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <div className="text-3xl font-bold text-red-500">
                  {stats.daysPerYear}
                </div>
                <div className="text-sm text-gray-300">Days Lost Per Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white">1,095</div>
                <div className="text-sm text-gray-300">Hours Yearly</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <div className="text-3xl font-bold text-white">72%</div>
                <div className="text-sm text-gray-300">People Addicted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                <div className="text-3xl font-bold text-red-500">14</div>
                <div className="text-sm text-gray-300">Days to Freedom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO Shock Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">
              THE ADDICTION TEST THAT WILL TERRIFY YOU
            </h2>

            <div className="bg-black/50 p-8 rounded-3xl mb-8 backdrop-blur-md">
              <p className="text-2xl font-bold text-red-300 mb-4">
                Right now, as you read this, you probably have the urge to check
                your phone.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                That's not normal. That's not human. That's addiction
                programming designed by billion-dollar tech companies to harvest
                your attention and sell it to the highest bidder.
              </p>
              <div className="text-6xl font-black text-red-400 animate-pulse mb-4">
                YOU ARE THE PRODUCT
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-bold mb-2">Average Daily Usage</h3>
                <div className="text-3xl font-black text-red-500">7+ Hours</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-bold mb-2">Life Impact</h3>
                <div className="text-3xl font-black text-red-500">
                  DEVASTATING
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl">
                <Target className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-bold mb-2">Success Rate</h3>
                <div className="text-3xl font-black text-white">94%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              THE PHONE FREEDOM BLUEPRINT
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A scientifically-designed 14-day system that doesn't just reduce
              screen time—it completely rewires your brain's relationship with
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Value Stack */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    14 Daily Brain-Rewiring Emails
                  </h3>
                </div>
                <p className="text-gray-300">
                  Personalized daily missions that systematically break your
                  addiction patterns. No fluff, just pure psychological warfare
                  against your phone dependency.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-600 p-2 rounded-full">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Interactive Progress Journal
                  </h3>
                </div>
                <p className="text-gray-300">
                  A powerful daily accountability system that tracks your mental
                  state, urges, and breakthroughs. Watch your addiction crumble
                  in real-time.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-600 p-2 rounded-full">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Live Gamified Leaderboard
                  </h3>
                </div>
                <p className="text-gray-300">
                  Compete with thousands of other freedom fighters. Social
                  accountability that makes quitting addictive behaviors
                  actually addictive.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-gray-600/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-600 p-2 rounded-full">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    $229 Mental Wellness Arsenal
                  </h3>
                </div>
                <p className="text-gray-300">
                  Exclusive brain-training templates and AI prompts designed by
                  addiction specialists. Tools worth more than 8x your
                  investment.
                </p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-3xl backdrop-blur-md border border-red-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Gift className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">🎁 SECRET DAY 14 BONUS</h3>
                </div>
                <p className="text-gray-300">
                  The "4-Hour Transformation Protocol" - Turn your reclaimed
                  time into a life-changing success foundation. This alone is
                  worth $500+.
                </p>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-md p-8 rounded-3xl border border-red-500/50 text-center">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block mb-4 animate-pulse">
                  🔥 LIMITED TIME OFFER
                </div>

                <div className="mb-6">
                  <div className="text-lg text-gray-400 line-through">
                    Normal Price: $500+
                  </div>
                  <div className="text-6xl font-black text-white">$29</div>
                  <div className="text-sm text-gray-300">
                    One-time investment in your freedom
                  </div>
                </div>

                <div className="bg-gray-800/30 p-4 rounded-2xl mb-6">
                  <div className="text-lg font-bold text-white">
                    🎯 Success Guarantee
                  </div>
                  <div className="text-sm text-gray-300">
                    94% of participants report life-changing results or your
                    money back
                  </div>
                </div>

                <button
                  onClick={handleBuyClick}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 mb-4"
                >
                  🚀 TRANSFORM MY LIFE NOW
                </button>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>2,847 joined today</span>
                  </div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Urgency */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            JOIN 15,000+ PEOPLE WHO ESCAPED
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-4xl mb-2">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300">
                "I got my life back. Lost 40lbs, started my business, found
                love. This challenge saved my future."
              </p>
              <div className="text-purple-400 font-bold mt-2">
                - Sarah M., 26
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-4xl mb-2">🔥</div>
              <p className="text-gray-300">
                "From 8 hours daily to 30 minutes. I read 12 books, learned
                coding, and got promoted. Worth every penny."
              </p>
              <div className="text-purple-400 font-bold mt-2">
                - Marcus T., 29
              </div>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <div className="text-4xl mb-2">💎</div>
              <p className="text-gray-300">
                "The bonus on Day 14 alone generated $50k in revenue for my side
                hustle. This is life-changing."
              </p>
              <div className="text-purple-400 font-bold mt-2">
                - Jennifer L., 32
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-gray-900 to-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            YOUR LIFE IS ON THE LINE
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every second you wait, your addiction gets stronger. Every scroll
            steals your future. Every notification is a nail in the coffin of
            your dreams.
            <br />
            <br />
            <span className="text-red-400 font-bold">
              The choice is simple: Stay trapped, or break free TODAY.
            </span>
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="bg-black/50 p-6 rounded-3xl backdrop-blur-md border border-red-500/50">
              <div className="text-red-400 font-bold mb-2">⚠️ WARNING</div>
              <div className="text-sm text-gray-300">
                This offer expires when we hit 3,000 participants. Current
                count: 2,847
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
            onClick={handleBuyClick}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse"
          >
            🚨 CLAIM YOUR FREEDOM NOW - $29 🚨
          </button>
        </div>
      </section>

      {/* Last Chance Section (New Addition) */}
      <section className="relative py-20 bg-black text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="w-24 h-24 mx-auto mb-6">
            <AlertTriangle className="w-full h-full text-red-500 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-snug text-red-400">
            THIS IS YOUR LAST CHANCE
          </h2>
          <p className="text-2xl text-gray-200 font-bold mb-8">
            Walk away now, and one year from today, you'll be right back here.
          </p>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-8">
            <div className="bg-gray-900/50 p-8 rounded-3xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-4">The Scroller's Path</h3>
              <ul className="text-left text-gray-400 space-y-3">
                <li className="flex items-start">
                  <X className="text-red-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <p>Still losing **3+ hours a day** to an endless feed.</p>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <p>
                    Feeling that familiar, empty sense of dread and
                    **depression**.
                  </p>
                </li>
                <li className="flex items-start">
                  <X className="text-red-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <p>
                    Watching others achieve their dreams while you're standing
                    still.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-3xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-xl font-bold mb-4">
                The Freedom Fighter's Path
              </h3>
              <ul className="text-left text-gray-400 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <p>
                    Reclaimed **1,000+ hours** and invested them in your future.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <p>
                    Finally launched that business, learned that skill, or got
                    that promotion.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 w-6 h-6 mr-2 flex-shrink-0" />
                  <p>
                    Feeling fulfilled, energized, and in complete control of
                    your life.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-semibold mb-8">
            You're not depressed. You're just endlessly scrolling.
          </p>
          <button
            onClick={handleBuyClick}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-2xl py-6 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 animate-pulse"
          >
            I CHOOSE THE FREEDOM FIGHTER'S PATH
          </button>
        </div>
      </section>

      {/* Exit-Intent Pop-up Modal */}
      {isExitModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-md">
          <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full relative border border-red-500/50">
            <h3 className="text-2xl font-black text-red-500 mb-4">
              ARE YOU LEAVING?
            </h3>
            <p className="text-xl font-bold text-gray-300 mb-6">
              This is your <span className="text-red-400">red pill</span> or{" "}
              <span className="text-blue-400">blue pill</span> solution.
            </p>
            <div className="bg-gray-800 p-6 rounded-2xl mb-6">
              <p className="text-lg text-gray-200">
                Choose the **blue pill**, and a year from now, you'll still be
                endlessly scrolling, watching others achieve their dreams, and
                wondering why you feel so lost. You're not depressed; you're
                just trapped in a loop.
              </p>
              <p className="text-lg text-red-400 mt-4">
                Choose the **red pill**, and you will face your addiction
                head-on and claim your life back.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setIsExitModalOpen(false);
                  handleBuyClick();
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-lg py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                I CHOOSE THE RED PILL
              </button>
              <button
                onClick={() => setIsExitModalOpen(false)}
                className="w-full bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold text-lg py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                No, I'll Keep Scrolling
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message Box */}
      {message && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center transform animate-pulse">
            <p className="text-xl font-bold text-white mb-6">{message}</p>
            <button
              onClick={() => setMessage("")}
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Go! 🚀
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <div className="text-purple-400 font-bold">
              🚀 Phone Freedom Challenge
            </div>
            <div>
              Transform your life in 14 days • Join 15,000+ success stories
            </div>
          </div>
          <div>&copy; 2024 Phone Freedom Challenge. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
