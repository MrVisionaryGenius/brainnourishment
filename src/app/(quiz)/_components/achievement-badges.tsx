"use client"

import { Card } from "@/components/ui/card"

interface AchievementBadgesProps {
  score: number
}

export function AchievementBadges({ score }: AchievementBadgesProps) {
  const badges = [
    {
      id: "audit-complete",
      title: "Audit Complete",
      description: "Finished the full AI skills assessment",
      icon: "✅",
      earned: true,
    },
    {
      id: "self-aware",
      title: "Self-Aware Builder",
      description: "Knows exactly where the gaps are",
      icon: "🧠",
      earned: true,
    },
    {
      id: "advanced-operator",
      title: "Advanced Operator",
      description: "AI is deeply embedded in your workflow",
      icon: "🎯",
      earned: score <= 16,
    },
    {
      id: "systems-builder",
      title: "Systems Builder",
      description: "Ready to build a real AI stack",
      icon: "🔧",
      earned: score >= 17 && score < 24,
    },
    {
      id: "high-upside",
      title: "High Upside",
      description: "Biggest gains still ahead of you",
      icon: "🚀",
      earned: score >= 24,
    },
  ]

  const earnedBadges = badges.filter((badge) => badge.earned)

  return (
    <Card className="p-6 bg-[#0f1010] border-white/10">
      <h3 className="text-xs font-semibold text-[#f97316] mb-4 flex items-center uppercase tracking-widest">
        <span className="mr-2">🏆</span>
        Your Badges
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {earnedBadges.map((badge) => (
          <div
            key={badge.id}
            className="bg-[#1a1f1b] rounded-lg p-3 text-center border border-white/10 hover:border-[#f97316]/40 transition-colors"
          >
            <div className="text-xl mb-1">{badge.icon}</div>
            <div className="text-xs font-semibold text-white">{badge.title}</div>
            <div className="text-xs text-gray-500 mt-1">{badge.description}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600">
          <span className="text-[#f97316] font-semibold">{earnedBadges.length}</span> of {badges.length} badges earned
        </p>
      </div>
    </Card>
  )
}