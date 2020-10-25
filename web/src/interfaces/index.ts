export type Set = 'commander'

export interface Upgrade {
  points: number
  set: Set
  isUnique: boolean
  isDual: boolean
}

export interface Ship {
  points: number
  trackableId?: string
  upgrades: {[key: string]: Upgrade}
}