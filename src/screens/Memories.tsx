import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { messages } from '../data'

export function Memories({ unlocked, onBack }: { unlocked:number[]; onBack:()=>void }) {
  return <main className="screen memories-screen"><button className="text-button back" onClick={onBack}><ArrowLeft/> Voltar</button><p className="eyebrow">SEU JARDIM PARTICULAR</p><h1>Jardim de <em>Memórias</em></h1><p>Todos os recados que floresceram durante a aventura.</p><div className="memory-grid">{messages.map((message,i)=><article className={unlocked.includes(i)?'':'locked'} key={message}><span>{unlocked.includes(i)?'🌷':<LockKeyhole/>}</span><small>RECADO {i+1}</small><p>{unlocked.includes(i)?message:'Continue a aventura para fazer este recado florescer.'}</p></article>)}</div></main>
}
