import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import type { Bouquet as BouquetType } from '../types'

const flowers = [
  [105,60,-12,.88],[142,45,-6,.94],[180,38,0,1],[218,45,6,.94],[255,60,12,.88],
  [72,105,-16,.92],[108,96,-10,1],[144,91,-5,1.04],[180,88,0,1.08],[216,91,5,1.04],[252,96,10,1],[288,105,16,.92],
  [91,151,-13,.96],[126,140,-8,1.04],[162,137,-3,1.08],[198,137,3,1.08],[234,140,8,1.04],[269,151,13,.96],
] as const

function BouquetTulip({ x, y, rotate, scale, colors }: { x:number; y:number; rotate:number; scale:number; colors:[string,string] }) {
  return <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
    <path d="M0 20 C-20 17-25 3-21-14 C-11-13-5-7 0 2 C5-7 11-13 21-14 C25 3 20 17 0 20Z" fill={colors[0]} stroke="#9f4968" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M0 20 C-12 11-12-6 0-19 C12-6 12 11 0 20Z" fill={colors[1]} stroke="#9f4968" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M-15-10 C-13 2-9 12 0 19" fill="none" stroke="#ffc4d0" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
    <circle cx="-8" cy="-4" r="3" fill="#ffd2dc" opacity=".65"/>
  </g>
}

export function BouquetArt({ value, compact=false }: { value: BouquetType; compact?: boolean }) {
  const ribbon = value.ribbon === 'Rosa' ? '#ef7194' : value.ribbon === 'Lilás' ? '#9b7ac7' : '#c53f50'
  const wrap = value.wrap === 'Creme' ? '#f6dec0' : value.wrap === 'Rosa' ? '#f6b9c7' : '#e6c6eb'
  const accent = value.accent === 'hearts' ? '♥' : '★'
  const palettes: Record<BouquetType['flowerColor'],[string,string][]> = { Rosa:[['#ffb3c4','#f27494']], Lilás:[['#d9b8ef','#a77acb']], Misto:[['#ffb3c4','#f27494'],['#d9b8ef','#a77acb'],['#fff0b2','#f5bd62']] }
  const palette = palettes[value.flowerColor]
  const patternOpacity = value.pattern === 'Liso' ? 0 : .32
  return <div className={`bouquet-art ${compact?'compact':''}`}><motion.svg viewBox="0 0 360 430" initial={{scale:.92,opacity:0}} animate={{scale:1,opacity:1,rotate:[-1,1,-1]}} transition={{opacity:{duration:.3},scale:{duration:.35},rotate:{repeat:Infinity,duration:4,ease:'easeInOut'}}} role="img" aria-label="Buquê artesanal com 18 tulipas">
    <defs><linearGradient id="bouquetPaper" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".55"/><stop offset=".35" stopColor={wrap}/><stop offset="1" stopColor={wrap}/></linearGradient><pattern id="paperDots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="2.5" fill="#a95d76"/></pattern><pattern id="paperHearts" width="28" height="25" patternUnits="userSpaceOnUse"><path d="M8 8 C8 3 15 3 14 8 C13 3 20 3 20 8 C20 13 14 17 14 17 C14 17 8 13 8 8Z" fill="#b65c79"/></pattern><filter id="bouquetShadow"><feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#733249" floodOpacity=".22"/></filter></defs>
    <g stroke="#4b8a53" strokeWidth="4" strokeLinecap="round">{flowers.map(([x,y],i)=><path key={i} d={`M${x} ${y+17} Q${180+(x-180)*.22} 220 180 318`} fill="none"/>)}</g>
    <g fill="#70aa68" stroke="#42804b" strokeWidth="1.5"><path d="M139 208 C112 185 97 192 103 218 C119 224 130 217 139 208Z"/><path d="M218 225 C238 198 257 203 251 230 C238 236 227 232 218 225Z"/></g>
    <path d="M34 153 L180 191 L326 153 L268 397 Q180 420 92 397Z" fill="url(#bouquetPaper)" stroke="#b98991" strokeWidth="2.5" strokeLinejoin="round" filter="url(#bouquetShadow)"/>
    <path d="M34 153 L180 191 L326 153 L268 397 Q180 420 92 397Z" fill={value.pattern==='Corações'?'url(#paperHearts)':'url(#paperDots)'} opacity={patternOpacity}/>
    <path d="M34 153 L180 191 L92 397Z" fill="#fff" opacity=".2"/><path d="M326 153 L180 191 L268 397Z" fill="#9c6574" opacity=".1"/><path d="M180 192 L180 393" stroke="#a76c79" strokeWidth="2" opacity=".25"/>
    <g>{flowers.map(([x,y,rotate,scale],i)=><BouquetTulip key={i} x={x} y={y} rotate={rotate} scale={scale} colors={palette[i%palette.length]}/>)}</g>
    {value.foliage==='Eucalipto'&&<g fill="#91b59a" stroke="#568069" strokeWidth="1.5"><circle cx="54" cy="94" r="9"/><circle cx="45" cy="113" r="8"/><circle cx="302" cy="95" r="9"/><circle cx="312" cy="115" r="8"/></g>}
    {value.foliage==='Margaridas'&&<g fill="#fffdf4" stroke="#d8b86a" strokeWidth="1">{[52,306].map((x,i)=><g key={x} transform={`translate(${x} ${i?104:98})`}>{[0,72,144,216,288].map(angle=><ellipse key={angle} cy="-9" rx="5" ry="10" transform={`rotate(${angle})`}/>)}<circle r="6" fill="#f2b83f"/></g>)}</g>}
    {value.foliage==='Folhas'&&<g fill="#6da66a" stroke="#417a49" strokeWidth="1.5"><path d="M51 113 C28 91 25 111 46 126Z"/><path d="M308 113 C331 91 334 111 313 126Z"/></g>}
    <g fill={value.accent==='hearts'?'#ef7194':'#f1af36'} fontFamily="serif" fontSize="18" textAnchor="middle"><text x="62" y="67">{accent}</text><text x="299" y="74">{accent}</text><text x="47" y="122">{accent}</text></g>
    <g filter="url(#bouquetShadow)"><path d="M180 303 C146 274 116 278 119 313 C137 329 158 325 180 310Z" fill={ribbon} stroke="#9f4058" strokeWidth="2"/><path d="M180 303 C214 274 244 278 241 313 C223 329 202 325 180 310Z" fill={ribbon} stroke="#9f4058" strokeWidth="2"/><path d="M164 322 L145 382 L178 359 L180 322Z" fill={ribbon} stroke="#9f4058" strokeWidth="2"/><path d="M196 322 L215 382 L182 359 L180 322Z" fill={ribbon} stroke="#9f4058" strokeWidth="2"/><circle cx="180" cy="309" r="23" fill={ribbon} stroke="#9f4058" strokeWidth="2.5"/><path d="M170 306 C170 296 182 296 180 306 C178 296 190 296 190 306 C190 314 180 320 180 320 C180 320 170 314 170 306Z" fill="#fff" opacity=".9"/></g>
  </motion.svg></div>
}

export function Bouquet({ value, onChange, onDone }: { value: BouquetType; onChange:(v:BouquetType)=>void; onDone:()=>void }) {
  const choose = <K extends keyof BouquetType>(key: K, val: BouquetType[K]) => onChange({...value,[key]:val})
  return <main className="screen bouquet-screen"><section className="bouquet-copy"><p className="eyebrow">DESAFIO FINAL</p><h1>Seu jardim virou um <em>buquê!</em></h1><p>Escolha cada detalhe para deixar o presente com a sua cara.</p><fieldset><legend>1. Cor das tulipas</legend><div className="choices">{(['Rosa','Lilás','Misto'] as const).map(x=><button key={x} className={value.flowerColor===x?'selected':''} onClick={()=>choose('flowerColor',x)}><i className={`swatch flower-${x.toLowerCase()}`}/>{x}</button>)}</div></fieldset><fieldset><legend>2. Cor do laço</legend><div className="choices">{(['Rosa','Lilás','Vermelho'] as const).map(x=><button key={x} className={value.ribbon===x?'selected':''} onClick={()=>choose('ribbon',x)}><i className={`swatch ${x.toLowerCase()}`}/>{x}</button>)}</div></fieldset><fieldset><legend>3. Papel de embrulho</legend><div className="choices">{(['Creme','Rosa','Lilás'] as const).map(x=><button key={x} className={value.wrap===x?'selected':''} onClick={()=>choose('wrap',x)}>{x}</button>)}</div></fieldset><fieldset><legend>4. Estampa do papel</legend><div className="choices">{(['Liso','Poá','Corações'] as const).map(x=><button key={x} className={value.pattern===x?'selected':''} onClick={()=>choose('pattern',x)}>{x}</button>)}</div></fieldset><fieldset><legend>5. Acabamento</legend><div className="choices">{(['Folhas','Eucalipto','Margaridas'] as const).map(x=><button key={x} className={value.foliage===x?'selected':''} onClick={()=>choose('foliage',x)}>{x}</button>)}</div></fieldset><fieldset><legend>6. Um toque mágico</legend><div className="choices"><button className={value.accent==='hearts'?'selected':''} onClick={()=>choose('accent','hearts')}><Heart/> Corações</button><button className={value.accent==='stars'?'selected':''} onClick={()=>choose('accent','stars')}><Sparkles/> Estrelas</button></div></fieldset><button className="primary finish-button" onClick={onDone}>Entregar meu buquê <Heart fill="currentColor"/></button></section><section className="bouquet-preview"><span className="preview-label">PRÉVIA DO SEU PRESENTE</span><BouquetArt value={value}/><p>18 tulipas, escolhidas com carinho<br/><strong>especialmente para Haysla</strong></p></section></main>
}
