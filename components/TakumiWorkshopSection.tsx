'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TakumiWorkshopSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      title: 'PCパーツ選定・組み立てサポート',
      price: '¥20,000',
      note: '（パーツ代別途）',
      icon: '🔧',
      description: 'あなたの用途に最適なパーツ選定から組み立てまで完全サポート'
    },
    {
      title: '秋葉原ツアー付きプレミアム',
      price: '¥100,000',
      note: '（パーツ代別途）',
      icon: '🗼',
      description: '秋葉原での部品調達から組み立てまで、特別体験付きプラン'
    }
  ]

  const features = [
    { icon: '📶', text: 'Wi-Fi設定・配線整理' },
    { icon: '🔩', text: 'パーツ選定〜組立' },
    { icon: '💬', text: 'オンライン・対面相談無料' }
  ]

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://drive.google.com/uc?export=view&id=1wysqPAJrlHaCONmPc7KmQwLIg-AoMzaP')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Circuit patterns overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0088ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8800ff" stopOpacity="0.6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Circuit lines */}
          <motion.g
            stroke="url(#circuitGlow)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            <path d="M100,100 L300,100 L300,300 L500,300 L500,500" />
            <path d="M200,50 L200,150 L400,150 L400,250" />
            <path d="M600,200 L800,200 L800,400 L900,400" />
            <path d="M150,400 L350,400 L350,600 L550,600" />
            <path d="M700,100 L700,300 L900,300" />
          </motion.g>
          
          {/* Circuit nodes */}
          {[
            { x: 100, y: 100 }, { x: 300, y: 300 }, { x: 500, y: 500 },
            { x: 200, y: 150 }, { x: 800, y: 200 }, { x: 350, y: 600 }
          ].map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="6"
              fill="#00ff88"
              filter="url(#glow)"
              animate={{
                r: [6, 8, 6],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />
          ))}
        </svg>

        {/* Floating circuit elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded-sm opacity-60 animate-pulse delay-500" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-purple-400 rounded opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-1500" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-mono"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textShadow: '0 0 20px #00ff88' }}
          >
            匠工房
            <motion.span 
              className="text-green-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto font-mono leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PC導入・ネットワーク構築・PC組み立てフルサポート<br />
            <span className="text-green-400">（ご希望の方は秋葉原ツアーもご案内）</span>
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative bg-black/50 border border-green-400/30 rounded-lg p-6 font-mono backdrop-blur-sm">
              <div className="absolute top-2 left-2 flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="mt-6 text-green-400 text-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-0.5 bg-green-400 mb-4"
                />
                <p className="text-gray-300 leading-relaxed">
                  パソコン組み立てやネットワーク環境設定はもちろん、「どんな用途で使いたいか」を丁寧にヒアリングし、
                  ご要望に合わせて最適な構成・組み立てをご提案。
                  トラブル解決やメンテナンスもサポートします。
                  事前相談は無料なので、初めての方も安心してご相談ください。
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-mono">
                <span className="text-green-400">[FEATURES]</span>
              </h3>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-300 font-mono"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-green-400">&gt;</span>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-mono text-center">
              <span className="text-cyan-400">[SERVICE_MENU]</span>
            </h3>
            
            {services.map((service, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className={`relative bg-black/70 border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  hoveredService === index
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Circuit corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

                <div className="flex items-center space-x-4 mb-4">
                  <motion.div 
                    className="text-4xl"
                    animate={hoveredService === index ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white font-mono">{service.title}</h4>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </div>
                
                <div className="font-mono">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-sm text-gray-400 ml-2">{service.note}</span>
                </div>

                {hoveredService === index && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400"
                  />
                )}
              </motion.div>
            ))}


          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded opacity-60"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-20 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
        animate={{ 
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  )
}