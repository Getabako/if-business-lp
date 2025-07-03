'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  '月1回の個別最適研修',
  '日常チャットQ&A対応',
  '研修後アフターフォロー付き',
]

export default function AITrainingSection() {
  return (
    <section
      id="ai-training"
      className="section-full relative bg-gradient-to-br from-purple-100 via-violet-50 to-purple-200 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
               `
             }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 right-16 w-36 h-36 bg-purple-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -25, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-28 h-28 bg-violet-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            x: [0, 35, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                AI人材育成プラン
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                ― 社員専用AI/ITトレーナーを月額で
              </motion.p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">特徴</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.span 
                      className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "#7c3aed" }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.span>
                    <span className="text-gray-700 font-medium group-hover:text-gray-800 transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-purple-200/50"
            >
              <div className="flex items-baseline space-x-2">
                <span className="text-lg text-gray-600 font-medium">1名:</span>
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">¥33,000</span>
                <span className="text-xl text-gray-600 font-medium">/月</span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                詳細を見る・お問い合わせ
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/wp-content/uploads/2025/04/2.png"
                alt="AI人材育成プラン"
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/30 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}