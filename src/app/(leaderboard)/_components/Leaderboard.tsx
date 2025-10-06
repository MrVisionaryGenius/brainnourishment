"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star, User } from "lucide-react"

// Player data with corrected calculations - 30.09.2025
const players = [
  {
    squidNumber: 1,
    instagramName: "Dre",
    totalHour: 11.17,
    avgHour: 11.17 / 1,
  },
  {
    squidNumber: 2,
    instagramName: "Tade",
    totalHour: 4.50 + 4.27 + 3.24 + 4.25,
    avgHour: (4.50 + 4.27 + 3.24 + 4.25) / 4,
  },
  {
    squidNumber: 3,
    instagramName: "Tristan Neirynck",
    totalHour: 7 + 7.5 + 10.5 + 9.25 + 8.50 + 7.45 + 7.45 + 4.5 + 6 + 6.25 + 4.5 + 7.5,
    avgHour: (7 + 7.5 + 10.5 + 9.25 + 8.50 + 7.45 + 7.45 + 4.5 + 6 + 6.25 + 4.5 + 7.5) / 12,
  },
  {
    squidNumber: 4,
    instagramName: "Ramonda",
    totalHour: 4.40 + 3.39,
    avgHour: (4.40 + 3.39) / 2,
  },
  {
    squidNumber: 5,
    instagramName: "Jon",
    totalHour: 5,
    avgHour: 5 / 1,
  },
  {
    squidNumber: 6,
    instagramName: "Amy",
    totalHour: 9.15,
    avgHour: 9.15 / 1,
  },
  {
    squidNumber: 7,
    instagramName: "David Beard",
    totalHour: 5,
    avgHour: 5 / 1,
  },
  {
    squidNumber: 8,
    instagramName: "Greg",
    totalHour: 4.5 + 4.25 + 4.50 + 4.50 + 6 + 4.55 + 3.44,
    avgHour: (4.5 + 4.25 + 4.50 + 4.50 + 6 + 4.55 + 3.44) / 7,
  },
  {
    squidNumber: 9,
    instagramName: "Gedeon",
    totalHour: 6 + 2 + 2.40 + 2 + 2 + 2.13 + 3.3 + 3.22 + 3.45 + 2.30 + 3.31,
    avgHour: (6 + 2 + 2.40 + 2 + 2 + 2.13 + 3.3 + 3.22 + 3.45 + 2.30 + 3.31) / 11,
  },
  {
    squidNumber: 10,
    instagramName: "Gabriel Sheikh",
    totalHour: 8.41 + 7.31 + 8.42 + 8.0,
    avgHour: (8.41 + 7.31 + 8.42 + 8.0) / 4,
  },
  {
    squidNumber: 11,
    instagramName: "Ramonda",
    totalHour: 6.14 + 4.36,
    avgHour: (6.14 + 4.36) / 2,
  },
  {
    squidNumber: 12,
    instagramName: "Luke",
    totalHour: 8 + 8.57,
    avgHour: (8 + 8.57) / 2,
  },
  {
    squidNumber: 13,
    instagramName: "Gian",
    totalHour: 6,
    avgHour: 6 / 1,
  },
  {
    squidNumber: 14,
    instagramName: "Charlie",
    totalHour: 5.48,
    avgHour: 5.48 / 1,
  },
]
// Create a type for players with required rank and status
type PlayerWithRank = typeof players[0] & {
  rank: number
  status: string
}

const statusConfig = {
  WINNER: {
    bg: "bg-gradient-to-r from-green-400/20 to-green-600/20 border-green-500/40",
    text: "text-green-600",
    icon: Trophy,
    label: "🏆 DETOX CHAMPION"
  },
  SECOND: {
    bg: "bg-gradient-to-r from-emerald-300/20 to-emerald-500/20 border-emerald-400/40",
    text: "text-emerald-600",
    icon: Medal,
    label: "🥈 DETOX MASTER"
  },
  THIRD: {
    bg: "bg-gradient-to-r from-teal-400/20 to-teal-600/20 border-teal-500/40",
    text: "text-teal-600",
    icon: Award,
    label: "🥉 PHONE FREE"
  },
  "RUNNER UP": {
    bg: "bg-gradient-to-r from-blue-400/20 to-blue-600/20 border-blue-500/40",
    text: "text-blue-600",
    icon: Star,
    label: "⭐ GETTING BETTER"
  },
  PARTICIPANT: {
    bg: "bg-gradient-to-r from-orange-200/20 to-orange-400/20 border-orange-300/40",
    text: "text-orange-600",
    icon: User,
    label: "📱 NEEDS WORK"
  },
}

export default function Leaderboard() {
  const [sortedPlayers, setSortedPlayers] = useState<PlayerWithRank[]>([])

  useEffect(() => {
    // Sort players by average hours (ascending - lowest wins), then by total hours as tiebreaker
    const playersWithRankAndStatus: PlayerWithRank[] = players
      .sort((a, b) => {
        const aAvgHour = a.avgHour ?? Infinity // High penalty for missing data
        const bAvgHour = b.avgHour ?? Infinity
        const aTotalHour = a.totalHour ?? Infinity
        const bTotalHour = b.totalHour ?? Infinity

        // Primary sort: average hours (ascending - lowest wins!)
        if (aAvgHour !== bAvgHour) return aAvgHour - bAvgHour

        // Tiebreaker: total hours (ascending - lowest wins!)
        return aTotalHour - bTotalHour
      })
      .map((player, index) => {
        let status: string

        // Assign status based on ranking
        if (index === 0) {
          status = "WINNER"
        } else if (index === 1) {
          status = "SECOND"
        } else if (index === 2) {
          status = "THIRD"
        } else if (index === 3) {
          status = "RUNNER UP"
        } else {
          status = "PARTICIPANT"
        }

        return {
          ...player,
          rank: index + 1,
          status: status,
        }
      })

    setSortedPlayers(playersWithRankAndStatus)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop Table */}
      <div className="hidden md:block bg-[#f1eada] backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ca6e3f]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#1a1f1b] to-[#2a2f2b]">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-bold text-white uppercase tracking-wider">Rank</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-white uppercase tracking-wider">
                  Squid#
                </th>
                <th className="px-6 py-5 text-center text-sm font-bold text-white uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-5 text-center text-sm font-bold text-white uppercase tracking-wider">
                  Avg Hours
                </th>
                <th className="px-6 py-5 text-center text-sm font-bold text-white uppercase tracking-wider">
                  Total Hours
                </th>
                <th className="px-6 py-5 text-center text-sm font-bold text-white uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ca6e3f]/20">
              {sortedPlayers.map((player, index) => {
                const config = statusConfig[player.status as keyof typeof statusConfig]
                const StatusIcon = config.icon

                return (
                  <motion.tr
                    key={`${player.squidNumber}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                    className={`${config.bg} hover:bg-[#f0e9d9] transition-all duration-300 border-l-4 ${player.status === "WINNER" ? "border-l-green-500" :
                        player.status === "SECOND" ? "border-l-emerald-400" :
                          player.status === "THIRD" ? "border-l-teal-500" :
                            player.status === "RUNNER UP" ? "border-l-blue-500" :
                              "border-l-orange-300"
                      } hover:shadow-lg`}
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-[#1b201c]">#{player.rank}</span>
                        {player.rank <= 3 && (
                          <div className="ml-3">
                            {player.rank === 1 && <span className="text-2xl">🏆</span>}
                            {player.rank === 2 && <span className="text-2xl">🥈</span>}
                            {player.rank === 3 && <span className="text-2xl">🥉</span>}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="text-lg font-mono font-bold text-[#1b201c] bg-[#1b201c]/10 px-3 py-1 rounded-full">
                        {String(player.squidNumber).padStart(3, "0")}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="text-lg font-semibold text-[#1b201c]">@{player.instagramName}</span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="text-xl font-bold text-green-600 bg-green-100/50 px-3 py-1 rounded-lg">
                        {player.avgHour ? `${player.avgHour.toFixed(2)}h` : "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="text-lg font-semibold text-[#1b201c]">
                        {player.totalHour ? `${player.totalHour.toFixed(2)}h` : "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className={`flex items-center space-x-2 ${config.bg} border ${config.bg} rounded-full px-4 py-2`}>
                        <StatusIcon className={`h-5 w-5 ${config.text}`} />
                        <span className={`text-sm font-bold ${config.text} uppercase tracking-wide`}>
                          {config.label}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {sortedPlayers.map((player, index) => {
          const config = statusConfig[player.status as keyof typeof statusConfig]
          const StatusIcon = config.icon

          return (
            <motion.div
              key={`${player.squidNumber}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
              className={`${config.bg} rounded-xl p-6 border backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-[#1b201c]">#{player.rank}</span>
                  {player.rank <= 3 && (
                    <div>
                      {player.rank === 1 && <span className="text-3xl">🏆</span>}
                      {player.rank === 2 && <span className="text-3xl">🥈</span>}
                      {player.rank === 3 && <span className="text-3xl">🥉</span>}
                    </div>
                  )}
                </div>
                <div className={`flex items-center space-x-2 ${config.bg} border rounded-full px-3 py-1`}>
                  <StatusIcon className={`h-4 w-4 ${config.text}`} />
                  <span className={`text-xs font-bold ${config.text} uppercase`}>{config.label}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#1b201c]/70 text-sm font-medium">Squid#</span>
                  <span className="text-[#1b201c] font-mono font-bold bg-[#1b201c]/10 px-2 py-1 rounded">
                    {String(player.squidNumber).padStart(3, "0")}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#1b201c]/70 text-sm font-medium">Instagram</span>
                  <span className="text-[#1b201c] font-semibold">@{player.instagramName}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-green-100/50 rounded-lg p-3">
                    <div className="text-[#1b201c]/70 text-xs uppercase font-bold">Avg Hours</div>
                    <div className="text-green-600 font-bold text-xl">
                      {player.avgHour ? `${player.avgHour.toFixed(2)}h` : "N/A"}
                    </div>
                  </div>
                  <div className="text-center bg-[#1b201c]/10 rounded-lg p-3">
                    <div className="text-[#1b201c]/70 text-xs uppercase font-bold">Total Hours</div>
                    <div className="text-[#1b201c] font-bold text-xl">
                      {player.totalHour ? `${player.totalHour.toFixed(2)}h` : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
