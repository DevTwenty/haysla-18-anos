import { Volume2, VolumeX, Settings2, Trash2 } from 'lucide-react'

export function AudioControls({ sound, volume, onSound, onVolume, onClear }: { sound: boolean; volume: number; onSound: () => void; onVolume: (n: number) => void; onClear: () => void }) {
  return <div className="audio-controls glass"><button className="icon-button" onClick={onSound} aria-label={sound ? 'Desativar sons' : 'Ativar sons'}>{sound ? <Volume2/> : <VolumeX/>}</button><label title="Volume"><Settings2 aria-hidden="true"/><input aria-label="Volume" type="range" min="0" max="1" step=".05" value={volume} onChange={e => onVolume(Number(e.target.value))}/></label><button className="icon-button danger" onClick={onClear} aria-label="Apagar progresso"><Trash2/></button></div>
}
