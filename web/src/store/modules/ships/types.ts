import { Ship } from '@/interfaces/'

export interface ShipState {
  ships: { [key: string]: Ship }
}