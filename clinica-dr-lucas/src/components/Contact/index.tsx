import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Calendar
} from 'lucide-react';
import {
  ContactContainer,
  ContactContent,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SectionDescription,
  ContactGrid,
  ContactInfo,
  InfoCard,
  InfoHeader,
  InfoIcon,
  InfoTitle,
  InfoContent,
  InfoText,
  InfoLink,
  MapContainer,
  MapFrame,
  QuickActions,
  ActionsTitle,
  ButtonGroup,
  ActionButton,
  SecondaryButton,
  WorkingHours,
  HoursTitle,
  HoursList,
  HourItem,
  DayName,
  TimeRange
} from './styles';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const workingHours = [
    { day: 'Segunda-feira', hours: '08:00 - 18:00' },
    { day: 'Terça-feira', hours: '08:00 - 18:00' },
    { day: 'Quarta-feira', hours: '08:00 - 18:00' },
    { day: 'Quinta-feira', hours: '08:00 - 18:00' },
    { day: 'Sexta-feira', hours: '08:00 - 17:00' },
    { day: 'Sábado', hours: '08:00 - 12:00' },
    { day: 'Domingo', hours: 'Fechado' }
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
    <ContactContainer id="contact" ref={ref}>
      <ContactContent>
        <SectionHeader>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Entre em Contato
          </SectionSubtitle>
          
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Estamos aqui para cuidar de você
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Agende sua consulta ou tire suas dúvidas. Nossa equipe está pronta 
            para oferecer o melhor atendimento e cuidado com sua saúde.
          </SectionDescription>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo>
            <InfoCard
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoHeader>
                <InfoIcon>
                  <MapPin />
                </InfoIcon>
                <InfoTitle>Localizações</InfoTitle>
              </InfoHeader>
              <InfoContent>
                <InfoText style={{ fontWeight: 'bold', marginBottom: '8px' }}>Três Passos:</InfoText>
                <InfoText>Rua Julio de Castilhos, 1268 - Centro</InfoText>
                <InfoText style={{ marginBottom: '16px' }}>Três Passos, RS</InfoText>
                
                <InfoText style={{ fontWeight: 'bold', marginBottom: '8px' }}>Crissiumal:</InfoText>
                <InfoText>Avenida Santa Rosa, nº 443 - Centro</InfoText>
                <InfoText>Crissiumal, RS - CEP 98640-000</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoHeader>
                <InfoIcon>
                  <Phone />
                </InfoIcon>
                <InfoTitle>Telefones</InfoTitle>
              </InfoHeader>
              <InfoContent>
                <InfoText style={{ fontWeight: 'bold', marginBottom: '8px' }}>Três Passos:</InfoText>
                <InfoText style={{ marginBottom: '16px' }}>
                  WhatsApp: <InfoLink href="https://wa.me/5555996909381">+55 55 99690-9381</InfoLink>
                </InfoText>
                
                <InfoText style={{ fontWeight: 'bold', marginBottom: '8px' }}>Crissiumal:</InfoText>
                <InfoText>
                  Telefone: <InfoLink href="tel:+555535241354">(55) 3524-1354</InfoLink>
                </InfoText>
                <InfoText>
                  WhatsApp: <InfoLink href="https://wa.me/5555992014181">(55) 99201-4181</InfoLink>
                </InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoHeader>
                <InfoIcon>
                  <Mail />
                </InfoIcon>
                <InfoTitle>E-mail</InfoTitle>
              </InfoHeader>
              <InfoContent>
                <InfoText>
                  <InfoLink href="mailto:dr@lucascanova.com">
                    dr@lucascanova.com
                  </InfoLink>
                </InfoText>
              </InfoContent>
            </InfoCard>

            <WorkingHours
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <HoursTitle>
                <Clock style={{ display: 'inline', marginRight: '10px' }} />
                Horário de Atendimento
              </HoursTitle>
              <HoursList>
                {workingHours.map((item, index) => (
                  <HourItem key={index}>
                    <DayName>{item.day}</DayName>
                    <TimeRange>{item.hours}</TimeRange>
                  </HourItem>
                ))}
              </HoursList>
            </WorkingHours>
          </ContactInfo>

          <MapContainer
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.7831833444855!2d-53.93340762349529!3d-27.006570976925426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fc51d1f0f6d6f7%3A0x4e7e28f0d7a9e8f5!2sRua%20J%C3%BAlio%20de%20Castilhos%2C%201268%20-%20Centro%2C%20Tr%C3%AAs%20Passos%20-%20RS%2C%2098600-000!5e0!3m2!1spt-BR!2sbr!4v1709571234567"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </ContactGrid>

        <QuickActions
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <ActionsTitle>Agende sua consulta agora mesmo</ActionsTitle>
          <ButtonGroup>
            <ActionButton
              href="https://wa.me/5555996909381?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle />
              WhatsApp
            </ActionButton>
            <SecondaryButton
              href="tel:+5555996909381"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone />
              Ligar Agora
            </SecondaryButton>
            <SecondaryButton
              as="a"
              href="https://wa.me/5555996909381?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar />
              Agendar Online
            </SecondaryButton>
          </ButtonGroup>
        </QuickActions>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;