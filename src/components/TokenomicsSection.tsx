'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const tokenomicsData = [
  { name: 'Comunidade', value: 50, color: '#6366f1', description: 'Distribuição para a comunidade através de airdrops, staking e recompensas' },
  { name: 'Desenvolvimento', value: 20, color: '#8b5cf6', description: 'Financiamento do desenvolvimento contínuo da plataforma' },
  { name: 'Parcerias', value: 15, color: '#06b6d4', description: 'Estabelecimento de parcerias estratégicas e integrações' },
  { name: 'Reserva', value: 10, color: '#10b981', description: 'Reserva de emergência para estabilidade do ecossistema' },
  { name: 'Marketing', value: 5, color: '#f59e0b', description: 'Campanhas de marketing e crescimento da comunidade' }
];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-gray-600 shadow-xl">
        <p className="font-semibold text-white mb-2">{data.name}</p>
        <p className="text-cyan-400 text-lg font-bold">{data.value}%</p>
        <p className="text-gray-300 text-sm mt-2 max-w-xs">{data.description}</p>
      </div>
    );
  }
  return null;
};

export default function TokenomicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const chartVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Tokenomics
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Distribuição estratégica e sustentável do ZVX Token para garantir crescimento e estabilidade do ecossistema
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div 
            variants={chartVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={150}
                    paddingAngle={2}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {tokenomicsData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke={activeIndex === index ? '#ffffff' : 'none'}
                        strokeWidth={activeIndex === index ? 2 : 0}
                        style={{
                          filter: activeIndex === index ? 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' : 'none',
                          transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                          transformOrigin: 'center',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1B</div>
                  <div className="text-sm text-gray-400">Total Supply</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legend and details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className={`p-6 rounded-xl border transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gray-700/50 border-gray-500 shadow-lg' 
                    : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600'
                }`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <span className={`ml-auto text-2xl font-bold transition-colors ${
                      activeIndex === index ? 'text-cyan-400' : 'text-purple-400'
                    }`}>
                      {item.value}%
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-8">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            { title: "Blockchain", value: "Ethereum", description: "Rede principal segura e descentralizada" },
            { title: "Padrão", value: "ERC-20", description: "Compatibilidade total com carteiras e exchanges" },
            { title: "Queima", value: "Deflacionário", description: "Mecanismo de queima para valorização" }
          ].map((info, index) => (
            <motion.div
              key={info.title}
              variants={itemVariants}
              className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-2">{info.title}</h4>
              <div className="text-2xl font-bold text-white mb-2">{info.value}</div>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
