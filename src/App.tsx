import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Intro } from './screens/Intro'
import { Game } from './screens/Game'
import { Bouquet } from './screens/Bouquet'
import { Final } from './screens/Final'
import { Memories } from './screens/Memories'
import { AudioControls } from './components/AudioControls'
import { audio } from './audio'
import { clearGame, defaults, loadGame, saveGame } from './storage'
import type { SavedGame, Screen } from './types'

export default function App() {
  const [saved,setSaved] = useState<SavedGame>(loadGame); const [screen,setScreen] = useState<Screen>('intro'); const [elapsed,setElapsed] = useState(0); const [toast,setToast] = useState('')
  useEffect(()=>{ saveGame(saved) },[saved])
  useEffect(()=>{ if(screen!=='game') return; const id=window.setInterval(()=>setElapsed(x=>x+1),1000); return()=>clearInterval(id) },[screen])
  useEffect(()=>{ if(saved.sound && screen!=='intro') audio.startMusic(saved.volume); else audio.stopMusic(); return()=>audio.stopMusic() },[saved.sound,saved.volume,screen])
  const effect=useCallback((kind:'collect'|'reveal')=>{if(saved.sound) audio[kind](saved.volume)},[saved.sound,saved.volume])
  const collect=useCallback((id:number,msg?:number)=>setSaved(s=>({...s,collected:s.collected.includes(id)?s.collected:[...s.collected,id],messages:msg===undefined||s.messages.includes(msg)?s.messages:[...s.messages,msg],lastPlayed:new Date().toISOString()})),[])
  const reset=()=>{setSaved(s=>({...defaults,sound:s.sound,volume:s.volume}));setElapsed(0);setScreen('intro')}
  const clear=()=>{if(window.confirm('Apagar todas as tulipas, mensagens e recordes salvos?')){clearGame();reset()}}
  const finishGame=useCallback(()=>{setSaved(s=>({...s,bestTime:s.bestTime===null?elapsed:Math.min(s.bestTime,elapsed)}));setScreen('bouquet')},[elapsed])
  const complete=()=>{setSaved(s=>({...s,completed:true,lastPlayed:new Date().toISOString()})); if(saved.sound)audio.finish(saved.volume);setScreen('final')}
  const share=async()=>{const data={title:'Haysla e o Jardim das 18 Tulipas',text:'Uma aventura especial floresceu para os 18 anos da Haysla 🌷',url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(`${data.text} ${data.url}`);setToast('Mensagem e link copiados!')}}catch{/* cancelamento do compartilhamento */}}
  return <div className="app"><AudioControls sound={saved.sound} volume={saved.volume} onSound={()=>setSaved(s=>({...s,sound:!s.sound}))} onVolume={volume=>setSaved(s=>({...s,volume}))} onClear={clear}/><AnimatePresence mode="wait"><motion.div key={screen} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.35}}>{screen==='intro'&&<Intro onStart={()=>setScreen(saved.collected.length===18?'bouquet':'game')} hasProgress={saved.collected.length>0}/>} {screen==='game'&&<Game collected={saved.collected} onCollect={collect} onReset={reset} elapsed={elapsed} onFinish={finishGame} soundEffect={effect}/>} {screen==='bouquet'&&<Bouquet value={saved.bouquet} onChange={bouquet=>setSaved(s=>({...s,bouquet}))} onDone={complete}/>} {screen==='final'&&<Final bouquet={saved.bouquet} onMemories={()=>setScreen('memories')} onRestart={reset} onShare={share}/>} {screen==='memories'&&<Memories unlocked={saved.messages} onBack={()=>setScreen(saved.completed?'final':'intro')}/>}</motion.div></AnimatePresence>{toast&&<div className="toast" role="status">{toast}<button onClick={()=>setToast('')}>×</button></div>}</div>
}
