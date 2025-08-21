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
    instagramName: "seong_gi_hun",
    totalHour: 156.8,
    avgHour: 11.2,
    status: "WINNER",
  },
  {
    squidNumber: 67,
    instagramName: "kang_sae_byeok",
    totalHour: 142.3,
    avgHour: 10.2,
    status: "ACTIVE",
  },
  {
    squidNumber: 199,
    instagramName: "ali_abdul",
    totalHour: 138.7,
    avgHour: 9.9,
    status: "ACTIVE",
  },
  {
    squidNumber: 218,
    instagramName: "cho_sang_woo",
    totalHour: 134.5,
    avgHour: 9.6,
    status: "ELIMINATED",
  },
  {
    squidNumber: 240,
    instagramName: "ji_yeong",
    totalHour: 129.2,
    avgHour: 9.2,
    status: "ELIMINATED",
  },
  {
    squidNumber: 101,
    instagramName: "jang_deok_su",
    totalHour: 125.8,
    avgHour: 9.0,
    status: "ELIMINATED",
  },
  {
    squidNumber: 212,
    instagramName: "han_mi_nyeo",
    totalHour: 122.4,
    avgHour: 8.7,
    status: "ACTIVE",
  },
  {
    squidNumber: 456,
    instagramName: "player_456",
    totalHour: 118.9,
    avgHour: 8.5,
    status: "ACTIVE",
  },
  {
    squidNumber: 324,
    instagramName: "player_324",
    totalHour: 115.3,
    avgHour: 8.2,
    status: "ELIMINATED",
  },
  {
    squidNumber: 278,
    instagramName: "player_278",
    totalHour: 112.7,
    avgHour: 8.1,
    status: "ACTIVE",
  },
  {
    squidNumber: 156,
    instagramName: "player_156",
    totalHour: 108.4,
    avgHour: 7.7,
    status: "ELIMINATED",
  },
  {
    squidNumber: 389,
    instagramName: "player_389",
    totalHour: 105.2,
    avgHour: 7.5,
    status: "ACTIVE",
  },
  {
    squidNumber: 432,
    instagramName: "player_432",
    totalHour: 102.8,
    avgHour: 7.3,
    status: "ELIMINATED",
  },
  {
    squidNumber: 167,
    instagramName: "player_167",
    totalHour: 98.6,
    avgHour: 7.0,
    status: "ACTIVE",
  },
  {
    squidNumber: 298,
    instagramName: "player_298",
    totalHour: 95.4,
    avgHour: 6.8,
    status: "ELIMINATED",
  },
  {
    squidNumber: 345,
    instagramName: "player_345",
    totalHour: 92.1,
    avgHour: 6.6,
    status: "ACTIVE",
  },
  {
    squidNumber: 123,
    instagramName: "player_123",
    totalHour: 88.9,
    avgHour: 6.4,
    status: "ELIMINATED",
  },
  {
    squidNumber: 234,
    instagramName: "player_234",
    totalHour: 85.7,
    avgHour: 6.1,
    status: "ACTIVE",
  },
  {
    squidNumber: 367,
    instagramName: "player_367",
    totalHour: 82.3,
    avgHour: 5.9,
    status: "ELIMINATED",
  },
  {
    squidNumber: 445,
    instagramName: "player_445",
    totalHour: 79.8,
    avgHour: 5.7,
    status: "ACTIVE",
  },
]