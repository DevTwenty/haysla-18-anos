export type Screen = 'intro' | 'game' | 'bouquet' | 'final' | 'memories'
export type Bouquet = { ribbon: 'Rosa'|'Lilás'|'Vermelho'; wrap: 'Creme'|'Rosa'|'Lilás'; accent: 'hearts'|'stars'; flowerColor: 'Rosa'|'Lilás'|'Misto'; pattern: 'Liso'|'Poá'|'Corações'; foliage: 'Folhas'|'Eucalipto'|'Margaridas' }
export type SavedGame = { version: 1; collected: number[]; messages: number[]; bestTime: number | null; sound: boolean; volume: number; bouquet: Bouquet; completed: boolean; lastPlayed: string | null }
