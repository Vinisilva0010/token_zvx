'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { Users, Cog, CreditCard } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Governança",
    description: "Participe das decisões importantes do ecossistema ZVX através de votação descentralizada",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: CreditCard,
    title: "Cashback",
    description: "Receba recompensas em ZVX por utilizar serviços e automações da plataforma",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Cog,
    title: "Automação",
    description: "Utilize ZVX para pagar e otimizar automações inteligentes em diversos setores",
    gradient: "from-cyan-500 to-blue-500"
  }
];

function AboutSection() {
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

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Sobre o ZVX Token
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            O ZVX Token é a espinha dorsal de um ecossistema inovador voltado para automação descentralizada. Criado para integrar empresas, desenvolvedores e usuários em uma rede inteligente e autônoma, o ZVX oferece recursos exclusivos que simplificam processos, reduzem custos e elevam a eficiência. Com ele, a automação deixa de ser complexa e se torna acessível, segura e escalável.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${benefit.gradient} p-4 mx-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <benefit.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent)`,
                  }}
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent, rgba(68, 71, 252, 0.1), transparent)',
                      'linear-gradient(90deg, transparent, rgba(124, 70, 250, 0.1), transparent)',
                      'linear-gradient(135deg, transparent, rgba(6, 162, 190, 0.1), transparent)',
                      'linear-gradient(45deg, transparent, rgba(83, 86, 246, 0.1), transparent)',
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "1B", label: "Total Supply", suffix: "" },
            { value: "50", label: "Comunidade", suffix: "%" },
            { value: "100", label: "Descentralizado", suffix: "%" },
            { value: "24/7", label: "Automação", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
