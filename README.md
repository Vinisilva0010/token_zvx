# ZVX Token Landing Page

Uma landing page moderna e futurista para o ZVX Token, construída com Next.js, TailwindCSS e Framer Motion.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações para React
- **Recharts** - Biblioteca de gráficos responsivos
- **Lucide React** - Ícones modernos e minimalistas

## ✨ Características

### Design Futurista
- Tema dark com gradientes neon (azul e roxo)
- Animações fluidas com Framer Motion
- Efeitos de hover com glow
- Fundo animado com gradientes
- Padrão de grid sutil

### Seções da Landing Page

1. **Hero Section**
   - Fundo animado com gradiente
   - Título impactante com animação de entrada
   - Botões com efeito hover glow
   - Elementos flutuantes animados

2. **Sobre o ZVX**
   - Explicação do token
   - Cards animados com benefícios
   - Estatísticas do projeto

3. **Tokenomics**
   - Gráfico interativo PieChart
   - Distribuição detalhada:
     - 50% Comunidade
     - 20% Desenvolvimento
     - 15% Parcerias
     - 10% Reserva
     - 5% Marketing

4. **Roadmap**
   - Timeline animada com 4 fases
   - Indicadores de status (concluído, em andamento, em breve)
   - Animações que aparecem ao rolar

5. **Utilidades**
   - Grid com ícones e animações hover
   - Funcionalidades: Pagamentos, Staking, Governança, Cashback

6. **Equipe**
   - Cards com efeito hover
   - 3 membros fictícios com perfis profissionais
   - Links para redes sociais

7. **FAQ**
   - Acordeões interativos
   - 5 perguntas principais sobre o projeto

8. **Footer**
   - Links para redes sociais
   - Newsletter subscription
   - Aviso legal sobre investimentos

### Animações e Interações

- **Scroll Animations**: Seções aparecem conforme o usuário rola a página
- **Hover Effects**: Botões e cards com efeitos glow
- **Floating Elements**: Partículas animadas no fundo
- **Smooth Transitions**: Transições suaves entre estados
- **Loading Animations**: Elementos aparecem com stagger effect

## 🛠️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone <repo-url>
   cd zvx-token-landing
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estrutura do Projeto

```
zvx-token-landing/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais com tema dark
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── Navbar.tsx       # Navegação responsiva
│       ├── HeroSection.tsx  # Seção hero com animações
│       ├── AboutSection.tsx # Seção sobre o ZVX
│       ├── TokenomicsSection.tsx # Gráfico de distribuição
│       ├── RoadmapSection.tsx   # Timeline do projeto
│       ├── UtilitiesSection.tsx # Funcionalidades
│       ├── TeamSection.tsx     # Equipe
│       ├── FAQSection.tsx      # Perguntas frequentes
│       └── Footer.tsx          # Rodapé
├── public/
│   └── grid.svg            # Padrão de grid para fundo
├── tailwind.config.js      # Configuração do TailwindCSS
└── package.json
```

## 🎨 Paleta de Cores

- **Primária**: `#6366f1` (Indigo)
- **Secundária**: `#8b5cf6` (Purple)
- **Accent**: `#06b6d4` (Cyan)
- **Neon Blue**: `#00d9ff`
- **Neon Purple**: `#a855f7`

## 📱 Responsividade

A landing page é totalmente responsiva, com:
- Layout adaptativo para desktop, tablet e mobile
- Navegação mobile com menu hamburger
- Componentes que se reorganizam em diferentes breakpoints
- Texto e espaçamentos otimizados para cada tela

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa o linter

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- GitHub Pages

## ⚠️ Considerações Importantes

- As imagens da equipe usam placeholders do Unsplash
- Os links sociais são fictícios (#)
- As funcionalidades são demonstrativas
- Este é um projeto de demonstração para o token ZVX

## 📄 Licença

Este projeto foi criado para fins educacionais e de demonstração.

---

**Desenvolvido com ❤️ usando Next.js e TailwindCSS**