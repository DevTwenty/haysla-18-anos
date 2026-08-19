import { motion } from 'framer-motion'

export function Tulip({ collected = false }: { collected?: boolean }) {
  return <motion.span className={`tulip ${collected ? 'picked' : ''}`} initial={{ scale: 0 }} animate={{ scale: collected ? 0 : [1, 1.08, 1], rotate: [-2, 2, -2] }} transition={{ duration: .35, scale: { repeat: collected ? 0 : Infinity, duration: 2.2 } }} aria-hidden="true"><i className="flower">♥</i><i className="stem"/><i className="leaf">●</i></motion.span>
}
