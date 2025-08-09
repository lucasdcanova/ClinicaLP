import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
  HeroContainer,
  BackgroundPattern,
  FloatingElement,
  HeroContent,
  TextContent,
  HeroLogo,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  MouseFollower,
  FloatingParticle,
  GradientOrb
} from './styles';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const floatingElsRef = useRef<HTMLElement[]>([]);
  const particlesRef = useRef<Array<{ el: HTMLElement; cx: number; cy: number }>>([]);
  const containerRectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);
  
  // Tilt do conteúdo baseado no mouse (com molas para suavizar)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltXSpring = useSpring(tiltX, { stiffness: 120, damping: 14, mass: 0.3 });
  const tiltYSpring = useSpring(tiltY, { stiffness: 120, damping: 14, mass: 0.3 });

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (isReduced || !isFinePointer) {
      // Em mobile/pointer coarse ou se o usuário preferir menos movimento, não registra listeners
      return;
    }

    let rafId: number;

    // Cacheia elementos e posições para evitar leituras de layout por frame
    const cacheElements = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerRectRef.current = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
      floatingElsRef.current = Array.from(containerRef.current.querySelectorAll('.floating')) as HTMLElement[];
      const particleNodes = Array.from(containerRef.current.querySelectorAll('.particle')) as HTMLElement[];
      particlesRef.current = particleNodes.map((el) => {
        const r = el.getBoundingClientRect();
        return { el, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
      });
    };

    const handleResize = () => {
      // Debounce via rAF
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(cacheElements);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRectRef.current) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = containerRectRef.current!;
        // Normaliza posição do mouse dentro do container (sem ler layout agora)
        const relX = (clientX - left) / width;
        const relY = (clientY - top) / height;
        const x = (relX - 0.5) * 14;
        const y = (relY - 0.5) * 14;

        setMousePosition({ x: clientX, y: clientY });
        tiltX.set(y * -0.8);
        tiltY.set(x * 0.8);

        // Apenas writes de transform (sem leituras de layout)
        floatingElsRef.current.forEach((element, index) => {
          const speed = 0.4 + (index % 3) * 0.25;
          element.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
        });

        particlesRef.current.forEach(({ el, cx, cy }, index) => {
          const deltaX = clientX - cx;
          const deltaY = clientY - cy;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const maxDistance = 700;
          const force = Math.max(0, 1 - distance / maxDistance);
          const speed = (index % 3 + 1) * 0.42;
          const paradoxFactor = -0.8;
          const moveX = deltaX * force * speed * paradoxFactor;
          const moveY = deltaY * force * speed * paradoxFactor;
          const scale = 1 + force * 0.9;
          el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(${scale})`;
          el.style.opacity = `${0.28 + force * 0.72}`;
          el.style.filter = `blur(${6 + (1 - force) * 14}px)`;
        });
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Inicializa cache após layout estar pronto
    requestAnimationFrame(cacheElements);
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize as any);
      window.removeEventListener('scroll', handleResize as any);
      window.removeEventListener('mousemove', handleMouseMove as any);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const
      }
    }
  };

  const particlePositions = [
    { top: '5%', left: '8%', size: 45, delay: 0 },
    { top: '15%', left: '25%', size: 60, delay: 0.5 },
    { top: '10%', right: '12%', size: 40, delay: 1 },
    { top: '25%', right: '30%', size: 55, delay: 1.5 },
    { top: '35%', left: '15%', size: 35, delay: 2 },
    { top: '40%', right: '8%', size: 50, delay: 2.5 },
    { top: '50%', left: '5%', size: 45, delay: 3 },
    { top: '55%', right: '20%', size: 40, delay: 3.5 },
    { top: '65%', left: '30%', size: 55, delay: 4 },
    { top: '70%', right: '10%', size: 35, delay: 4.5 },
    { top: '80%', left: '18%', size: 50, delay: 5 },
    { bottom: '35%', left: '10%', size: 45, delay: 5.5 },
    { bottom: '30%', right: '25%', size: 60, delay: 6 },
    { bottom: '25%', left: '35%', size: 40, delay: 6.5 },
    { bottom: '20%', right: '15%', size: 55, delay: 7 },
    { bottom: '15%', left: '22%', size: 35, delay: 7.5 },
    { bottom: '10%', right: '32%', size: 50, delay: 8 },
    { bottom: '5%', left: '12%', size: 45, delay: 8.5 },
    { top: '45%', left: '40%', size: 40, delay: 9 },
    { top: '30%', right: '40%', size: 55, delay: 9.5 },
    { top: '8%', left: '45%', size: 38, delay: 2.2 },
    { top: '18%', right: '5%', size: 52, delay: 3.7 },
    { top: '22%', left: '38%', size: 48, delay: 4.2 },
    { top: '38%', right: '18%', size: 42, delay: 5.8 },
    { top: '42%', left: '12%', size: 36, delay: 6.3 },
    { top: '48%', right: '35%', size: 58, delay: 7.1 },
    { top: '58%', left: '22%', size: 44, delay: 8.2 },
    { top: '62%', right: '28%', size: 40, delay: 1.8 },
    { top: '72%', left: '40%', size: 50, delay: 2.8 },
    { top: '78%', right: '45%', size: 46, delay: 3.3 },
    { bottom: '42%', left: '25%', size: 54, delay: 4.8 },
    { bottom: '38%', right: '20%', size: 38, delay: 5.3 },
    { bottom: '32%', left: '45%', size: 48, delay: 6.8 },
    { bottom: '28%', right: '35%', size: 42, delay: 7.3 },
    { bottom: '22%', left: '8%', size: 56, delay: 8.8 },
    { bottom: '18%', right: '42%', size: 36, delay: 1.3 },
    { bottom: '12%', left: '30%', size: 52, delay: 2.3 },
    { bottom: '8%', right: '15%', size: 44, delay: 3.8 },
    { top: '3%', left: '50%', size: 40, delay: 4.3 },
    { top: '85%', right: '50%', size: 46, delay: 5.6 },
    { top: '12%', left: '60%', size: 42, delay: 0.3 },
    { top: '20%', right: '22%', size: 48, delay: 0.8 },
    { top: '28%', left: '5%', size: 36, delay: 1.2 },
    { top: '33%', right: '45%', size: 52, delay: 1.7 },
    { top: '46%', left: '25%', size: 44, delay: 2.1 },
    { top: '52%', right: '15%', size: 38, delay: 2.6 },
    { top: '60%', left: '45%', size: 50, delay: 3.1 },
    { top: '68%', right: '38%', size: 42, delay: 3.6 },
    { top: '75%', left: '10%', size: 46, delay: 4.1 },
    { top: '82%', right: '25%', size: 40, delay: 4.6 },
    { bottom: '45%', left: '18%', size: 48, delay: 5.1 },
    { bottom: '40%', right: '30%', size: 44, delay: 5.6 },
    { bottom: '33%', left: '50%', size: 38, delay: 6.1 },
    { bottom: '27%', right: '12%', size: 52, delay: 6.6 },
    { bottom: '23%', left: '38%', size: 42, delay: 7.1 },
    { bottom: '17%', right: '48%', size: 46, delay: 7.6 },
    { bottom: '13%', left: '20%', size: 50, delay: 8.1 },
    { bottom: '7%', right: '25%', size: 40, delay: 8.6 },
    { top: '7%', left: '35%', size: 44, delay: 0.1 },
    { top: '88%', right: '40%', size: 48, delay: 5.9 },
  ];

  return (
    <HeroContainer id="home" ref={containerRef}
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <BackgroundPattern />
      
      <MouseFollower
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.6
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      <GradientOrb top="20%" left="-20%" className="floating" 
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <GradientOrb bottom="20%" right="-20%" className="floating"
        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {particlePositions.map((pos, index) => (
        <FloatingParticle
          key={index}
          className="particle"
          size={pos.size}
          delay={pos.delay}
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
            bottom: pos.bottom
          }}
        />
      ))}
      
    <FloatingElement
        className="floating"
        style={{ top: '10%', left: '-10%' }}
        animate={{
      scale: [1, 1.08, 1],
      rotate: [0, 360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear' as const
        }}
      />
      
      <FloatingElement
        className="floating"
        style={{ bottom: '10%', right: '-10%' }}
        animate={{
          scale: [1.06, 1, 1.06],
          rotate: [360, 0]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear' as const
        }}
      />

      <HeroContent
        style={{
          transformStyle: 'preserve-3d',
          perspective: 800,
          rotateX: tiltXSpring,
          rotateY: tiltYSpring,
        }}
      >
        <TextContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroLogo 
            src="/logo-hero-completo.png" 
            alt="Dr. Lucas Dickel Canova"
            loading="eager"
            fetchPriority="high"
            animate={{
              y: [0, -6, 0, 4, 0],
              scale: [1, 1.01, 1],
              rotateZ: [0, 0.2, 0, -0.2, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          
          <Description variants={itemVariants}>
            Clínica especializada em cirurgia geral e endoscopia digestiva, 
            comprometida com a excelência no cuidado da sua saúde.
          </Description>
          
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/5555996909381?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta', '_blank')}
            >
              Agendar Consulta
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conhecer Serviços
            </SecondaryButton>
          </ButtonGroup>
        </TextContent>

      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;