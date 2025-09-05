'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Coins, Vote, Gift, ArrowRight } from 'lucide-react';

const utilities = [
  {
    icon: Zap,
    title: "Pagamentos de Automações",
    description: "Use ZVX para pagar por automações inteligentes, bots e serviços descentralizados",
    features: ["Pagamentos instantâneos", "Taxas reduzidas", "Integração API"],
    gradient: "from-yellow-500 to-orange-500",
    delay: 0
  },
  {
    icon: Coins,
    title: "Staking",
    description: "Faça staking dos seus tokens ZVX e ganhe recompensas passivas enquanto fortalece a rede",
    features: ["APY competitivo", "Recompensas diárias", "Flexibilidade total"],
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    icon: Vote,
    title: "Governança",
    description: "Participe das decisões importantes do protocolo através do sistema de votação descentralizada",
    features: ["Poder de voto", "Propostas da comunidade", "Transparência total"],
    gradient: "from-purple-500 to-pink-500",
    delay: 0.4
  },
  {
    icon: Gift,
    title: "Cashback",
    description: "Receba cashback em ZVX ao utilizar serviços parceiros e automações da plataforma",
    features: ["Até 5% de cashback", "Recompensas automáticas", "Parceiros premium"],
    gradient: "from-green-500 to-emerald-500",
    delay: 0.6
  }
];

export default function UtilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/30 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            Utilidades do ZVX
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra as múltiplas funcionalidades que tornam o ZVX Token essencial no ecossistema de automação
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {utilities.map((utility, index) => (
            <motion.div
              key={utility.title}
              variants={itemVariants}
              custom={utility.delay}
              className="group relative h-full"
            >
              <div className="relative p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 h-full overflow-hidden group-hover:scale-[1.02]">
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${utility.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                  animate={{
                    background: [
                      `linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent)`,
                      `linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
                      `linear-gradient(135deg, transparent, rgba(6, 182, 212, 0.1), transparent)`,
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${utility.gradient} p-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10,
                      rotate: { duration: 0.5 }
                    }}
                  >
                    <utility.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">
                    {utility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {utility.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {utility.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: utility.delay + (featureIndex * 0.1) }}
                      >
                        <motion.div 
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${utility.gradient}`}
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`group/btn w-full py-3 px-6 rounded-xl bg-gradient-to-r ${utility.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Floating particles */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  <motion.div
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <motion.div
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{
                      y: [10, -10, 10],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Começar?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Junte-se ao futuro da automação descentralizada e comece a utilizar as funcionalidades do ZVX Token
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-semibold text-white glow-hover flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Coins className="w-5 h-5" />
              Obter ZVX Token
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

