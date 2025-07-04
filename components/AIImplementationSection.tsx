'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface CaseStudy {
  company: string
  industry: string
  before: string
  solution: string
  after: string
  icon: string
  color: string
}

const caseStudies: CaseStudy[] = [
  {
    company: '製造業A社',
    industry: '製造業',
    before: 'マニュアルや社内書類の検索・作成に毎回時間がかかり、どの業務をAI化すればよいか分からず手が止まっていた。',
    solution: 'まず社内業務を一覧にし、「この作業は繰り返しが多い」「検索で迷う」といったポイントを整理。AIツールで自動文書作成と業務マニュアルのAI検索システムを導入し、担当者が迷わず利用できるように簡単な操作マニュアルも作成した。',
    after: '社員が迷わず書類を探せるようになり、マニュアルや書類作成もAIが自動で下書きを作ってくれるため、事務負担が大きく軽減された。',
    icon: '🏭',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    company: '小売業B社',
    industry: '小売業',
    before: '問い合わせが多く、電話やメール対応に多くの時間を取られ、スタッフが接客や商品管理に十分な時間を割けていなかった。',
    solution: 'AIチャットボットを導入し、お客様からよくある質問を自動で分類・案内する仕組みに変更。担当者はチャット履歴を確認するだけで、複雑な問い合わせだけに集中できるようにした。',
    after: '問い合わせ対応の手間が大幅に減り、スタッフは接客や本来の業務に集中。お客様への案内も早くなり、業務全体の流れがスムーズになった。',
    icon: '🏪',
    color: 'from-green-500 to-emerald-500'
  },
  {
    company: '歯科医院C院',
    industry: '歯科医院',
    before: '備品の在庫が気づかないうちに切れてしまったり、求人の応募管理に時間がかかり、本来の診療や事務に支障が出ていた。',
    solution: '在庫情報をAIに入力し、消耗品が少なくなった時に自動でアラートが出る仕組みを導入。求人もAIが応募者データをまとめて一覧に整理し、必要な人材像と照合できるようにした。',
    after: '備品の補充漏れや求人対応の抜け漏れがなくなり、スタッフは事前に準備や採用判断ができるようになった。本来の診療や患者対応に集中できるようになった。',
    icon: '🦷',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function AIImplementationSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/14.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI導入実績
          </motion.h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center mb-12 space-y-4 md:space-y-0 md:space-x-4"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm border-2 ${
                activeTab === index
                  ? `bg-gradient-to-r ${caseStudy.color} text-white border-transparent shadow-lg shadow-cyan-500/25`
                  : 'bg-white/5 text-gray-300 border-gray-600 hover:border-gray-400 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl mr-3">{caseStudy.icon}</span>
              {caseStudy.company}
              
              {/* Active indicator */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/50"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Company Header */}
              <div className="text-center mb-12">
                <motion.div
                  className={`text-6xl mb-4 bg-gradient-to-r ${caseStudies[activeTab].color} bg-clip-text text-transparent inline-block`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  {caseStudies[activeTab].icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {caseStudies[activeTab].company}
                </h3>
                <p className="text-lg text-gray-300">
                  業種: {caseStudies[activeTab].industry}
                </p>
              </div>

              {/* Three Column Layout */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* BEFORE */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <div className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-red-500 h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">❌</span>
                      <h4 className="text-xl font-bold text-red-400">BEFORE</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {caseStudies[activeTab].before}
                    </p>
                  </div>
                </motion.div>

                {/* 手立て */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-yellow-500 h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">🔧</span>
                      <h4 className="text-xl font-bold text-yellow-400">手立て</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {caseStudies[activeTab].solution}
                    </p>
                  </div>
                  
                  {/* Arrow indicators for desktop */}
                  <div className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2">
                    <motion.div
                      className="text-2xl text-yellow-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <motion.div
                      className="text-2xl text-green-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>

                {/* AFTER */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <div className="bg-green-500/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-green-500 h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">✅</span>
                      <h4 className="text-xl font-bold text-green-400">AFTER</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {caseStudies[activeTab].after}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Mobile arrows */}
              <div className="md:hidden flex justify-center items-center my-6 space-x-4">
                <motion.div
                  className="text-3xl text-yellow-400"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓
                </motion.div>
                <motion.div
                  className="text-3xl text-green-400"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}