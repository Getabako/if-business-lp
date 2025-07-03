'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  icon: string
  category: string
}

const faqItems: FAQItem[] = [
  {
    question: '業務効率化を導入すると、どんな効果が期待できますか？',
    answer: '業務効率化を進めると、毎日の単純作業にかかる時間が大幅に減り、本当に力を入れたい業務に時間を使えるようになります。たとえば、書類作成や問い合わせ対応が自動化され、スタッフの負担や残業も減少。人手不足に悩む企業でも、少人数でより多くの仕事をこなせる体制が整い、人材の採用や定着の不安も軽減できます。',
    icon: '📈',
    category: '効果・成果'
  },
  {
    question: '料金プランについて教えてください。',
    answer: 'はい、サービスは毎月55,000円からご利用いただけます。この中に「経営」「人材育成」「マーケティング」「業務効率化」など、会社やお店の運営に必要なサポートがすべて含まれています。さらに、ICTやAIを使った仕組みづくり・システム開発まで、1つの窓口ですべてまとめてご相談・ご依頼いただけます。ITが苦手な方も、最初から最後までサポートしますのでご安心ください。',
    icon: '💰',
    category: '料金・プラン'
  },
  {
    question: 'ITの専門知識がなくても大丈夫でしょうか？',
    answer: 'ご安心ください。ITやAIが初めての方でも問題ありません。導入から運用まで一貫してサポートし、操作が分からないときもすぐご相談いただけます。また、ご希望があれば「事業内容やご要望にぴったり合ったパソコンの組み立て」から一緒にお手伝いすることも可能です。AIやICTの世界を、分かりやすく・楽しく一歩ずつご案内いたしますので、どうぞ安心してお任せください。',
    icon: '🤝',
    category: 'サポート'
  },
  {
    question: 'セキュリティはどうなっていますか？',
    answer: 'すべてのシステムやデータは、暗号化やアクセス制限、監査などの仕組みでしっかり守っています。法律やガイドラインに沿った安全な運用を徹底し、お客様の大切な情報が漏れたり、不正に使われたりしないように万全の対策をしています。セキュリティ対策についてのご相談やご希望にも柔軟に対応しますので、ご安心ください。',
    icon: '🔒',
    category: 'セキュリティ'
  },
  {
    question: '講座はどんな形式で受けられますか？',
    answer: '全講座ともオンライン対応が可能です。ライブ配信でその場で質問しながら受講したり、後日ご都合の良いタイミングで録画を視聴したりと、自由なスタイルで学べます。ご自宅や職場から気軽にご参加いただけますので、地方や遠方の方も安心してご利用ください。',
    icon: '🎓',
    category: '講座・受講'
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://service.if-juku.net/images/15.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full" />
        
        {/* Floating question marks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-blue-300/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            ❓
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative z-10">よくあるご質問</span>
            
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            お客様からよくいただくご質問にお答えします
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card background with holographic effect */}
              <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                openIndex === index 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20' 
                  : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15'
              }`}>
                
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                  animate={{
                    x: hoveredIndex === index ? ['-100%', '100%'] : '-100%'
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                />

                {/* Question button */}
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 md:px-8 py-6 text-left transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0">
                      {/* Category badge */}
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 px-2 md:px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg flex-shrink-0"
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.category}
                      </motion.div>
                      
                      {/* Icon */}
                      <motion.div
                        className="text-2xl md:text-3xl flex-shrink-0"
                        animate={{
                          rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                          scale: hoveredIndex === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      
                      {/* Question text */}
                      <h3 className="text-sm md:text-lg lg:text-xl font-bold text-white group-hover:text-blue-300 transition-colors flex-1 min-w-0 pr-2">
                        Q{index + 1}: {item.question}
                      </h3>
                    </div>
                    
                    {/* Expand/collapse button */}
                    <motion.div
                      animate={{ 
                        rotate: openIndex === index ? 180 : 0,
                        scale: hoveredIndex === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="h-4 md:h-5 w-4 md:w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </motion.button>

                {/* Answer section */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-4 md:px-8 pb-8"
                      >
                        {/* Answer content */}
                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-4 md:p-6 border border-blue-400/20">
                          <div className="flex items-start space-x-3 md:space-x-4">
                            <motion.div
                              className="text-2xl bg-gradient-to-r from-green-400 to-cyan-400 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-lg font-bold flex-shrink-0"
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{
                                rotate: { duration: 2, ease: "linear" },
                                scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
                              }}
                            >
                              A
                            </motion.div>
                            <motion.p
                              className="text-gray-200 leading-relaxed flex-1 text-sm md:text-base"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {item.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glowing corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 blur-sm" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60 blur-sm" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60 blur-sm" />
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-pink-400 rounded-full opacity-60 blur-sm" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}