import { motion } from 'framer-motion'

export function Tulip({ collected = false }: { collected?: boolean }) {
  return <motion.svg className={`tulip ${collected ? 'picked' : ''}`} viewBox="0 0 64 104" initial={{ scale: 0, opacity: 0 }} animate={{ scale: collected ? 0 : 1, opacity: collected ? 0 : 1, rotate: collected ? 0 : [-2, 2, -2] }} transition={{ scale: { duration: .25 }, opacity: { duration: .2 }, rotate: { repeat: Infinity, duration: 2.6, ease: 'easeInOut' } }} aria-hidden="true">
    <defs><linearGradient id="game-petal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffafc1"/><stop offset="1" stopColor="#df4d72"/></linearGradient><linearGradient id="game-stem" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#377746"/><stop offset=".55" stopColor="#68a765"/><stop offset="1" stopColor="#3f824d"/></linearGradient></defs>
    <path d="M31 39 C30 58 31 78 32 101" fill="none" stroke="url(#game-stem)" strokeWidth="6" strokeLinecap="round"/>
    <path d="M30 70 C18 54 7 57 9 77 C18 79 25 76 31 69Z" fill="#72ad68" stroke="#3e7d4a" strokeWidth="2"/>
    <path d="M33 82 C42 66 55 67 54 85 C46 89 39 87 32 81Z" fill="#67a661" stroke="#3e7d4a" strokeWidth="2"/>
    <path d="M32 43 C13 40 7 27 10 9 C20 10 27 17 32 26 C37 17 44 10 54 9 C57 27 51 40 32 43Z" fill="url(#game-petal)" stroke="#b83e60" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M32 43 C20 34 20 17 32 5 C44 17 44 34 32 43Z" fill="#f27191" stroke="#b83e60" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M18 13 C19 26 23 35 32 42" fill="none" stroke="#ffc1ce" strokeWidth="2" strokeLinecap="round" opacity=".75"/>
    <path d="M32 8 C35 19 36 31 32 41" fill="none" stroke="#ffb3c4" strokeWidth="2" strokeLinecap="round" opacity=".7"/>
  </motion.svg>
}
