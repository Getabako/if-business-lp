'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 動画ソースの選択をクライアント側で行う
  const getVideoSrc = () => {
    if (!isMounted) return '/wp-content/uploads/2025/04/lpmoviepc.mp4'
    return window.innerWidth <= 768 
      ? '/wp-content/uploads/2025/04/lpmoviesp.mp4'
      : '/wp-content/uploads/2025/04/lpmoviepc.mp4'
  }

  return (
    <section 
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {isMounted ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={getVideoSrc()}
          >
            <source src={getVideoSrc()} type="video/mp4" />
          </video>
        ) : (
          // フォールバック背景
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/wp-content/uploads/2025/04/ChatGPT-Image-2025年4月27日-16_58_29.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="relative inline-block">
              売上拡大と業務効率化を最大に
              {/* キラキラ装飾 */}
              <motion.span
                className="absolute -top-2 -right-2 text-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                ✨
              </motion.span>
              <motion.span
                className="absolute -bottom-2 -left-2 text-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                ⭐
              </motion.span>
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ―経営者から現場まで成果を生むAI運用を、導入から継続的に伴走サポート―
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              サービス一覧を見る
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}