import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Stethoscope, 
  Activity, 
  Heart,
  ArrowRight,
  Microscope,
  Scan
} from 'lucide-react';
import {
  ServicesContainer,
  BackgroundGradient,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SectionDescription,
  ServicesGrid,
  ServiceCard,
  IconWrapper,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
  ServiceLink,
  FloatingBadge
} from './styles';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services: Service[] = [
    {
      id: 1,
      icon: <Stethoscope />,
      title: 'Cirurgias',
      description: 'Procedimentos cirúrgicos modernos com técnicas minimamente invasivas para recuperação mais rápida.',
      features: [
        'Colecistectomia com 3 portais',
        'Herniorrafias avançadas',
        'Cirurgias abdominais complexas',
        'Técnicas laparoscópicas',
        'Apendicectomias',
        'Cirurgias de emergência',
        'Procedimentos eletivos'
      ],
      badge: 'Destaque'
    },
    {
      id: 2,
      icon: <Microscope />,
      title: 'Endoscopia Digestiva Alta',
      description: 'Exames e procedimentos terapêuticos com equipamentos modernos e atualizados.',
      features: [
        'Diagnóstico precoce',
        'Procedimentos terapêuticos',
        'Alta definição de imagem',
        'Mínimo desconforto'
      ]
    },
    {
      id: 3,
      icon: <Activity />,
      title: 'Colonoscopia',
      description: 'Exames diagnósticos e terapêuticos para prevenção e tratamento de doenças do cólon.',
      features: [
        'Screening preventivo',
        'Polipectomias',
        'Cromoscopia digital',
        'Sedação confortável'
      ]
    },
    {
      id: 4,
      icon: <Heart />,
      title: 'Doenças do Aparelho Digestivo',
      description: 'Diagnóstico e tratamento completo de patologias gastrointestinais.',
      features: [
        'Refluxo gastroesofágico',
        'Doença inflamatória intestinal',
        'Síndrome do intestino irritável',
        'Gastrites e úlceras'
      ]
    },
    {
      id: 5,
      icon: <Scan />,
      title: 'Dermatologia Cirúrgica',
      description: 'Procedimentos cirúrgicos dermatológicos com técnica refinada e resultados estéticos.',
      features: [
        'Excisão de lesões cutâneas',
        'Biópsias de pele',
        'Remoção de cistos e lipomas',
        'Cirurgia de nevos e verrugas',
        'Cauterização de lesões',
        'Suturas estéticas'
      ]
    },
    {
      id: 6,
      icon: <Activity />,
      title: 'Check-up Digestivo',
      description: 'Avaliação completa da saúde digestiva com exames preventivos personalizados.',
      features: [
        'Avaliação completa',
        'Exames laboratoriais',
        'Orientação nutricional',
        'Acompanhamento regular'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
    <ServicesContainer id="services">
      <BackgroundGradient />
      
      <SectionHeader>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Nossos Serviços
        </SectionSubtitle>
        
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Cuidado especializado em cada procedimento
        </SectionTitle>
        
        <SectionDescription
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oferecemos uma gama completa de serviços médicos com tecnologia de ponta 
          e abordagem humanizada, garantindo o melhor tratamento para cada paciente.
        </SectionDescription>
      </SectionHeader>

      <ServicesGrid
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {service.badge && (
              <FloatingBadge
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                {service.badge}
              </FloatingBadge>
            )}
            
            <IconWrapper>
              <ServiceIcon>{service.icon}</ServiceIcon>
            </IconWrapper>
            
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            
            <ServiceFeatures>
              {service.features.map((feature, index) => (
                <ServiceFeature key={index}>{feature}</ServiceFeature>
              ))}
            </ServiceFeatures>
            
            <ServiceLink
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Saiba mais <ArrowRight size={18} />
            </ServiceLink>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;