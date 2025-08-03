import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const rect = containerRef.current!.getBoundingClientRect();
        const { width, height } = rect;
        
        const x = (clientX / width - 0.5) * 10;
        const y = (clientY / height - 0.5) * 10;
        
        setMousePosition({ x: clientX, y: clientY });
        
        const floatingElements = containerRef.current!.querySelectorAll('.floating');
        floatingElements.forEach((el, index) => {
          const element = el as HTMLElement;
          const speed = (index + 1) * 0.3;
          element.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
        });
        
        const particles = containerRef.current!.querySelectorAll('.particle');
        particles.forEach((el, index) => {
          const element = el as HTMLElement;
          const speed = (index + 1) * 0.5;
          const offsetX = (clientX - rect.left) / width - 0.5;
          const offsetY = (clientY - rect.top) / height - 0.5;
          element.style.transform = `translate3d(${offsetX * speed * 30}px, ${offsetY * speed * 30}px, 0) scale(${1 + Math.abs(offsetX * offsetY) * 0.2})`;
        });
      });
    };
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    containerRef.current?.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
    { top: '15%', left: '10%', size: 60, delay: 0 },
    { top: '25%', right: '15%', size: 40, delay: 2 },
    { bottom: '30%', left: '20%', size: 50, delay: 4 },
    { bottom: '20%', right: '25%', size: 45, delay: 6 },
    { top: '50%', left: '5%', size: 35, delay: 8 },
    { top: '70%', right: '10%', size: 55, delay: 10 },
  ];

  return (
    <HeroContainer id="home" ref={containerRef}>
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
      
      <GradientOrb top="20%" left="-20%" className="floating" />
      <GradientOrb bottom="20%" right="-20%" className="floating" />
      
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
          scale: [1, 1.1, 1],
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
          scale: [1.1, 1, 1.1],
          rotate: [360, 0]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear' as const
        }}
      />

      <HeroContent>
        <TextContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroLogo 
            src="/logo-hero-completo.png" 
            alt="Dr. Lucas Dickel Canova"
          />
          
          
          <Description variants={itemVariants}>
            Clínica especializada em cirurgia geral e endoscopia digestiva, 
            comprometida com a excelência no cuidado da sua saúde.
          </Description>
          
          <ButtonGroup variants={itemVariants}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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