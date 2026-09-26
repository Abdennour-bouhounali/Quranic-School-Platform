import { motion } from 'framer-motion'

type Props = { index: number; title: string; intro?: string }

export function SectionHeader({ index, title, intro }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-6 md:mb-8"
    >
      <p className="num text-sm font-semibold tracking-widest text-gold">{String(index).padStart(2, '0')}</p>
      <h2 className="section-title mt-1">{title}</h2>
      {intro && <p className="mt-2 max-w-2xl text-base text-ink-soft md:text-lg">{intro}</p>}
    </motion.header>
  )
}
