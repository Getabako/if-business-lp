'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceItem {
  title: string
  icon: string
  href: string
  description: string
  targetUser: string
}

const services: ServiceItem[] = [
  {
    title: 'AIパーソナル顧問プラン',
    icon: '👨‍💼',
    href: '#ai-personal-advisor',
    description: 'AIに関していつでも相談して、最新のAIを活用したい経営者の方へ',
    targetUser: '経営者・管理職'
  },
  {
    title: 'AI人材育成プラン',
    icon: '🎓',
    href: '#ai-training',
    description: 'AIを使える人材を育成したい、社員のスキルアップを図りたい方へ',
    targetUser: '人事・教育担当'
  },
  {
    title: 'AI開発支援プラン',
    icon: '⚙️',
    href: '#ai-development',
    description: 'オリジナルのAIシステムを構築して競合優位性を築きたい方へ',
    targetUser: '事業責任者'
  },
  {
    title: 'ICT開発サービス',
    icon: '💻',
    href: '#ict-development',
    description: 'Webサイト・アプリ・ゲームの開発で事業を拡大したい方へ',
    targetUser: 'マーケティング'
  },
  {
    title: 'AIマーケティングサポート',
    icon: '📊',
    href: '#ai-marketing',
    description: 'SNS運用・広告・デザインでブランド力を向上させたい方へ',
    targetUser: '広報・宣伝'
  },
  {
    title: 'AI講座プログラム',
    icon: '📚',
    href: '#ai-courses',
    description: '体系的にAIスキルを学んで、即戦力として活躍したい方へ',
    targetUser: '個人・学習者'
  },
]

export default function ServiceNavigationSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="service-navigation"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/wp-content/uploads/2025/04/An_abstract_background_representing_data_analysis_-1745739047865-scaled.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          サービス一覧
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-xl text-gray-300 max-w-3xl mx-auto"
        >
          あなたの目的に最適なサービスをお選びください
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <motion.button
                onClick={() => scrollToSection(service.href)}
                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/20 w-full h-full text-left border border-white/20"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and target user */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="text-6xl"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <span className="bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-blue-200 border border-blue-400/30">
                      {service.targetUser}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-3 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-center text-blue-300 font-bold group-hover:text-white transition-colors">
                      <span>選択する</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ✨
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400/50"
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full group-hover:from-blue-400/40 group-hover:to-purple-400/40 transition-all duration-300" />
                
                {/* Bottom gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}