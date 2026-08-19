import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { KawaiiCat } from '../components/KawaiiCat'

export function Intro({ onStart, hasProgress }: { onStart: () => void; hasProgress: boolean }) {
  return <main className="screen intro-screen"><div className="cloud c1"/><div className="cloud c2"/><div className="intro-copy"><motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">UMA AVENTURA ESPECIAL FLORESCEU</motion.p><motion.h1 initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}><span>Haysla</span><b>18</b></motion.h1><h2>e o Jardim das 18 Tulipas</h2><p className="lead">Hoje o jardim ficou mais bonito, porque é o aniversário de alguém muito especial.</p><p>Existem 18 tulipas escondidas nesta aventura. Encontre todas para desbloquear o seu presente!</p><button className="primary" onClick={onStart}><Sparkles/> {hasProgress ? 'Continuar minha surpresa' : 'Começar minha surpresa'}</button><small>Use as setas, WASD ou os controles da tela</small></div><div className="hero-art"><span className="big-flowers">🌷 🌷<br/> 🌷 🌷</span><KawaiiCat/><motion.div className="age-badge" animate={{ rotate: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 3 }}>18<br/><small>anos</small></motion.div></div></main>
}
