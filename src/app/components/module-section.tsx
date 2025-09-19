import React from 'react';
import { CheckCircle, Shield, TrendingUp, Target, Settings, Lightbulb, Clock, User, Minus, Eye, Brain, Link, Calendar, Users, BookOpen, Gift, Star, PenTool } from 'lucide-react';

const FourteenDayChallenge = () => {
    const challenges = [
        {
            day: 1,
            title: "Master Your Circle of Control",
            description: "You'll learn to distinguish between what you can't control (like what others post) and what you can (like turning off notifications). Your first step is to turn off notifications for one app.",
            action: "Turn off notifications for one app",
            icon: <Shield className="w-8 h-8" />,
            color: "from-blue-500 to-blue-600",
            image: "/images/Day-1.jpeg"
        },
        {
            day: 2,
            title: "Embrace the Power of 1%",
            description: "True change isn't a single, massive transformation. It's the slow, patient compounding of tiny, daily habits. You'll commit to being just 1% more intentional with your phone than you were yesterday.",
            action: "Be 1% more intentional with your phone",
            icon: <TrendingUp className="w-8 h-8" />,
            color: "from-green-500 to-green-600",
            image: "/images/Day-2.jpeg"
        },
        {
            day: 3,
            title: "See Obstacles as Opportunities",
            description: "When a challenge appears, it's not a roadblock—it's a chance to practice your newfound discipline. You'll learn to sit with discomfort and choose your response instead of reacting to it.",
            action: "Practice sitting with discomfort",
            icon: <Target className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            image: "/images/Day-3.png"
        },
        {
            day: 4,
            title: "Make It Too Small to Fail",
            description: "The hardest part of any new habit is getting started. You'll learn to make the initial step ridiculously small, like simply placing your phone face down on a table.",
            action: "Place your phone face down",
            icon: <CheckCircle className="w-8 h-8" />,
            color: "from-emerald-500 to-emerald-600",
            image: "/images/Day-4.png"
        },
        {
            day: 5,
            title: "Design Your Environment",
            description: "Your willpower is a limited resource. We'll show you how to change your environment so you don't need willpower at all. Your challenge is to move your phone charger to another room.",
            action: "Move phone charger to another room",
            icon: <Settings className="w-8 h-8" />,
            color: "from-orange-500 to-orange-600",
            image: "/images/Day-5.png"
        },
        {
            day: 6,
            title: "Go From Shallow to Deep",
            description: "In a world of shallow work and constant context-switching, you'll learn to practice focused \"deep work\". Your challenge is to focus on a single task for 20 minutes without your phone.",
            action: "Focus on one task for 20 minutes",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "from-yellow-500 to-yellow-600",
            image: "/images/Day-6.jpeg"
        },
        {
            day: 7,
            title: "Trust the Process",
            description: "A lack of visible results does not mean a lack of progress. You'll learn that the quiet work you've been doing is building the foundation for a future breakthrough.",
            action: "Trust your progress",
            icon: <Clock className="w-8 h-8" />,
            color: "from-indigo-500 to-indigo-600",
            image: "/images/Day-7.jpeg"
        },
        {
            day: 8,
            title: "Don't Just Do It, Become It",
            description: "You'll shift from outcome-based goals to identity-based goals. Every action you take is a \"vote\" for the person you want to become.",
            action: "Vote for your future self",
            icon: <User className="w-8 h-8" />,
            color: "from-pink-500 to-pink-600",
            image: "/images/Day-8.jpeg"
        },
        {
            day: 9,
            title: "The Disciplined Pursuit of Less",
            description: "True productivity isn't about getting more done; it's about getting only the right things done. You'll practice \"strategic subtraction\" by deleting or disabling notifications for one app that doesn't bring you value.",
            action: "Delete one non-valuable app",
            icon: <Minus className="w-8 h-8" />,
            color: "from-red-500 to-red-600",
            image: "/images/Day-9.jpeg"
        },
        {
            day: 10,
            title: "The Antidote to Fragility",
            description: "You'll use \"negative visualization\" to anticipate setbacks and build resilience. This practice helps you realize that a moment of weakness isn't a complete failure; it's part of the journey.",
            action: "Practice negative visualization",
            icon: <Eye className="w-8 h-8" />,
            color: "from-teal-500 to-teal-600",
            image: "/images/Day-10.jpeg"
        },
        {
            day: 11,
            title: "The Power of \"Yet\"",
            description: "You'll discover the \"growth mindset,\" which sees challenges as opportunities. By adding the word \"yet\" to self-critical phrases, you'll reframe failure and keep the door open for progress.",
            action: "Add 'yet' to negative self-talk",
            icon: <Brain className="w-8 h-8" />,
            color: "from-cyan-500 to-cyan-600",
            image: "/images/Day-11.jpeg"
        },
        {
            day: 12,
            title: "Build a Habit That Sticks",
            description: "You'll use the power of \"Habit Stacking\" to link new habits to existing ones. This removes the need for willpower and makes it too simple to fail.",
            action: "Stack a new habit on existing one",
            icon: <Link className="w-8 h-8" />,
            color: "from-violet-500 to-violet-600",
            image: "/images/Day-12.jpeg"
        },
        {
            day: 13,
            title: "Think About the End",
            description: "Remembering that your time is finite acts as a powerful filter, helping you focus on what truly matters. This perspective will give you a sense of urgency to be present and live with purpose.",
            action: "Reflect on life's finite nature",
            icon: <Calendar className="w-8 h-8" />,
            color: "from-amber-500 to-amber-600",
            image: "/images/Day-13.jpeg"
        },
        {
            day: 14,
            title: "Connect",
            description: "The final piece of the puzzle is realizing you are not an island. You'll use your phone to strengthen a real-world connection, like calling a friend or a family member, reminding you that a better life is always a more connected one.",
            action: "Call a friend or family member",
            icon: <Users className="w-8 h-8" />,
            color: "from-rose-500 to-rose-600",
            image: "/images/Day-14.jpeg"
        }
    ];

    const bonusFeatures = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Digital Minimalism Workbook",
            description: "A comprehensive workbook with exercises and templates to maintain your progress",
            value: "$29"
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "Habit Tracker Templates",
            description: "Beautiful, printable habit trackers designed specifically for digital wellness",
            value: "$19"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "30-Day Extension Guide",
            description: "Extend your journey with advanced techniques for lasting transformation",
            value: "$39"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Private Community Access",
            description: "Join our exclusive community of like-minded individuals on the same journey",
            value: "$97"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-[#f1eada] via-[#f0e9d9] to-[#f1eada] py-24 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/10 via-transparent to-[#ca6e3f]/5"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {/* Section Header with Integrated Bonus */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Everything You Get <span className="text-[#ca6e3f]">Inside</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Reclaim your attention, one day at a time. Each day brings a new challenge designed to help you build a more intentional, focused life.
                    </p>

                    {/* Integrated Bonus Highlight */}
                    <div className="bg-gradient-to-r from-[#ca6e3f] to-[#d97845] rounded-3xl p-8 max-w-4xl mx-auto text-white shadow-2xl mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Gift className="w-8 h-8" />
                            <span className="bg-white/20 text-white px-4 py-2 rounded-full font-bold text-lg">
                                Special Launch Bonus
                            </span>
                        </div>
                        <h3 className="text-4xl font-bold mb-4 tracking-tight">
                            Get <span className="text-yellow-300">$184 Worth of Bonuses</span> FREE
                        </h3>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Early supporters get exclusive access to premium resources that will accelerate your transformation
                        </p>
                    </div>
                </div>

                {/* Bonus Features Section */}
                <div className="mb-20">

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {bonusFeatures.map((bonus, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
                                <div className="flex items-start gap-6">
                                    <div className="bg-[#ca6e3f] p-4 rounded-xl text-white flex-shrink-0 shadow-lg">
                                        {bonus.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-2xl font-bold text-slate-900 leading-tight">{bonus.title}</h4>
                                            <span className="text-[#ca6e3f] font-bold text-xl bg-orange-100 px-4 py-2 rounded-full whitespace-nowrap">
                                                {bonus.value}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-lg">{bonus.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Journaling Feature Highlight */}
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="p-3 bg-[#ca6e3f] rounded-full text-white">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">Includes Daily Journaling</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Each day includes guided journaling prompts to help you reflect on your progress,
                        understand your relationship with technology, and build deeper self-awareness.
                    </p>
                </div>

                {/* Challenge Days */}
                <div className="space-y-20">
                    {challenges.map((challenge, index) => (
                        <div
                            key={challenge.day}
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className="flex-1 lg:max-w-2xl">
                                <div className="bg-white rounded-2xl p-10 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-lg mb-4">
                                            <span className="w-8 h-8 bg-[#ca6e3f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                                {challenge.day}
                                            </span>
                                            Day {challenge.day}
                                        </div>
                                        <h3 className="text-3xl font-bold text-slate-900 leading-tight">{challenge.title}</h3>
                                    </div>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {challenge.description}
                                    </p>

                                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border-l-4 border-orange-500 mb-6">
                                        <div className="text-sm font-semibold text-orange-700 mb-2">Today&apos;s Challenge:</div>
                                        <div className="text-slate-900 font-semibold text-lg">{challenge.action}</div>
                                    </div>

                                    {/* Journaling Prompt Indicator */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <PenTool className="w-5 h-5 text-blue-600" />
                                            <div className="text-sm font-semibold text-blue-700">Daily Journal Prompt:</div>
                                        </div>
                                        <div className="text-slate-700">Guided reflection questions to deepen your understanding</div>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex-1 lg:max-w-lg">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/5] w-full">
                                        <img
                                            src={challenge.image}
                                            alt={`Day ${challenge.day}: ${challenge.title}`}
                                            className="w-full h-full object-cover object-center"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-6">
                                            <div className="text-white font-bold text-3xl drop-shadow-xl">
                                                Day {String(challenge.day).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-24">
                    <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-2xl max-w-5xl mx-auto">
                        <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                            Ready to Start Your Transformation?
                        </h3>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Join thousands who have already reclaimed their time and attention.
                            Your journey to a more focused, intentional life starts today.
                        </p>

                        {/* Value Stack */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-10 border border-green-200 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-slate-900 mb-2">Total Value: $233</div>
                                <div className="text-2xl text-green-700 font-bold">Your Price Today: Only $14</div>
                                <div className="text-lg text-slate-500 mt-2">You Save $219 (94% Off)</div>
                            </div>
                        </div>

                        <a href="https://whop.com/checkout/plan_W5EqYxoadkQdR?d2c=true">
                            <button
                                className="group bg-[#ca6e3f] hover:bg-[#ca6d41] text-white font-semibold text-lg py-4 px-12 rounded-full shadow-xl shadow-[#ca6e3f]/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ca6e3f]/60 mb-4"
                            >
                                Begin Your 14-Day Journey + Bonuses - $14
                            </button>
                        </a>
                        <div className="text-slate-500 text-lg">
                            Limited time launch offer • Bonuses worth $184 included
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FourteenDayChallenge;