'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function InokuraSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const services = [
    {
      name: '大きめの建築物',
      price: '¥150,000',
      icon: '🏰',
      description: '企業ビル、学校、イベント会場など大規模建築',
      material: 'diamond'
    },
    {
      name: 'キャラクター追加',
      price: '¥100,000',
      icon: '👤',
      description: 'モデル＋アニメ＋動きセット',
      material: 'emerald'
    },
    {
      name: '単発イベント実装',
      price: '¥50,000',
      icon: '🎪',
      description: '簡単なミニゲームやクエスト',
      material: 'gold'
    },
    {
      name: '複数イベント実装',
      price: '¥150,000',
      icon: '🎯',
      description: '本格的なゲームシステム',
      material: 'redstone'
    },
    {
      name: 'アイテム追加',
      price: '¥50,000',
      icon: '⚔️',
      description: 'カスタムアイテム・ツール',
      material: 'iron'
    },
    {
      name: '乗り物追加',
      price: '¥100,000',
      icon: '🚗',
      description: 'モデル＋アニメ＋動きセット',
      material: 'netherite'
    },
    {
      name: 'データパック・プラグイン開発',
      price: '¥300,000',
      icon: '⚙️',
      description: 'システム開発・機能追加',
      material: 'obsidian'
    },
    {
      name: 'バージョン変更',
      price: '¥200,000',
      icon: '🔄',
      description: 'アップデート対応・移行',
      material: 'lapis'
    },
    {
      name: '構造物追加',
      price: '¥100,000',
      icon: '🏗️',
      description: 'カスタム構造物・建造物',
      material: 'coal'
    }
  ]

  const getMaterialColor = (material: string) => {
    const colors = {
      diamond: 'from-cyan-300 to-blue-400',
      emerald: 'from-green-300 to-green-500',
      gold: 'from-yellow-300 to-yellow-500',
      redstone: 'from-red-400 to-red-600',
      iron: 'from-gray-300 to-gray-500',
      netherite: 'from-purple-600 to-gray-800',
      obsidian: 'from-purple-900 to-black',
      lapis: 'from-blue-400 to-blue-600',
      coal: 'from-gray-600 to-gray-800'
    }
    return colors[material as keyof typeof colors] || 'from-gray-400 to-gray-600'
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-900 via-green-800 to-green-900 overflow-hidden py-20">
      {/* Minecraft-style background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/wp-content/uploads/2025/04/イノクラの仮想世界.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Pixelated overlay pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 16px,
                rgba(255,255,255,0.1) 16px,
                rgba(255,255,255,0.1) 17px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 16px,
                rgba(255,255,255,0.1) 16px,
                rgba(255,255,255,0.1) 17px
              )
            `
          }}
        />
        
        {/* Floating block particles */}
        {[
          { top: '10%', left: '10%', delay: 0, color: 'bg-green-500' },
          { top: '20%', left: '80%', delay: 1, color: 'bg-brown-600' },
          { top: '60%', left: '15%', delay: 2, color: 'bg-gray-500' },
          { top: '80%', left: '70%', delay: 3, color: 'bg-blue-500' },
          { top: '40%', left: '85%', delay: 4, color: 'bg-yellow-600' }
        ].map((block, index) => (
          <motion.div
            key={index}
            className={`absolute w-8 h-8 ${block.color} shadow-lg`}
            style={{ 
              top: block.top, 
              left: block.left,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: block.delay
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 pixel-font"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              textShadow: '4px 4px 0px #000, -4px -4px 0px #fff2',
              fontFamily: 'monospace'
            }}
          >
            イノクラ
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-200 mt-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontFamily: 'monospace' }}
          >
            Minecraftを活用したバーチャル空間構築サービスです。
          </motion.p>
        </motion.div>

        {/* Minecraft-style service grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Minecraft-style inventory grid */}
            <div 
              className="bg-gray-800 border-4 border-gray-600 p-8 rounded-none"
              style={{
                boxShadow: 'inset -8px -8px 0px rgba(0,0,0,0.5), inset 8px 8px 0px rgba(255,255,255,0.2)',
                background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className={`relative bg-gradient-to-br ${getMaterialColor(service.material)} border-4 border-gray-500 p-4 cursor-pointer transition-all duration-200 minecraft-slot`}
                    style={{
                      boxShadow: hoveredItem === index 
                        ? 'inset -4px -4px 0px rgba(0,0,0,0.7), inset 4px 4px 0px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.5)'
                        : 'inset -4px -4px 0px rgba(0,0,0,0.5), inset 4px 4px 0px rgba(255,255,255,0.2)',
                      fontFamily: 'monospace',
                      minHeight: '120px'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Item icon */}
                    <div className="flex items-center justify-center mb-2">
                      <motion.div 
                        className="text-3xl bg-black/30 w-12 h-12 flex items-center justify-center rounded border-2 border-gray-700"
                        animate={hoveredItem === index ? { rotate: [0, 5, -5, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    
                    {/* Item name */}
                    <h4 className="text-white font-bold text-sm text-center mb-1 leading-tight">
                      {service.name}
                    </h4>
                    
                    {/* Price */}
                    <div className="text-center">
                      <span className="text-yellow-300 font-bold text-lg">
                        {service.price}
                      </span>
                    </div>
                    
                    {/* Tooltip on hover */}
                    {hoveredItem === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 border-2 border-gray-600 p-3 rounded text-white text-sm max-w-48"
                        style={{
                          boxShadow: 'inset -2px -2px 0px rgba(0,0,0,0.5), inset 2px 2px 0px rgba(255,255,255,0.2)',
                          fontFamily: 'monospace'
                        }}
                      >
                        <div className="text-center">
                          <div className="text-yellow-300 font-bold mb-1">{service.name}</div>
                          <div className="text-gray-300 text-xs mb-2">{service.description}</div>
                          <div className="text-green-400 font-bold">{service.price}</div>
                        </div>
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"
                        />
                      </motion.div>
                    )}
                    
                    {/* Stack count effect */}
                    <div className="absolute bottom-1 right-1 text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}