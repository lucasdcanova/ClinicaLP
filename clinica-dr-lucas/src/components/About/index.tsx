import React from 'react';
import { useInView } from 'react-intersection-observer';
import { User, GraduationCap, Award, Briefcase } from 'lucide-react';
import {
  AboutContainer,
  AboutContent,
  ImageSection,
  DoctorImageContainer,
  DoctorImagePlaceholder,
  PlaceholderIcon,
  PlaceholderText,
  ExperienceBadge,
  ExperienceNumber,
  ExperienceText,
  TextSection,
  AboutSubtitle,
  AboutTitle,
  AboutDescription,
  QualificationsList,
  QualificationItem,
  QualificationIcon,
  QualificationContent,
  QualificationTitle,
  QualificationDesc,
  CTASection,
  PrimaryButton,
  SecondaryButton
} from './styles';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const qualifications = [
    {
      icon: <GraduationCap />,
      title: 'Formação Acadêmica',
      description:
        'Medicina pela Ulbra com residência em cirurgia geral no Hospital Nossa Senhora das Graças'
    },
    {
      icon: <Award />,
      title: 'Certificações',
      description: 'Título de especialista em Cirurgia Geral'
    },
    {
      icon: <Briefcase />,
      title: 'Experiência',
      description: 'Dedicado à excelência em procedimentos cirúrgicos e endoscópicos'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AboutContainer id="about" ref={ref}>
      <AboutContent>
        <ImageSection
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <DoctorImageContainer>
            <DoctorImagePlaceholder>
              <PlaceholderIcon>
                <User />
              </PlaceholderIcon>
              <PlaceholderText>
                Espaço reservado para foto do Dr. Lucas Dickel Canova
              </PlaceholderText>
            </DoctorImagePlaceholder>
          </DoctorImageContainer>
          
          <ExperienceBadge
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05 }}
          >
            <ExperienceNumber>4000+</ExperienceNumber>
            <ExperienceText>Endoscopias Realizadas</ExperienceText>
          </ExperienceBadge>
        </ImageSection>

        <TextSection
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AboutSubtitle>Sobre o Médico</AboutSubtitle>
          <AboutTitle>Dr. Lucas Dickel Canova</AboutTitle>
          <AboutDescription>
            Médico Cirurgião Geral com foco em endoscopia digestiva, dedicado a 
            proporcionar cuidados médicos de excelência com abordagem humanizada. 
            Utilizo técnicas cirúrgicas modernas, incluindo a colecistectomia 
            com apenas 3 portais, garantindo recuperação mais rápida e menos desconforto 
            aos pacientes.
          </AboutDescription>
          <AboutDescription>
            Com equipamentos modernos e atualizados, 
            realizo procedimentos endoscópicos diagnósticos e terapêuticos com 
            precisão e segurança, sempre focado no bem-estar e na qualidade 
            de vida dos meus pacientes.
          </AboutDescription>

          <QualificationsList>
            {qualifications.map((qual, index) => (
              <QualificationItem
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                <QualificationIcon>{qual.icon}</QualificationIcon>
                <QualificationContent>
                  <QualificationTitle>{qual.title}</QualificationTitle>
                  <QualificationDesc>{qual.description}</QualificationDesc>
                </QualificationContent>
              </QualificationItem>
            ))}
          </QualificationsList>

          <CTASection>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </PrimaryButton>
            <SecondaryButton
              as="a"
              href="https://www.linkedin.com/in/lucascanovamd?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Currículo Completo
            </SecondaryButton>
          </CTASection>
        </TextSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;