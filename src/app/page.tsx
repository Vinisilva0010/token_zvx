'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import UtilitiesSection from '@/components/UtilitiesSection';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  // State for client-side only generated styles to prevent hydration mismatch
  const [heroParticles, setHeroParticles] = useState<React.CSSProperties[]>([]);
  const [scanLineStyle, setScanLineStyle] = useState<React.CSSProperties>({});
  const [tokenomicsHexagons, setTokenomicsHexagons] = useState<React.CSSProperties[]>([]);
  const [utilitiesBinary, setUtilitiesBinary] = useState<{ style: React.CSSProperties; char: string }[]>([]);

const backgroundImages = {
  hero: '/image/zvx1.png',           
  about: '/image/zvx2.png',   
  tokenomics: '/image/zvx3.png' ,
  Roadmap: '/image/zvx1.png',
  Utilities: '/image/zvx1.png',
};
  

  // Generate dynamic/random styles only on the client-side to avoid hydration mismatch
  useEffect(() => {
    // Hero particles
    const generateHeroParticles = (count: number) =>
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }));

    setHeroParticles(generateHeroParticles(15));

    // Tokenomics hexagons
    const generateTokenomicsHexagons = (count: number) =>
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }));
    setTokenomicsHexagons(generateTokenomicsHexagons(8));

    // Utilities binary rain
    const generateUtilitiesBinary = (count: number) =>
      Array.from({ length: count }, (_, i) => ({
        char: Math.random() > 0.5 ? '1' : '0',
        style: {
          left: `${i * 7}%`,
          top: '-10%',
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 2}s`,
        },
      }));
    setUtilitiesBinary(generateUtilitiesBinary(8));

  }, []);

  // Rastrear posição do mouse para efeitos interativos
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Scan line animation usando CSS em vez de requestAnimationFrame para melhor performance
    setScanLineStyle({
      top: '50%',
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Cursor customizado que segue o mouse */}
      <div 
        className="fixed w-6 h-6 bg-cyan-400/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 12, 
          top: mousePosition.y - 12,
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)'
        }}
      />
      
      {/* Navigation */}
      <Navbar />

      

      
      {/* Hero Section - Com Imagem de Fundo e Efeitos */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Imagem de fundo com efeitos avançados */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${backgroundImages.hero})`,
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`, // Efeito parallax e zoom
            filter: `brightness(0.8) contrast(1.2) saturate(1.1) hue-rotate(${scrollY * 0.05}deg)`,
          }}
        />
        
        {/* Overlays com gradientes mágicos */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-cyan-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-indigo-900/30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-blue-900/30 animate-pulse" />
        
        {/* Efeito de brilho na imagem */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-cyan-400/20 via-transparent to-transparent animate-pulse"
          style={{
            backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
            backgroundSize: '600px 600px'
          }}
        />
        
        {/* Partículas flutuantes */}
        <div className="absolute inset-0">
          {heroParticles.map((style, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={style}
            />
          ))}
        </div>
        
        {/* Grid animado */}
        <div className="absolute inset-0 bg-grid-cyan-500/[0.05] bg-[size:50px_50px] animate-pulse" />
        
        {/* Efeito de scan line */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-cyan-400/50" style={{
            ...scanLineStyle,
            animation: 'scan 3s linear infinite'
          }} />
        </div>
        
        <div className="relative z-10">
          <HeroSection />
        </div>
      </section>
      
      {/* About Section - Com Imagem de Fundo e Efeitos Neon Glitch */}
      <section 
        id="about" 
        className="relative min-h-screen overflow-hidden"
      >
        {/* Imagem de fundo com efeitos neon */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages.about})`,
            backgroundAttachment: 'fixed',
            filter: `hue-rotate(${120 + scrollY * 0.08}deg) saturate(1.4) contrast(1.3) brightness(0.7)`,
            transform: `scale(${1.05 + scrollY * 0.0001}) rotate(${scrollY * 0.02}deg)`,
          }}
        />
        
        {/* Overlays com efeitos neon cyberpunk */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-cyan-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-indigo-900/30" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-blue-900/30 animate-pulse" />
        
        {/* Efeito de ondulação na imagem */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-gradient-radial from-cyan-400/10 to-transparent animate-ping"
            style={{
              backgroundSize: '200px 200px',
              backgroundPosition: `${mousePosition.x - 100}px ${mousePosition.y - 100}px`,
              animationDuration: '2s'
            }}
          />
        </div>
        
        {/* Linhas neon animadas */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Efeito glitch */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 mix-blend-multiply animate-pulse" />
        
        <div className="relative z-10 backdrop-blur-[0.5px]">
          <AboutSection />
        </div>
      </section>
      
     {/* Tokenomics Section - Com Imagem de Fundo e Efeito Holográfico */}
      <section 
        id="tokenomics" 
        className="relative min-h-screen overflow-hidden"
      >
        {/* Imagem de fundo com efeitos holográficos */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages.tokenomics})`,
            filter: `brightness(0.8) saturate(1.3) contrast(1.2) hue-rotate(${240 + scrollY * 0.06}deg)`,
            transform: `scale(${1.1 + scrollY * 0.0002}) rotate(${scrollY * 0.015}deg)`,
            backgroundPosition: `${50 + Math.sin(scrollY * 0.01) * 2}% ${50 + Math.cos(scrollY * 0.01) * 2}%`,
          }}
        />
        
        {/* Overlays holográficos cyberpunk - roxo e azul suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-blue-600/35 to-cyan-500/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-blue-800/25" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400/15 via-transparent to-violet-600/20 animate-pulse" />
        
        {/* Efeito de cristal/prisma cyberpunk */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-conic from-violet-400/12 via-transparent to-cyan-400/12 animate-pulse" style={{
            backgroundPosition: 'center',
            animationDuration: '4s'
          }} />
        </div>
        
        {/* Ondas holográficas cyberpunk */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-conic from-violet-400/15 via-blue-400/15 to-cyan-400/15 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        
        {/* Hexágonos flutuantes cyberpunk */}
        <div className="absolute inset-0">
          {tokenomicsHexagons.map((style, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 border border-cyan-400/35 rotate-45 animate-bounce shadow-lg shadow-cyan-400/20"
              style={style}
            />
          ))}
        </div>
        
        {/* Efeito de energia pulsante cyberpunk */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-radial from-violet-400/15 via-transparent to-transparent animate-pulse" style={{
            animationDuration: '3s'
          }} />
        </div>
        
        {/* Linhas neon cyberpunk adicionais */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" />
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-violet-400/50 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="relative z-10 backdrop-blur-[0.5px]">
          <TokenomicsSection />
        </div>
      </section>
      
      {/* Roadmap Section - Efeito Circuito Digital */}
      <section 
        id="roadmap" 
        className="relative min-h-screen overflow-hidden"
      >
        {/* Imagem de fundo com efeitos digitais */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages.Roadmap})`,
            filter: `brightness(0.5) saturate(1.2) contrast(1.6) hue-rotate(${180 + scrollY * 0.04}deg)`,
            transform: `scale(${1.02 + scrollY * 0.0001})`,
            backgroundBlendMode: 'multiply',
          }}
        />
        
        {/* Overlays com efeitos de circuito */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-blue-900/70 to-indigo-900/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Circuitos animados */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M 0 50 L 50 50 L 50 0" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400 animate-pulse" />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-blue-400 animate-ping" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
        
        {/* Pulsos de dados - reduzido para melhor performance */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <RoadmapSection />
        </div>
      </section>
      
      {/* Utilities Section - Efeito Cyberpunk Matriz */}
      <section 
        id="utilities" 
        className="relative min-h-screen overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages.Utilities})`,
            filter: `brightness(0.6) saturate(1.3) contrast(1.5) hue-rotate(${280 + scrollY * 0.07}deg)`,
            transform: `scale(${1.03 + scrollY * 0.0002}) rotate(${scrollY * 0.008}deg)`,
            backgroundPosition: `center ${50 + Math.sin(scrollY * 0.005) * 5}%`,
          }}
        />
        
        {/* Overlays com efeitos matrix/cyberpunk restaurados */}
        
        
        {/* Scanlines restauradas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent animate-pulse" style={{ backgroundSize: '100% 4px' }} />
        
        {/* Efeito CRT restaurado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent animate-pulse" />
        
        {/* Código binário chovendo */}
        <div className="absolute inset-0 overflow-hidden">
          {utilitiesBinary.map((item, i) => (
            <div
              key={i}
              className="absolute text-green-400/30 font-mono text-xs animate-bounce"
              style={item.style}
            >
              {item.char}
            </div>
          ))}
        </div>
        
        <div className="relative z-10">
          <UtilitiesSection />
        </div>
      </section>
      
      {/* Team Section - Efeito DNA/Helix Biológico */}
      <section 
        id="team" 
        className="relative min-h-screen overflow-hidden"
      >
        {/* Imagem de fundo com efeitos biológicos */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages.tokenomics})`,
            filter: `brightness(0.6) saturate(1.3) contrast(1.5) hue-rotate(${280 + scrollY * 0.07}deg)`,
            transform: `scale(${1.03 + scrollY * 0.0002}) rotate(${scrollY * 0.008}deg)`,
            backgroundPosition: `center ${50 + Math.sin(scrollY * 0.005) * 5}%`,
          }}
        />
        
        {/* Overlays com efeitos orgânicos */}
        <div className="absolute inset-0 bg-gradient-to-tl from-violet-900/80 via-purple-900/70 to-fuchsia-900/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/25 via-purple-500/20 to-fuchsia-500/25 mix-blend-color-dodge animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute inset-0 bg-gradient-radial from-violet-400/15 via-transparent to-fuchsia-400/15 animate-pulse" style={{ animationDuration: '5s' }} />
        {/* Helix DNA */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-violet-400/50 to-fuchsia-400/50 animate-pulse transform -translate-x-1/2" />
          
          {/* Espirais - reduzido para melhor performance */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 border-2 border-violet-400/30 rounded-full animate-spin"
              style={{
                left: `${50 + Math.sin(i * 0.8) * 25}%`,
                top: `${i * 12}%`,
                animationDuration: `4s`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10">
          <TeamSection />
        </div>
      </section>
      
      {/* FAQ Section - Efeito Quantum Dimensional */}
      <section 
        id="faq" 
        className="relative min-h-screen overflow-hidden"
      >
        {/* Imagem de fundo com efeitos quânticos */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImages.tokenomics})`,
            filter: `brightness(0.3) saturate(0.8) contrast(2) hue-rotate(${60 + scrollY * 0.03}deg)`,
            transform: `scale(${1.1 + scrollY * 0.0001}) perspective(1000px) rotateX(${scrollY * 0.01}deg)`,
            backgroundPosition: `${50 + Math.cos(scrollY * 0.008) * 3}% ${50 + Math.sin(scrollY * 0.008) * 3}%`,
          }}
        />
        
        {/* Overlays com efeitos dimensionais */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/75 to-zinc-900/85" />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-gray-500/5 to-white/10 mix-blend-overlay animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-gray-400/10 animate-pulse" style={{ animationDuration: '6s' }} />
        {/* Partículas quânticas - reduzido para melhor performance */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
              style={{
                left: `${(i * 11) % 100}%`,
                top: `${(i * 17) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `2s`
              }}
            />
          ))}
        </div>
        
        {/* Ondas de energia */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
        </div>
        
        <div className="relative z-10">
          <FAQSection />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </main>
  );
}