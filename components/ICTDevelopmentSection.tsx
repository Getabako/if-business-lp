'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCard {
  title: string
  image: string
  features: string[]
  price: string
}

const services: ServiceCard[] = [
  {
    title: 'LP開発',
            image: '/wp-content/uploads/2025/04/4.png',
    features: [
      '目的に最適化されたデザイン',
      'ユーザー心理を考慮したCTA',
      'レスポンシブ対応',
      '安心のセキュリティ',
    ],
    price: '¥150,000〜',
  },
  {
    title: 'Web開発',
            image: '/wp-content/uploads/2025/04/5-scaled.png',
    features: [
      'ECサイト構築',
      '予約・在庫管理システム',
      'アクセス解析',
      '業務効率化',
    ],
    price: '¥300,000〜',
  },
  {
    title: 'ゲーム開発',
            image: '/wp-content/uploads/2025/04/6-scaled.png',
    features: [
      '企業PRゲーム',
      'ゲーミフィケーション',
      'Web・スマホ対応マルチプラットフォーム開発',
    ],
    price: '¥500,000〜',
  },
]

export default function ICTDevelopmentSection() {
  return (
    <section
      id="ict-development"
      className="section-full relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 30% 20%, rgba(71, 85, 105, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.2) 0%, transparent 50%)
               `
             }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-slate-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-24 right-24 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
          ICT開発サービス
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur shadow-xl transition-all duration-300 hover:shadow-2xl border border-slate-200/50"
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.h3 
                  className="absolute bottom-4 left-6 text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
              </div>

              <div className="p-6 space-y-4">
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
                        className="flex-shrink-0 w-5 h-5 mt-0.5 text-blue-500"
                        whileHover={{ scale: 1.1 }}
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
                    <span className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">{service.price}</span>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                        y: -1
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative bg-gradient-to-r from-slate-500 via-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 flex items-center justify-center space-x-1">
                        <span>お見積り</span>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          💼
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 to-blue-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, rgba(71, 85, 105, 0.1), rgba(59, 130, 246, 0.1))',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}