"use client"

import React, { useState, useEffect } from 'react';
import { Mail, Globe, Users, Eye, TrendingUp, Clock } from 'lucide-react';
import { Navbar } from '../components/navbar';
import Footer from '../components/footer';

// Mock hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    const ref = (node: Element | null) => {
        if (node) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold }
            );
            observer.observe(node);

            return () => observer.disconnect();
        }
    };

    return { ref, isVisible };
};

// Counter animation hook
const useCounter = (end: number, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [started, end, duration]);

    return { count, startCount: () => setStarted(true) };
};

type StatCardProps = {
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    suffix?: string;
    label: string;
    delay?: number;
    trigger: boolean;
};

const StatCard = ({ icon: Icon, value, suffix, label, delay = 0, trigger }: StatCardProps) => {
    // Extract number including decimal points properly
    const numericValue = parseFloat(value.match(/[\d.]+/)?.[0] || '0');
    const { count, startCount } = useCounter(numericValue);

    useEffect(() => {
        if (trigger) {
            const timer = setTimeout(() => {
                startCount();
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [trigger, delay, startCount]);

    const formatValue = (num: number) => {
        if (value.includes('M+')) {
            // Handle decimal values for millions
            return num % 1 === 0 ? `${num}M+` : `${num.toFixed(1)}M+`;
        }
        if (value.includes('M')) {
            return num % 1 === 0 ? `${num}M` : `${num.toFixed(1)}M`;
        }
        return `${num}${suffix || ''}`;
    };

    return (
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/30 transition-all duration-500 hover:shadow-xl hover:transform hover:scale-105 group">
            <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-[#ca6e3f]/10 rounded-2xl group-hover:bg-[#ca6e3f]/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#ca6e3f]" />
                </div>
            </div>
            <div className="text-4xl font-bold text-[#ca6e3f] mb-2">
                {formatValue(count)}
            </div>
            <div className="text-[#1b201c]/70 font-medium text-lg">{label}</div>
        </div>
    );
};

const AboutUsPage = () => {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
    const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation(0.2);
    const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation(0.2);
    const { ref: detoxRef, isVisible: detoxVisible } = useScrollAnimation(0.2);
    const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation(0.2);
    const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation(0.2);
    const { ref: promiseRef, isVisible: promiseVisible } = useScrollAnimation(0.2);

    const features = [
        "Establish healthier routines",
        "Reduce screen time significantly",
        "Incorporate more intentional practices into daily lives"
    ];

    const impactStats = [
        { icon: Eye, value: "440", suffix: "M+", label: "Views Generated" },
        { icon: Users, value: "116", suffix: "M+", label: "People Reached" },
        { icon: TrendingUp, value: "2.5", suffix: "M+", label: "Followers" },
        { icon: Clock, value: "34", suffix: "M+", label: "Screentime Hours Reduced" }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-[#f1eada] via-[#f0e9d9] to-[#f1eada]">
                {/* Background Pattern */}
                <div className="fixed inset-0 opacity-5 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ca6e3f]/10 via-transparent to-[#ca6e3f]/5"></div>
                </div>

                {/* Hero Section */}
                <section
                    ref={heroRef}
                    className={`relative py-20 lg:py-32 transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h1 className={`text-5xl lg:text-7xl font-bold mb-8 text-[#1b201c] transition-all duration-800 ease-out delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}>
                            About <span className="text-[#ca6e3f]">Brain Nourishment</span>
                        </h1>
                        <p className={`text-xl lg:text-2xl text-[#1b201c]/80 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                            }`}>
                            A media company providing practical daily motivation to help improve focus, enhance wellbeing, and reduce digital dependence.
                        </p>
                    </div>
                </section>

                {/* Journey Section */}
                <section
                    ref={journeyRef}
                    className={`py-20 transition-all duration-700 ease-out ${journeyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 text-[#1b201c] text-center transition-all duration-700 ease-out delay-200 ${journeyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}>
                                Our <span className="text-[#ca6e3f]">Journey</span>
                            </h2>
                            <div className={`bg-white/60 backdrop-blur-sm p-10 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-all duration-500 hover:shadow-2xl ${journeyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`} style={{ transitionDelay: '400ms' }}>
                                <p className="text-xl text-[#1b201c]/80 leading-relaxed text-center">
                                    What started as a small Instagram page has grown into a community of over{' '}
                                    <span className="text-[#ca6e3f] font-semibold">2.5 million followers</span> worldwide.
                                    Today, Brain Nourishment is recognized as a{' '}
                                    <span className="text-[#ca6e3f] font-semibold">leading voice in the digital wellness space</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why We Exist Section */}
                <section
                    ref={whyRef}
                    className={`py-20 bg-[#1a1f1b] transition-all duration-700 ease-out ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="container mx-auto px-6">
                        <h2 className={`text-4xl lg:text-5xl font-bold mb-12 text-[#f1eada] text-center transition-all duration-700 ease-out delay-200 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                            }`}>
                            Why We <span className="text-[#ca6e3f]">Exist</span>
                        </h2>

                        <div className="max-w-5xl mx-auto">
                            <div className={`bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-[#ca6e3f]/20 mb-12 transition-all duration-700 ease-out delay-400 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}>
                                <p className="text-xl text-[#f1eada]/90 leading-relaxed mb-8 text-center">
                                    Digital overuse has become widespread-excessive scrolling, constant notifications, and algorithm-driven content are consuming valuable time and energy. This leads to{' '}
                                    <span className="text-[#ca6e3f] font-semibold">reduced concentration</span>,{' '}
                                    <span className="text-[#ca6e3f] font-semibold">lower real-world engagement</span>, and{' '}
                                    <span className="text-[#ca6e3f] font-semibold">lost productivity</span>.
                                </p>
                                <p className="text-xl text-[#f1eada] leading-relaxed text-center">
                                    We believe your time is too valuable to be trapped by endless feeds.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-all duration-500 hover:bg-white/15 transform hover:scale-105 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                            }`}
                                        style={{ transitionDelay: `${600 + index * 100}ms` }}
                                    >
                                        <div className="w-12 h-12 bg-[#ca6e3f]/20 rounded-xl mb-6 flex items-center justify-center">
                                            <div className="w-6 h-6 bg-[#ca6e3f] rounded-full"></div>
                                        </div>
                                        <p className="text-[#f1eada] text-lg leading-relaxed">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Detox Game Section */}
                <section
                    ref={detoxRef}
                    className={`py-20 transition-all duration-700 ease-out ${detoxVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <h2 className={`text-4xl lg:text-5xl font-bold mb-12 text-[#1b201c] text-center transition-all duration-700 ease-out delay-200 ${detoxVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}>
                                The <span className="text-[#ca6e3f]">Detox Game</span>
                            </h2>

                            <div className={`bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm p-12 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-all duration-500 hover:shadow-2xl ${detoxVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`} style={{ transitionDelay: '400ms' }}>
                                <div className="text-center mb-10">
                                    <div className="inline-flex items-center bg-[#ca6e3f]/10 border border-[#ca6e3f]/20 text-[#ca6e3f] px-6 py-3 rounded-full text-sm font-semibold mb-6">
                                        🎯 Science-Backed Reset Program
                                    </div>
                                    <p className="text-xl text-[#1b201c]/80 leading-relaxed mb-8">
                                        At the heart of our mission is the{' '}
                                        <span className="text-[#ca6e3f] font-bold">14-Day Detox Game</span>-a science-backed reset designed to help people{' '}
                                        <span className="text-[#ca6e3f] font-semibold">cut their screen time in half</span> without deleting every app or going off the grid.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 mb-10">
                                    <div className="text-center p-6 bg-white/40 rounded-2xl border border-[#ca6e3f]/10">
                                        <div className="w-16 h-16 bg-[#ca6e3f]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">📅</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1b201c] mb-2">Daily Steps</h3>
                                        <p className="text-[#1b201c]/70">Structured daily actions to build lasting habits</p>
                                    </div>
                                    <div className="text-center p-6 bg-white/40 rounded-2xl border border-[#ca6e3f]/10">
                                        <div className="w-16 h-16 bg-[#ca6e3f]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">📊</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1b201c] mb-2">Progress Tracking</h3>
                                        <p className="text-[#1b201c]/70">Monitor your improvements with detailed insights</p>
                                    </div>
                                    <div className="text-center p-6 bg-white/40 rounded-2xl border border-[#ca6e3f]/10">
                                        <div className="w-16 h-16 bg-[#ca6e3f]/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">🤝</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1b201c] mb-2">Community Support</h3>
                                        <p className="text-[#1b201c]/70">Join thousands on the same journey</p>
                                    </div>
                                </div>

                                <p className="text-lg text-[#1b201c]/80 leading-relaxed text-center">
                                    Through this comprehensive approach, we&apos;ve helped{' '}
                                    <span className="text-[#ca6e3f] font-semibold">thousands reclaim hours of their life</span>,{' '}
                                    <span className="text-[#ca6e3f] font-semibold">improve focus</span>, and{' '}
                                    <span className="text-[#ca6e3f] font-semibold">rediscover real-world energy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Section */}
                <section
                    ref={impactRef}
                    className={`py-20 bg-[#1a1f1b] transition-all duration-700 ease-out ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="container mx-auto px-6">
                        <h2 className={`text-4xl lg:text-5xl font-bold mb-16 text-[#f1eada] text-center transition-all duration-700 ease-out delay-200 ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                            }`}>
                            Our <span className="text-[#ca6e3f]">Impact</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {impactStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 ease-out ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                        }`}
                                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                                >
                                    <StatCard
                                        {...stat}
                                        delay={index * 200}
                                        trigger={impactVisible}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    ref={contactRef}
                    className={`py-20 transition-all duration-700 ease-out ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl lg:text-5xl font-bold mb-12 text-[#1b201c] transition-all duration-700 ease-out delay-200 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}>
                                Get in <span className="text-[#ca6e3f]">Touch</span>
                            </h2>

                            <p className={`text-xl text-[#1b201c]/80 mb-12 transition-all duration-700 ease-out delay-300 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}>
                                We&apos;re here to support you on your journey toward digital freedom.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className={`bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-all duration-500 hover:shadow-xl transform hover:scale-105 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`} style={{ transitionDelay: '400ms' }}>
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="p-4 bg-[#ca6e3f]/10 rounded-2xl">
                                            <Mail className="w-8 h-8 text-[#ca6e3f]" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#1b201c] mb-4">Email Us</h3>
                                    <a
                                        href="mailto:support@brainnourishment.com"
                                        className="text-[#ca6e3f] hover:text-[#ca6e3f]/80 transition-colors duration-300 text-lg font-medium"
                                    >
                                        support@brainnourishment.com
                                    </a>
                                </div>

                                <div className={`bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/20 hover:border-[#ca6e3f]/40 transition-all duration-500 hover:shadow-xl transform hover:scale-105 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`} style={{ transitionDelay: '500ms' }}>
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="p-4 bg-[#ca6e3f]/10 rounded-2xl">
                                            <Globe className="w-8 h-8 text-[#ca6e3f]" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#1b201c] mb-4">Visit Our Website</h3>
                                    <a
                                        href="https://www.brainnourishment.com"
                                        className="text-[#ca6e3f] hover:text-[#ca6e3f]/80 transition-colors duration-300 text-lg font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        www.brainnourishment.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Promise Section */}
                <section
                    ref={promiseRef}
                    className={`py-20 bg-gradient-to-br from-[#ca6e3f]/10 via-transparent to-[#ca6e3f]/5 transition-all duration-700 ease-out ${promiseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 text-[#1b201c] transition-all duration-700 ease-out delay-200 ${promiseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}>
                                Our <span className="text-[#ca6e3f]">Promise</span>
                            </h2>

                            <div className={`bg-white/70 backdrop-blur-sm p-12 rounded-3xl border border-[#ca6e3f]/30 shadow-2xl transition-all duration-700 ease-out delay-400 ${promiseVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}>
                                <p className="text-2xl text-[#1b201c] leading-relaxed font-medium">
                                    We&apos;re here to help you <span className="text-[#ca6e3f] font-bold">reclaim your time</span>,{' '}
                                    <span className="text-[#ca6e3f] font-bold">build healthier digital habits</span>, and{' '}
                                    <span className="text-[#ca6e3f] font-bold">create the life you deserve</span>—one intentional day at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutUsPage;
