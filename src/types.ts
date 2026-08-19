export type Screen = 'intro' | 'game' | 'bouquet' | 'final' | 'memories'
export type Bouquet = { ribbon: string; wrap: string; accent: 'hearts' | 'stars' }
export type SavedGame = { version: 1; collected: number[]; messages: number[]; bestTime: number | null; sound: boolean; volume: number; bouquet: Bouquet; completed: boolean; lastPlayed: string | null }
