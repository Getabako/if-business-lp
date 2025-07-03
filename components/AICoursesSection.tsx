'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Course {
  title: string
  content: string
  format: string
  price: string
  duration: string
  icon: string
  color: string
}

const courses: Course[] = [
  {
    title: 'ビジネス向けコース',
    content: 'AIでビジネスプラン策定／広報戦略立案／資料作成効率化の実践講座',
    format: '全8回 各3h：事例解説＋実践ワーク',
    price: '¥200,000/名',
    duration: '8回',
    icon: '💼',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'クリエイター向けコース',
    content: 'AIによる画像生成／動画生成／ブログ作成／SNS投稿作成',
    format: '全8回 各2h：実演＋制作ワーク',
    price: '¥150,000/名',
    duration: '8回',
    icon: '🎨',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: '開発者向けコース',
    content: '基礎編: AI基本概念と環境構築\n応用編: AI API活用と連携\n実践編: アプリ開発プロジェクト',
    format: '全8回 各2h',
    price: '¥200,000/名',
    duration: '8回',
    icon: '⚡',
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'ゲームクリエイター向けコース',
    content: 'AIキャラクター生成／AI3DCG／AIゲームプログラミング／リリースまで学ぶ実践講座',
    format: '全8回 各2h：実演＋制作ワーク',
    price: '¥200,000/名',
    duration: '8回',
    icon: '🎮',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: '学生向けコース',
    content: 'AI自己分析／AIエントリーシート／AIガクチカ／AI起業を学ぶ実践講座',
    format: '全4回 各90分：就活＆起業ワークショップ',
    price: '¥100,000/名',
    duration: '4回',
    icon: '🎓',
    color: 'from-cyan-500 to-blue-600'
  }
]

export default function AICoursesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section 
      id="ai-courses" 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full" />
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI講座プログラム
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            あなたの専門分野に特化したAI活用スキルを実践的に習得
          </motion.p>
        </motion.div>

        {/* Course Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-4">
            {courses.map((course, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeIndex === index
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {course.icon} {course.title}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  className={`text-8xl mb-6 bg-gradient-to-r ${courses[activeIndex].color} bg-clip-text text-transparent inline-block`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {courses[activeIndex].icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {courses[activeIndex].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line">
                  {courses[activeIndex].content}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>{courses[activeIndex].format}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>受講回数: {courses[activeIndex].duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <motion.div
                  className={`bg-gradient-to-r ${courses[activeIndex].color} rounded-2xl p-8 text-white shadow-2xl`}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm opacity-80 mb-2">受講料金</div>
                  <div className="text-4xl font-bold mb-4">{courses[activeIndex].price}</div>
                  <motion.button
                    className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    詳細を見る・お申し込み
                  </motion.button>
                </motion.div>
                
                <motion.div 
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-gray-400 text-sm">
                    📞 お問い合わせ: 080-4937-1121
                  </p>
                  <p className="text-gray-400 text-sm">
                    ✉️ info@if-juku.net
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}