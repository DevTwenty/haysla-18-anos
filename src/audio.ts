let context: AudioContext | null = null
let musicTimer: number | null = null

function tone(frequency: number, duration: number, volume: number, delay = 0) {
  context ??= new AudioContext()
  const osc = context.createOscillator(); const gain = context.createGain(); const now = context.currentTime + delay
  osc.type = 'sine'; osc.frequency.setValueAtTime(frequency, now); gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(volume, now + .02); gain.gain.exponentialRampToValueAtTime(.001, now + duration)
  osc.connect(gain).connect(context.destination); osc.start(now); osc.stop(now + duration)
}

export const audio = {
  collect(volume: number) { tone(660, .18, volume * .13); tone(880, .22, volume * .1, .08) },
  reveal(volume: number) { [523, 659, 784].forEach((n, i) => tone(n, .35, volume * .1, i * .1)) },
  finish(volume: number) { [523, 659, 784, 1047].forEach((n, i) => tone(n, .5, volume * .12, i * .12)) },
  startMusic(volume: number) { if (musicTimer) return; let i = 0; const notes = [262, 330, 392, 330, 294, 349, 440, 349]; const play = () => { tone(notes[i++ % notes.length], 1.1, volume * .025); musicTimer = window.setTimeout(play, 850) }; play() },
  stopMusic() { if (musicTimer) window.clearTimeout(musicTimer); musicTimer = null },
}
