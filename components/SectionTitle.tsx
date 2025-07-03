'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  variant?: 'default' | 'dark' | 'light'
}

export default function SectionTitle({ title, subtitle, variant = 'default' }: SectionTitleProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return {
          bg: 'from-gray-900 via-blue-900 to-gray-900',
          text: 'text-white',
          accent: 'from-cyan-400 to-blue-500',
          glow: 'shadow-cyan-500/20'
        }
      case 'light':
        return {
          bg: 'from-white via-blue-50 to-white',
          text: 'text-gray-900',
          accent: 'from-blue-500 to-cyan-600',
          glow: 'shadow-blue-500/20'
        }
      default:
        return {
          bg: 'from-slate-900 via-blue-800 to-slate-900',
          text: 'text-white',
          accent: 'from-blue-400 to-cyan-500',
          glow: 'shadow-blue-500/20'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <div className="relative w-full overflow-hidden mb-16">
      {/* Cyber background band */}
      <div className={`relative bg-gradient-to-r ${styles.bg} py-8 border-y-2 border-blue-400/30`}>
        {/* Animated circuit lines */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            animate={{
              x: ['100%', '-100%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1
            }}
          />
        </div>

        {/* Hexagonal pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-4xl lg:text-5xl font-bold ${styles.text} relative`}
          >
            {/* Glitch effect background */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-lg"></span>
            
            {/* Main text */}
            <span className="relative z-10">{title}</span>

            {/* Animated accent line */}
            <motion.div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${styles.accent} rounded-full ${styles.glow}`}
              initial={{ width: 0 }}
              whileInView={{ width: '80%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`mt-4 text-base md:text-lg lg:text-xl opacity-80 ${styles.text}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400"></div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Section divider lines */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
      <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </div>
  )
} 