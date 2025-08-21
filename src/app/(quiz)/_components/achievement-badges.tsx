"use client"

import { Card } from "@/components/ui/card"

interface AchievementBadgesProps {
  score: number
}

export function AchievementBadges({ score }: AchievementBadgesProps) {
  const badges = [
    {
      id: "self-aware",
      title: "Self-Aware",
      description: "Completed the phone addiction assessment",
      icon: "🧠",
      earned: true,
    },
    {
      id: "honest",
      title: "Brutally Honest",
      description: "Answered all questions truthfully",
      icon: "💯",
      earned: true,
    },
    {
      id: "wellness-seeker",
      title: "Wellness Seeker",
      description: "Taking steps toward digital wellness",
      icon: "🌱",
      earned: score <= 16,
    },
    {
      id: "change-maker",
      title: "Change Maker",
      description: "Ready to transform digital habits",
      icon: "🔄",
      earned: score >= 17,
    },
    {
      id: "warrior",
      title: "Digital Warrior",
      description: "Fighting against phone addiction",
      icon: "⚔️",
      earned: score >= 24,
    },
  ]

  const earnedBadges = badges.filter((badge) => badge.earned)

  return (
    <Card className="p-6 bg-gradient-to-r from-[#f1eada] to-[#f0e9d9] border-[#ca6e3f]/30">
      <h3 className="text-lg font-semibold text-[#1b201c] mb-4 flex items-center">
        <span className="text-2xl mr-2">🏆</span>
        Your Achievement Badges
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {earnedBadges.map((badge) => (
          <div
            key={badge.id}
            className="bg-white rounded-lg p-3 text-center shadow-sm border border-[#ca6e3f]/20 hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-1">{badge.icon}</div>
            <div className="text-sm font-semibold text-[#1b201c]">{badge.title}</div>
            <div className="text-xs text-[#1b201c] opacity-70 mt-1">{badge.description}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-[#1b201c] opacity-80">
          You&apos;ve earned <span className="font-semibold text-[#ca6e3f]">{earnedBadges.length}</span> out of{" "}
          {badges.length} badges!
        </p>
      </div>
    </Card>
  )
}
