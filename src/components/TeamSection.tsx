'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: "Vinicius Da silva Pontual",
    role: "CEO ",
    bio: "Bacharel em Ciencias da computação, especialista em Automações ",
    image: "#",
    gradient: "from-blue-500 to-cyan-500",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "nome",
    role: "cargo",
    bio: "bio",
    image: "#",
    gradient: "from-purple-500 to-pink-500",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "nome3",
    role: "cargo",
    bio: "bio",
    image: "#",
    gradient: "from-green-500 to-emerald-500",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  }
];

export default function TeamSection() {
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Nossa Equipe
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Conheça os visionários por trás da revolução ZVX - experts em blockchain, automação e inovação tecnológica
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden group-hover:scale-105">
                {/* Background glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Image container */}
                <div className="relative p-8 pb-0">
                  <motion.div
                    className="relative mx-auto w-32 h-32 mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Animated border */}
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} p-1`}
                      animate={{
                        rotate: 360
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-gray-900"></div>
                    </motion.div>
                    
                    {/* Profile image */}
                    <div className="absolute inset-1 rounded-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-60"
                      animate={{
                        y: [-5, 5, -5],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full opacity-40"
                      animate={{
                        y: [5, -5, 5],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8 pt-0 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">
                    {member.name}
                  </h3>
                  
                  <div className={`text-lg font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex justify-center gap-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = platform === 'github' ? Github : 
                                           platform === 'linkedin' ? Linkedin : Twitter;
                      
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${member.gradient} p-2 text-white hover:scale-110 transition-transform`}
                          whileHover={{ 
                            scale: 1.2,
                            boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <IconComponent className="w-full h-full" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join team CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Junte-se ao Nosso Time
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estamos sempre em busca de talentos excepcionais para revolucionar o futuro da automação descentralizada.
              Faça parte da equipe que está construindo o amanhã.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white glow-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Vagas Abertas
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-gray-600 rounded-full font-semibold text-white hover:bg-gray-800/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Currículo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
