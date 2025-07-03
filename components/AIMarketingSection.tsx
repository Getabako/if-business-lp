'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MarketingService {
  title: string
  image: string
  features: string[]
  price: string
}

const services: MarketingService[] = [
  {
    title: 'SNS運用',
            image: '/wp-content/uploads/2025/04/7.png',
    features: [
      '複数SNSの戦略的運用',
      'エンゲージメント向上施策',
      '広告運用・制作・効果測定',
    ],
    price: '¥80,000〜/月',
  },
  {
    title: 'LINE開発',
            image: '/wp-content/uploads/2025/04/8.png',
    features: [
      '自動応答・予約連携',
      'ステップ配信設計',
      'リッチメニュー開発',
    ],
    price: '¥50,000〜',
  },
  {
    title: '広報デザイン',
            image: '/wp-content/uploads/2025/04/9.png',
    features: [
      'プロモーション動画制作',
      '販促ツールデザイン',
      'ブランドアイデンティティ設計',
    ],
    price: '¥100,000〜',
  },
]

export default function AIMarketingSection() {
  return (
    <section
      id="ai-marketing"
      className="section-full relative bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 75% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)
               `
             }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-16 right-20 w-44 h-44 bg-rose-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -35, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-36 h-36 bg-orange-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-amber-400/15 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl"
        >
          AIマーケティングサポート
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur shadow-xl border border-rose-200/50"
            >
              <div className="relative overflow-hidden h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-orange-500/0 group-hover:from-rose-500/20 group-hover:to-orange-500/20 transition-all duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-2 group"
                    >
                      <motion.span 
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-orange-500"
                        whileHover={{ scale: 1.1, color: "#dc2626" }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.span>
                      <span className="text-gray-700 text-sm font-medium group-hover:text-gray-800 transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
                      {service.price}
                    </span>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                        y: -1
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center justify-center space-x-1">
                        <span>企画提案</span>
                        <motion.span
                          animate={{ rotate: [0, 15, -15, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          📈
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(249, 115, 22, 0.1))',
                  boxShadow: '0 0 30px rgba(249, 115, 22, 0.15)'
                }}
              />

              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}