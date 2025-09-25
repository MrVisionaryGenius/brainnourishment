export interface Player {
  squidNumber: number
  instagramName: string
  totalHour: number
  avgHour: number
  status: "ACTIVE" | "ELIMINATED" | "WINNER"
  rank?: number
}

export const players: Player[] = [
  {
    squidNumber: 1,
    instagramName: "Dre",
    totalHour: 11.17,
    avgHour: 11.17,
    status: "WINNER",
  },
  
]