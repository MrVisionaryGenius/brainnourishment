import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Joe",
      age: 20,
      country: "Canada",
      text: "I love seeing the positive reels this page offers. The content genuinely resonates with me and help keep me disciplined and motivated to continue my pursuit of getting better."
    },
    {
      name: "Keegan",
      age: 24,
      country: "United States",
      text: "I love seeing positive messages sent in a world where everything is negative."
    },
    {
      name: "Kartikey",
      age: 19,
      country: "India",
      text: "Brain nourishment always gives a refreshing break from all the negativity around me"
    },
    {
      name: "Turzai",
      age: 17,
      country: "Romania",
      text: "Brain Nourishment profoundly changed my mentality about life. It reminds me everyday to be thankful and to enjoy my life outside of the screen of my phone."
    },
    {
      name: "Justin",
      age: 16,
      country: "United States",
      text: "Brain nourishment has given me more awareness on how much time I spend on my phone"
    },
    {
      name: "Phong",
      age: 19,
      country: "Vietnam",
      text: "I've found myself begin to have more discipline with my phone. Not only that, their post helps me with overthinking, stress, and feeds me philosophical words to help me through the day. Thanks Brain Nourishment!"
    }
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f1eada] to-[#f0e9d9] overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b201c]">
            What Our Community Says
          </h2>
          <p className="text-xl text-[#1b201c]/80 max-w-3xl mx-auto leading-relaxed">
            Real stories from people who've transformed their relationship with technology
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#f1eada] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f0e9d9] to-transparent z-10 pointer-events-none"></div>
        
        <div className="carousel-container group">
          <div className="carousel-track flex gap-6 animate-scroll group-hover:animate-pause">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0 w-80 md:w-96 bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-[#ca6e3f]/10 hover:border-[#ca6e3f]/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  <div className="bg-[#ca6e3f] p-3 rounded-2xl w-fit mb-4">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#1b201c]/80 leading-relaxed text-base mb-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t border-[#ca6e3f]/10 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ca6e3f] to-[#ca6d41] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1b201c] text-lg">
                        {testimonial.name}, {testimonial.age}
                      </div>
                      <div className="text-[#1b201c]/60 text-sm">
                        {testimonial.country}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-384px * 6 - 24px * 6));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .group:hover .animate-scroll {
          animation-play-state: paused;
        }

        .carousel-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 64px,
            black calc(100% - 64px),
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 64px,
            black calc(100% - 64px),
            transparent
          );
        }

        @media (min-width: 768px) {
          .carousel-container {
            mask-image: linear-gradient(
              to right,
              transparent,
              black 128px,
              black calc(100% - 128px),
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 128px,
              black calc(100% - 128px),
              transparent
            );
          }
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 6 - 24px * 6));
            }
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;
