import { Ship } from '@/interfaces/'

export interface SessionState {
  numberOfFleetNotifications: number,
  totalPoints: number,
  fleetName: string,
  hasCommanderBeenChosen: boolean,
  chosenFaction: string,
  targetShip: Ship | null,
  unavailableUniqueUpgrades: {}
}