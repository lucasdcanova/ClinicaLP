import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';
import {
  HeroContainer,
  BackgroundPattern,
  FloatingElement,
  HeroContent,
  TextContent,
  HeroLogo,
  Subtitle,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  VisualContent,
  ImageContainer,
  HeroImage,
  StatCard,
  StatNumber,
  StatLabel,
  TechCard,
  TechIcon,
  TechText,
  TechTitle,
  TechSubtitle
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
            src="/images/logo_completo.svg" 
            alt="Dr. Lucas Dickel Canova"
          />
          
          <Subtitle variants={itemVariants}>
            Excelência em Cirurgia e Endoscopia
          </Subtitle>
          
          <Title variants={itemVariants}>
            Cuidando da sua saúde digestiva com tecnologia de ponta
          </Title>
          
          <Description variants={itemVariants}>
            Médico cirurgião geral com foco em endoscopia digestiva, utilizando 
            técnicas modernas e equipamentos atualizados para proporcionar o 
            melhor cuidado aos nossos pacientes.
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

        <VisualContent
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ImageContainer
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <HeroImage 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop"
              alt="Equipamento médico moderno"
            />
          </ImageContainer>
          
          <StatCard
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <StatNumber>5000+</StatNumber>
            <StatLabel>Cirurgias Realizadas</StatLabel>
          </StatCard>
          
          <TechCard
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <TechIcon>
              <Stethoscope />
            </TechIcon>
            <TechText>
              <TechTitle>Tecnologia Moderna</TechTitle>
              <TechSubtitle>Equipamentos Atualizados</TechSubtitle>
            </TechText>
          </TechCard>
        </VisualContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;