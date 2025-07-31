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
                <InfoTitle>Localização</InfoTitle>
              </InfoHeader>
              <InfoContent>
                <InfoText>Rua Julio de Castilhos, 1268 - Centro</InfoText>
                <InfoText>Três Passos, RS</InfoText>
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
                <InfoText>
                  WhatsApp: <InfoLink href="https://wa.me/5555996909381">+55 55 99690-9381</InfoLink>
                </InfoText>
                <InfoText>
                  E-mail: <InfoLink href="mailto:dr@lucascanova.com">dr@lucascanova.com</InfoLink>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.8969361571827!2d-53.93167668505295!3d-27.934722082703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fcd5c0c5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sTr%C3%AAs%20Passos%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
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
              href="https://wa.me/5555996909381"
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
              href="#"
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