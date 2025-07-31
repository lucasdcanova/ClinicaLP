import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  HeroContainer,
  BackgroundPattern,
  FloatingElement,
  HeroContent,
  TextContent,
  HeroLogo,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
} from './styles';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { width, height } = containerRef.current!.getBoundingClientRect();
        
        const x = (clientX / width - 0.5) * 10;
        const y = (clientY / height - 0.5) * 10;
        
        const floatingElements = containerRef.current!.querySelectorAll('.floating');
        floatingElements.forEach((el, index) => {
          const element = el as HTMLElement;
          const speed = (index + 1) * 0.3;
          element.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <HeroContainer id="home" ref={containerRef}>
      <BackgroundPattern />
      
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
          
          <Title variants={itemVariants}>
            Dr. Lucas Dickel Canova
          </Title>
          
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