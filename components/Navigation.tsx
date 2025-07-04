'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SubMenuItem {
  id: string
  label: string
}

interface NavItem {
  id: string
  label: string
  submenu?: SubMenuItem[]
}

const navItems: NavItem[] = [
  { id: 'services', label: 'サービス' },
  { 
    id: 'ai-consulting', 
    label: 'AI相談',
    submenu: [
      { id: 'ai-advisor', label: 'AI顧問' },
      { id: 'ai-training', label: 'AI人材育成' },
      { id: 'development', label: 'AI開発支援' }
    ]
  },
  { 
    id: 'ict-support', 
    label: 'ICTサポート',
    submenu: [
      { id: 'ict', label: 'ICT開発' },
      { id: 'marketing', label: 'AIマーケティング' },
      { id: 'takumi', label: '匠工房' },
      { id: 'inokura', label: 'イノクラ' }
    ]
  },
  { id: 'courses', label: 'AI講座' },
  { id: 'implementation', label: '導入実績' },
  { id: 'faq', label: 'FAQ' },
  { id: 'company', label: '会社情報' },
  { id: 'contact', label: 'お問い合わせ' }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('services')
  const [scrollY, setScrollY] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // アクティブセクションの検出
      const sections = navItems.flatMap(item => {
        if (item.submenu) {
          return item.submenu.map(sub => sub.id)
        }
        return [item.id]
      }).map(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: sectionId,
            top: rect.top,
            height: rect.height
          }
        }
        return null
      }).filter(Boolean)

      const currentSection = sections.find(section => {
        return section && section.top <= 100 && section.top + section.height > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
    setHoveredItem(null)
  }

  const isItemActive = (item: NavItem) => {
    if (item.submenu) {
      return item.submenu.some(sub => sub.id === activeSection)
    }
    return item.id === activeSection
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('services')}
              style={{ cursor: 'pointer' }}
            >
              <Image
                src="/images/-1.png"
                alt="if(Business) ロゴ"
                width={50}
                height={50}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.button
                    onClick={() => item.submenu ? null : scrollToSection(item.id)}
                    className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white group"
                    whileHover="hover"
                    initial="initial"
                    animate={isItemActive(item) ? "active" : "initial"}
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05 },
                      active: { scale: 1.02 }
                    }}
                  >
                    {/* Liquid blob background */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      variants={{
                        initial: { 
                          background: "transparent",
                          borderRadius: "12px"
                        },
                        hover: {
                          background: "linear-gradient(45deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2))",
                          borderRadius: ["12px", "20px", "8px", "16px", "12px"],
                          transition: {
                            borderRadius: {
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }
                          }
                        },
                        active: {
                          background: "linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))",
                          borderRadius: "12px"
                        }
                      }}
                    />

                    {/* Particles */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      variants={{
                        hover: {
                          opacity: 1
                        },
                        initial: {
                          opacity: 0
                        }
                      }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + (i % 2) * 40}%`
                          }}
                          variants={{
                            hover: {
                              scale: [0, 1, 0],
                              y: [-10, -20, -10],
                              opacity: [0, 1, 0],
                              transition: {
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 0.5
                              }
                            }
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Text content */}
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>{item.label}</span>
                      {item.submenu && (
                        <motion.span
                          className="text-xs"
                          animate={{ rotate: hoveredItem === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      )}
                    </span>

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      variants={{
                        hover: {
                          boxShadow: [
                            "0 0 0 0 rgba(34, 197, 94, 0.4)",
                            "0 0 0 10px rgba(34, 197, 94, 0)",
                            "0 0 0 0 rgba(34, 197, 94, 0)"
                          ],
                          transition: {
                            duration: 1.5,
                            repeat: Infinity
                          }
                        }
                      }}
                    />
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-lg border border-gray-700 rounded-xl shadow-2xl overflow-hidden"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.button
                              key={subItem.id}
                              onClick={() => scrollToSection(subItem.id)}
                              className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <span>{subItem.label}</span>
                              {activeSection === subItem.id && (
                                <motion.div
                                  className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                                  layoutId="activeDropdown"
                                />
                              )}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-6 h-6 relative"
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: {
                    rotate: 180
                  },
                  closed: {
                    rotate: 0
                  }
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top line */}
                <motion.span
                  className="absolute h-0.5 w-6 bg-white left-0 origin-center"
                  variants={{
                    open: {
                      rotate: 45,
                      y: 0,
                      top: "50%"
                    },
                    closed: {
                      rotate: 0,
                      y: 0,
                      top: "25%"
                    }
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Middle line */}
                <motion.span
                  className="absolute h-0.5 w-6 bg-white left-0 top-1/2 transform -translate-y-1/2"
                  variants={{
                    open: {
                      opacity: 0,
                      scale: 0
                    },
                    closed: {
                      opacity: 1,
                      scale: 1
                    }
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Bottom line */}
                <motion.span
                  className="absolute h-0.5 w-6 bg-white left-0 origin-center"
                  variants={{
                    open: {
                      rotate: -45,
                      y: 0,
                      bottom: "50%"
                    },
                    closed: {
                      rotate: 0,
                      y: 0,
                      bottom: "25%"
                    }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="relative z-50 flex flex-col items-center justify-start min-h-screen p-6 pt-24 overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full max-w-md space-y-3">
                {navItems.map((item, index) => (
                  <div key={item.id} className="w-full">
                    <motion.button
                      onClick={() => {
                        if (item.submenu) {
                          setExpandedMobileItem(
                            expandedMobileItem === item.id ? null : item.id
                          )
                        } else {
                          scrollToSection(item.id)
                        }
                      }}
                      className="relative w-full p-4 bg-white/10 backdrop-blur border border-gray-700 rounded-xl text-white font-medium hover:bg-white/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span>{item.label}</span>
                        </div>
                        {item.submenu && (
                          <motion.span
                            className="text-sm"
                            animate={{ rotate: expandedMobileItem === item.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▼
                          </motion.span>
                        )}
                      </div>
                      
                      {/* Active indicator */}
                      {isItemActive(item) && (
                        <motion.div
                          layoutId="mobileActive"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border-2 border-cyan-400/50"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>

                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <AnimatePresence>
                        {expandedMobileItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-4 space-y-2 overflow-hidden"
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.button
                                key={subItem.id}
                                onClick={() => scrollToSection(subItem.id)}
                                className="relative w-full p-3 bg-white/5 backdrop-blur border border-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-sm">{subItem.label}</span>
                                </div>
                                
                                {activeSection === subItem.id && (
                                  <motion.div
                                    layoutId="mobileSubActive"
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-400/50"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                  />
                                )}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 