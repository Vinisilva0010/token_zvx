'use client';

import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Github, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/zvxtoken',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      url: 'https://t.me/zvxtoken',
      color: 'hover:text-cyan-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/zvxtoken',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@zvxtoken.com',
      color: 'hover:text-purple-400'
    }
  ];

  const footerLinks = [
    {
      title: 'Produto',
      links: [
        { name: 'Whitepaper', url: '#' },
        { name: 'Tokenomics', url: '#tokenomics' },
        { name: 'Roadmap', url: '#roadmap' },
        { name: 'Documentação', url: '#' }
      ]
    },
    {
      title: 'Comunidade',
      links: [
        { name: 'Discord', url: '#' },
        { name: 'Reddit', url: '#' },
        { name: 'Embaixadores', url: '#' },
        { name: 'Blog', url: '#' }
      ]
    },
    {
      title: 'Desenvolvedores',
      links: [
        { name: 'API Docs', url: '#' },
        { name: 'SDK', url: '#' },
        { name: 'GitHub', url: '#' },
        { name: 'Bug Bounty', url: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Termos de Uso', url: '#' },
        { name: 'Política de Privacidade', url: '#' },
        { name: 'Disclaimer', url: '#' },
        { name: 'Compliance', url: '#' }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 to-gray-800/50 border-t border-gray-700/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                ZVX Token
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolucionando a automação descentralizada com tecnologia blockchain de ponta. 
                Junte-se ao futuro dos negócios autônomos.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:border-gray-600 hover:bg-gray-700/50`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <motion.div
          className="border-t border-gray-700/50 pt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Fique por dentro das novidades
            </h4>
            <p className="text-gray-400 mb-6">
              Receba atualizações sobre o desenvolvimento do ZVX Token
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Seu email..."
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm">
            © 2024 ZVX Token. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Termos
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacidade
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          className="mt-8 p-4 bg-yellow-600/10 border border-yellow-600/20 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-200 text-sm text-center">
            ⚠️ <strong>Aviso Importante:</strong> Criptomoedas são investimentos de alto risco. 
            O valor dos tokens pode variar significativamente. Invista apenas o que você pode perder. 
            Este não é um conselho financeiro.
          </p>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse delay-2000"></div>
    </footer>
  );
}

