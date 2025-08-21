"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Trophy, Check, Skull } from "lucide-react"
import { type Player, players } from "@/data/player"

// Create a type for players with required rank
type PlayerWithRank = Player & { rank: number }

const statusConfig = {
  ACTIVE: {
    bg: "bg-green-500/20 border-green-500/30",
    text: "text-green-600",
    icon: Check,
  },
  ELIMINATED: {
    bg: "bg-gray-500/20 border-gray-500/30",
    text: "text-gray-600",
    icon: Skull,
  },
  WINNER: {
    bg: "bg-[#ca6e3f]/20 border-[#ca6e3f]/30",
    text: "text-[#ca6e3f]",
    icon: Trophy,
  },
}

export default function Leaderboard() {
  const [sortedPlayers, setSortedPlayers] = useState<PlayerWithRank[]>([])

  useEffect(() => {
    // Calculate ranks and sort by rank
    const playersWithRank: PlayerWithRank[] = players
      .sort((a, b) => {
        // Winners first, then by total hours (descending), then by avg hours (descending)
        if (a.status === "WINNER" && b.status !== "WINNER") return -1
        if (b.status === "WINNER" && a.status !== "WINNER") return 1
        if (a.status === "ELIMINATED" && b.status !== "ELIMINATED") return 1
        if (b.status === "ELIMINATED" && a.status !== "ELIMINATED") return -1

        if (b.totalHour !== a.totalHour) return b.totalHour - a.totalHour
        return b.avgHour - a.avgHour
      })
      .map((player, index) => ({
        ...player,
        rank: index + 1,
      }))

    setSortedPlayers(playersWithRank)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop Table */}
      <div className="hidden md:block bg-[#f1eada] backdrop-blur-sm rounded-2xl shadow-2xl border border-[#ca6e3f]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a1f1b]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Squid#
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Instagram Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Total Hours
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Avg Hours
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ca6e3f]/20">
              {sortedPlayers.map((player, index) => {
                const config = statusConfig[player.status]
                const StatusIcon = config.icon

                return (
                  <motion.tr
                    key={player.squidNumber}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`${config.bg} hover:bg-[#f0e9d9] transition-all duration-200 border-l-4 ${config.bg.includes("green") ? "border-l-green-500" : config.bg.includes("ca6e3f") ? "border-l-[#ca6e3f]" : "border-l-gray-500"}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-[#1b201c]">#{player.rank}</span>
                        {player.rank <= 3 && (
                          <Trophy
                            className={`ml-2 h-5 w-5 ${player.rank === 1 ? "text-[#ca6e3f]" : player.rank === 2 ? "text-gray-500" : "text-amber-600"}`}
                          />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-mono font-bold text-[#1b201c]">
                        {String(player.squidNumber).padStart(3, "0")}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-medium text-[#1b201c]">@{player.instagramName}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-semibold text-[#1b201c]">{player.totalHour.toFixed(1)}h</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg font-semibold text-[#1b201c]">{player.avgHour.toFixed(1)}h</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <StatusIcon className={`h-5 w-5 ${config.text}`} />
                        <span className={`text-sm font-semibold ${config.text} uppercase tracking-wide`}>
                          {player.status}
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
          const config = statusConfig[player.status]
          const StatusIcon = config.icon

          return (
            <motion.div
              key={player.squidNumber}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`bg-[#f1eada] rounded-xl p-6 border border-[#ca6e3f]/20 backdrop-blur-sm shadow-lg`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-[#1b201c]">#{player.rank}</span>
                  {player.rank <= 3 && (
                    <Trophy
                      className={`ml-2 h-6 w-6 ${player.rank === 1 ? "text-[#ca6e3f]" : player.rank === 2 ? "text-gray-500" : "text-amber-600"}`}
                    />
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <StatusIcon className={`h-5 w-5 ${config.text}`} />
                  <span className={`text-sm font-semibold ${config.text} uppercase`}>{player.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#1b201c]/70 text-sm">Squid#</span>
                  <span className="text-[#1b201c] font-mono font-bold">
                    {String(player.squidNumber).padStart(3, "0")}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#1b201c]/70 text-sm">Instagram</span>
                  <span className="text-[#1b201c] font-medium">@{player.instagramName}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-[#1b201c]/70 text-xs uppercase">Total Hours</div>
                    <div className="text-[#1b201c] font-bold text-lg">{player.totalHour.toFixed(1)}h</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#1b201c]/70 text-xs uppercase">Avg Hours</div>
                    <div className="text-[#1b201c] font-bold text-lg">{player.avgHour.toFixed(1)}h</div>
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
