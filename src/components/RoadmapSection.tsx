'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Coins, Vote, ShoppingBag, CheckCircle } from 'lucide-react';

const roadmapPhases = [
  {
    phase: "Fase 1",
    title: "Lançamento",
    quarter: "Q1 2025",
    status: "completed",
    icon: Rocket,
    features: [
      "Lançamento do ZVX Token",
      "Listagem em exchanges descentralizadas",
      "Formação da comunidade inicial",
      "Auditoria de segurança completa"
    ],
    gradient: "from-green-500 to-emerald-500"
  },
  {
    phase: "Fase 2",
    title: "Staking",
    quarter: "Q2 2025",
    status: "in_progress",
    icon: Coins,
    features: [
      "Protocolo de staking ZVX",
      "Recompensas por participação",
      "Pool de liquidez incentivada",
      "Dashboard de governança"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    phase: "Fase 3",
    title: "Governança DAO",
    quarter: "Q3 2026",
    status: "upcoming",
    icon: Vote,
    features: [
      "Sistema de votação descentralizada",
      "Propostas da comunidade",
      "Tesouro DAO",
      "Delegação de votos"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    phase: "Fase 4",
    title: "Marketplace",
    quarter: "Q4 2026",
    status: "upcoming",
    icon: ShoppingBag,
    features: [
      "Marketplace de automações",
      "Integração com IA",
      "NFTs utilitários",
      "Expansão multi-chain"
    ],
    gradient: "from-orange-500 to-red-500"
  }
];

export default function RoadmapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 border-green-400';
      case 'in_progress': return 'text-blue-400 border-blue-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') {
      return <CheckCircle className="w-6 h-6 text-green-400" />;
    }
    return <div className={`w-4 h-4 rounded-full border-2 ${getStatusColor(status)}`} />;
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Roadmap
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Nossa jornada rumo à revolução da automação descentralizada, dividida em fases estratégicas
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                variants={itemVariants}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.gradient} p-3 group-hover:scale-110 transition-transform`}>
                        <phase.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">{phase.phase}</div>
                        <div className="text-xl font-bold text-white">{phase.title}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                      <span className="text-cyan-400 font-semibold">{phase.quarter}</span>
                      <span className="text-gray-500">•</span>
                      <span className={`text-sm font-medium capitalize ${getStatusColor(phase.status).split(' ')[0]}`}>
                        {phase.status === 'in_progress' ? 'Em andamento' : 
                         phase.status === 'completed' ? 'Concluído' : 'Em breve'}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full border-4 ${getStatusColor(phase.status)} bg-gray-900 flex items-center justify-center`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {getStatusIcon(phase.status)}
                  </motion.div>
                  
                  {/* Pulse effect for in-progress */}
                  {phase.status === 'in_progress' && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-blue-400"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 lg:block hidden" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Acompanhe Nossa Evolução
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cada fase do nosso roadmap representa um marco importante na construção do futuro da automação descentralizada.
              Junte-se à nossa comunidade e seja parte desta revolução.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar na Comunidade
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

