import { motion } from 'framer-motion'

export function KawaiiCat({ small = false }: { small?: boolean }) {
  return <motion.div className={`cat ${small ? 'cat-small' : ''}`} animate={{ y: [0, -5, 0], rotate: [-1, 1, -1] }} transition={{ repeat: Infinity, duration: 2.4 }} aria-label="Gatinha branca kawaii com laço rosa" role="img">
    <div className="cat-ear left"/><div className="cat-ear right"/><div className="cat-head"><span className="cat-eye">●</span><span className="cat-nose">◆</span><span className="cat-eye">●</span><i className="whisker w1"/><i className="whisker w2"/><i className="whisker w3"/><i className="whisker w4"/></div><div className="bow"><b/><b/><i/></div><div className="cat-body"><span>♡</span></div>
  </motion.div>
}
