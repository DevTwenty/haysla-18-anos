import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import type { Bouquet as BouquetType } from '../types'

export function BouquetArt({ value, compact=false }: { value: BouquetType; compact?: boolean }) {
  const ribbon = value.ribbon === 'Rosa' ? '#ef7194' : value.ribbon === 'Lilás' ? '#9b7ac7' : '#c53f50'
  const wrap = value.wrap === 'Creme' ? '#f6dec0' : value.wrap === 'Rosa' ? '#f6b9c7' : '#e6c6eb'
  return <motion.div className={`bouquet-art ${compact?'compact':''}`} initial={{scale:.8}} animate={{scale:1,rotate:[-1.5,1.5,-1.5]}} transition={{rotate:{repeat:Infinity,duration:3}}}><div className="bouquet-blooms">{Array.from({length:18},(_,i)=><span key={i} style={{'--i':i} as React.CSSProperties}>🌷</span>)}</div><div className="bouquet-wrap" style={{background:wrap}}/><div className="bouquet-ribbon" style={{background:ribbon}}>♡</div><div className="bouquet-accent">{value.accent==='hearts'?'♥ ♥ ♥':'★ ★ ★'}</div></motion.div>
}

export function Bouquet({ value, onChange, onDone }: { value: BouquetType; onChange:(v:BouquetType)=>void; onDone:()=>void }) {
  const choose = (key: keyof BouquetType, val: string) => onChange({...value,[key]:val})
  return <main className="screen bouquet-screen"><section className="bouquet-copy"><p className="eyebrow">DESAFIO FINAL</p><h1>Seu jardim virou um <em>buquê!</em></h1><p>Escolha cada detalhe para deixar o presente com a sua cara.</p><fieldset><legend>1. Cor do laço</legend><div className="choices">{['Rosa','Lilás','Vermelho'].map(x=><button key={x} className={value.ribbon===x?'selected':''} onClick={()=>choose('ribbon',x)}><i className={`swatch ${x.toLowerCase()}`}/>{x}</button>)}</div></fieldset><fieldset><legend>2. Papel de embrulho</legend><div className="choices">{['Creme','Rosa','Lilás'].map(x=><button key={x} className={value.wrap===x?'selected':''} onClick={()=>choose('wrap',x)}>{x}</button>)}</div></fieldset><fieldset><legend>3. Um toque mágico</legend><div className="choices"><button className={value.accent==='hearts'?'selected':''} onClick={()=>choose('accent','hearts')}><Heart/> Corações</button><button className={value.accent==='stars'?'selected':''} onClick={()=>choose('accent','stars')}><Sparkles/> Estrelas</button></div></fieldset><button className="primary finish-button" onClick={onDone}>Entregar meu buquê <Heart fill="currentColor"/></button></section><section className="bouquet-preview"><span className="preview-label">PRÉVIA DO SEU PRESENTE</span><BouquetArt value={value}/><p>18 tulipas, escolhidas com carinho<br/><strong>especialmente para Haysla</strong></p></section></main>
}
