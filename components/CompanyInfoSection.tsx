'use client'

import { motion } from 'framer-motion'

export default function CompanyInfoSection() {
  const companyInfo = [
    {
      title: '運営母体',
      icon: '🏢',
      content: 'if(Business)は、「子どもたちが持つ可能性を最大限に伸ばしたい」という想いを原点とするif(塾)から生まれました。私たちは、ITやAIなど自分たちが得意とする技術を駆使し、日本の企業を盛り上げることが、日本全体を元気にし、さらには子どもたちの活躍の場を増やすことにつながると信じて、日々挑戦を続けています。',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'from-blue-500/10 to-purple-500/10',
      borderColor: 'border-blue-400/20'
    },
    {
      title: '私たちの強み',
      icon: '💪',
      content: '私たちは、エンジニア、デザイナー、教育、マーケティング、ビジネスコンサルタントなど、それぞれの道で現場経験を積んだプロフェッショナル集団です。全員が本業として培ったスキルを持ち寄り、AIやICTの開発・導入・運用、クリエイティブ、教育、人材育成まで幅広く対応しています。だからこそ、課題や理想に対して「できること・できないこと」をきちんと見極め、最適な提案と着実な実行力でご支援できます。どんなご相談にも"専門家"の目線で本気で向き合いますので、安心してお任せください。',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'from-purple-500/10 to-pink-500/10',
      borderColor: 'border-purple-400/20'
    },
    {
      title: 'ビジネス展開',
      icon: '🚀',
      content: '「AIを活用してみたいけれど、何から始めればいいのか分からない」「難しそうでつい後回しにしてしまう」――そんなお悩みを持つ経営者、営業職、事務職など、さまざまな業界・職種のお客様からご相談をいただいています。私たちは、初めての一歩から成果が出るまで、現場に寄り添って具体的な道筋を一緒に描きます。AIやICTの導入・活用はもちろん、業務改善や組織づくり、売上拡大まで、どんなことでもご相談ください。"はじめの一歩"を全力でサポートするのが、if(Business)です。',
      color: 'from-green-400 to-teal-400',
      bgColor: 'from-green-500/10 to-teal-500/10',
      borderColor: 'border-green-400/20'
    },
    {
      title: '活用サービス・テクノロジー',
      icon: '🔧',
      content: 'AIやICT分野の開発・運用にあたり、OpenAI、Google Cloud、Microsoft、Anthropicなど、グローバルで信頼されるテクノロジーを積極的に活用。お客様の課題やご要望に合わせて、最適な技術基盤を柔軟に選定しています。',
      color: 'from-cyan-400 to-blue-400',
      bgColor: 'from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-400/20'
    }
  ]

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://if-juku.net/wp-content/uploads/images/16.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />
        
        {/* Floating icons */}
        {[
          { icon: '🏢', delay: 0, x: '10%', y: '20%' },
          { icon: '🌟', delay: 1, x: '85%', y: '15%' },
          { icon: '🚀', delay: 2, x: '15%', y: '80%' },
          { icon: '💡', delay: 3, x: '90%', y: '70%' },
          { icon: '🎯', delay: 4, x: '50%', y: '10%' },
          { icon: '🔧', delay: 5, x: '5%', y: '50%' }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl text-white/10"
            style={{ left: item.x, top: item.y }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative z-10">会社情報</span>
            
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
            if(Business)について
          </motion.p>
        </motion.div>

        {/* Content sections - Horizontal layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {companyInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className={`bg-gradient-to-br ${info.bgColor} backdrop-blur-lg rounded-3xl p-6 md:p-8 border ${info.borderColor} h-full flex flex-col`}>
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`text-3xl mr-4 bg-gradient-to-r ${info.color} w-12 h-12 rounded-full flex items-center justify-center`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, ease: "linear", repeat: Infinity },
                      scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{info.title}</h3>
                </div>
                <p className="text-gray-200 leading-relaxed flex-1 text-sm md:text-base">
                  {info.content}
                </p>
                
                {/* Technology logos for last section */}
                {index === 3 && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {[
                      { name: 'OpenAI', color: 'from-green-400 to-blue-400' },
                      { name: 'Google Cloud', color: 'from-blue-400 to-purple-400' },
                      { name: 'Microsoft', color: 'from-purple-400 to-pink-400' },
                      { name: 'Anthropic', color: 'from-pink-400 to-red-400' }
                    ].map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className={`bg-gradient-to-r ${tech.color} p-2 rounded-lg text-center text-white font-bold text-xs shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -3, 0]
                        }}
                        transition={{
                          duration: 2 + techIndex * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: techIndex * 0.2
                        }}
                      >
                        {tech.name}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}