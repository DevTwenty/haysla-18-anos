import type { SavedGame } from './types'

export const STORAGE_KEY = 'haysla-garden-v1'
export const defaults: SavedGame = { version: 1, collected: [], messages: [], bestTime: null, sound: true, volume: 0.45, bouquet: { ribbon: 'Rosa', wrap: 'Creme', accent: 'hearts', flowerColor: 'Rosa', pattern: 'Liso', foliage: 'Folhas' }, completed: false, lastPlayed: null }

export function loadGame(): SavedGame {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    if (!raw || typeof raw !== 'object') return defaults
    const value = raw as Partial<SavedGame>
    if (value.version !== 1) return defaults
    return {
      ...defaults, ...value,
      collected: Array.isArray(value.collected) ? [...new Set(value.collected.filter((x): x is number => Number.isInteger(x) && x >= 0 && x < 18))] : [],
      messages: Array.isArray(value.messages) ? [...new Set(value.messages.filter((x): x is number => Number.isInteger(x) && x >= 0 && x < 6))] : [],
      volume: typeof value.volume === 'number' ? Math.max(0, Math.min(1, value.volume)) : defaults.volume,
      sound: typeof value.sound === 'boolean' ? value.sound : defaults.sound,
      bouquet: { ...defaults.bouquet, ...(value.bouquet || {}) },
    }
  } catch { return defaults }
}

export function saveGame(game: SavedGame) { localStorage.setItem(STORAGE_KEY, JSON.stringify(game)) }
export function clearGame() { localStorage.removeItem(STORAGE_KEY) }
