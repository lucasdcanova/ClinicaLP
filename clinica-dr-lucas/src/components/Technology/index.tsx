import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Monitor, 
  Zap, 
  Shield, 
  Activity,
  Camera,
  Cpu,
  Wifi,
  Database
} from 'lucide-react';
import {
  TechnologyContainer,
  BackgroundElements,
  GridPattern,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SectionDescription,
  TechnologyGrid,
  MainEquipment,
  EquipmentContent,
  EquipmentImage,
  Image,
  EquipmentInfo,
  EquipmentBadge,
  EquipmentTitle,
  EquipmentDescription,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  TechCardsGrid,
  TechCard,
  TechCardIcon,
  TechCardTitle,
  TechCardDescription
} from './styles';

const Technology: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const mainFeatures = [
    { icon: <Camera />, text: 'Imagem Full HD 1080p' },
    { icon: <Zap />, text: 'Narrow Band Imaging (NBI)' },
    { icon: <Monitor />, text: 'Cromoscopia Digital' },
    { icon: <Shield />, text: 'Detecção Precoce' },
    { icon: <Activity />, text: 'Menor Desconforto' },
    { icon: <Cpu />, text: 'Processamento Avançado' }
  ];

  const technologies = [
    {
      icon: <Monitor />,
      title: 'Colecistectomia 3 Portais',
      description: 'Técnica minimamente invasiva que reduz o trauma cirúrgico e acelera a recuperação.'
    },
    {
      icon: <Wifi />,
      title: 'Monitoramento Digital',
      description: 'Acompanhamento em tempo real dos sinais vitais durante procedimentos.'
    },
    {
      icon: <Database />,
      title: 'Registro Eletrônico',
      description: 'Sistema digital completo para histórico médico e acompanhamento pós-operatório.'
    }
  ];


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <TechnologyContainer id="technology" ref={ref}>
      <BackgroundElements>
        <GridPattern />
      </BackgroundElements>

      <SectionHeader>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Tecnologia de Ponta
        </SectionSubtitle>
        
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Equipamentos de última geração para sua segurança
        </SectionTitle>
        
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Investimos constantemente em tecnologia avançada para oferecer 
          diagnósticos mais precisos e tratamentos mais eficazes.
        </SectionDescription>
      </SectionHeader>

      <TechnologyGrid>
        <MainEquipment
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <EquipmentContent>
            <EquipmentImage
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2000&auto=format&fit=crop"
                alt="Olympus CV-180"
              />
            </EquipmentImage>

            <EquipmentInfo>
              <EquipmentBadge>Equipamento Premium</EquipmentBadge>
              <EquipmentTitle>Olympus CV-180</EquipmentTitle>
              <EquipmentDescription>
                Sistema de videoendoscopia de última geração que oferece qualidade 
                de imagem excepcional e recursos avançados para diagnóstico preciso. 
                Com tecnologia de ponta, permite visualização detalhada e identificação 
                precoce de alterações no trato digestivo.
              </EquipmentDescription>

              <FeaturesList>
                {mainFeatures.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureText>{feature.text}</FeatureText>
                  </FeatureItem>
                ))}
              </FeaturesList>
            </EquipmentInfo>
          </EquipmentContent>
        </MainEquipment>

        <TechCardsGrid>
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <TechCardIcon>{tech.icon}</TechCardIcon>
              <TechCardTitle>{tech.title}</TechCardTitle>
              <TechCardDescription>{tech.description}</TechCardDescription>
            </TechCard>
          ))}
        </TechCardsGrid>
      </TechnologyGrid>
    </TechnologyContainer>
  );
};

export default Technology;