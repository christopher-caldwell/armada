export type Set = 'commander'

export interface Upgrade {
  title: string
  points: number
  set: Set
  isUnique: boolean
  isDual: boolean
}

export interface Ship {
  points: number
  trackableId?: string
  upgrades: {[key: string]: Upgrade | null} 
}

export type Faction = 'rebel' | 'imperial'