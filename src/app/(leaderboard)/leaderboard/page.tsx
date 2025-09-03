import { Button } from "@/components/ui/button"
import Leaderboard from "../_components/Leaderboard"
import { Navbar } from "@/app/components/navbar"

export default function Home() {
  return (

    <>
      <Navbar />
      <div className="min-h-screen bg-[#f0e9d9]">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1a1f1b]/10"></div>
          <div className="relative container mx-auto px-4 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1b201c] mb-6 tracking-tight">
                14 Days. Zero Excuses. One Champion.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-[#1b201c]/80 mb-8 font-medium">
                Compete with players worldwide. Eliminate distractions. Rise to the top.
              </p>
              <Button >
                See Who&apos;s Winning
              </Button>

            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ca6e3f]/10 to-[#f1eada]/20 rounded-full blur-3xl"></div>
        </section >

        {/* Leaderboard Section */}
        <section className="py-16" >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1b201c] mb-4">
              Live Leaderboard
            </h1>
            <p className="text-[#1b201c]/70 text-lg md:text-xl mb-8">
              Track the challenge in real time. Who&apos;s climbing, who&apos;s falling - and who will win it all.
            </p>
            <Leaderboard />
          </div>
        </section>

      </div >
    </>
  )
}
