'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "O que é o ZVX Token?",
    answer: "O ZVX Token é a moeda nativa de um ecossistema revolucionário focado em automação descentralizada. Ele conecta empresas, desenvolvedores e usuários em uma rede autônoma, oferecendo funcionalidades como governança, staking, cashback e pagamentos para automações inteligentes."
  },
  {
    question: "Como posso comprar ZVX Token?",
    answer: "O ZVX Token estará disponível através de exchanges descentralizadas (DEX) e centralizadas (CEX) após o lançamento oficial. Também ofereceremos pools de liquidez com incentivos para os primeiros participantes. Mantenha-se atualizado através de nossos canais oficiais para não perder o lançamento."
  },
  {
    question: "Qual blockchain o ZVX utiliza?",
    answer: "O ZVX Token é construído na blockchain Ethereum como um token ERC-20, garantindo compatibilidade total com carteiras, exchanges e protocolos DeFi existentes. Planejamos expansão multi-chain no futuro para outras redes como Polygon, Binance Smart Chain e Arbitrum."
  },
  {
    question: "Como funciona o sistema de staking?",
    answer: "O staking de ZVX permite que você bloqueie seus tokens por um período determinado em troca de recompensas passivas. Quanto maior o período de staking, maiores as recompensas. Além disso, tokens em staking participam da governança do protocolo, dando poder de voto nas decisões importantes."
  },
  {
    question: "Qual é o roadmap de desenvolvimento?",
    answer: "Nosso roadmap está dividido em 4 fases principais: Fase 1 (Q1 2024) - Lançamento do token e listagem; Fase 2 (Q2 2024) - Implementação do staking; Fase 3 (Q3 2024) - Sistema de governança DAO; Fase 4 (Q4 2024) - Marketplace de automações e expansão multi-chain."
  }
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800/30 to-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <HelpCircle className="w-12 h-12 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FAQ
            </h2>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Respostas para as perguntas mais frequentes sobre o ZVX Token e nosso ecossistema
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
                <motion.button
                  className="w-full p-6 text-left flex items-center justify-between group-hover:bg-gray-700/20 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-gray-300 leading-relaxed border-t border-gray-700/50 pt-4"
                        >
                          {faq.answer}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated border effect */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
                    }}
                    animate={{
                      background: [
                        'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
                        'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)',
                        'linear-gradient(135deg, transparent, rgba(6, 182, 212, 0.2), transparent)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Nossa equipe está sempre disponível para esclarecer suas questões sobre o ZVX Token
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full font-semibold text-white glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entrar em Contato
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-gray-600 rounded-full font-semibold text-white hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Documentação Técnica
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

