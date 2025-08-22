import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-dark);
  position: relative;
  overflow: hidden;
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
`;

export const SectionSubtitle = styled(motion.p)`
  color: var(--primary-cyan);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--text-white) 0%, var(--primary-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionDescription = styled(motion.p)`
  font-size: 18px;
  color: var(--text-gray);
  line-height: 1.6;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ContactInfo = styled(motion.div)``;

export const InfoCard = styled(motion.div)`
  background: rgba(0, 229, 204, 0.03);
  border: 1px solid rgba(0, 229, 204, 0.1);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 229, 204, 0.05);
    border-color: rgba(0, 229, 204, 0.2);
    transform: translateY(-3px);
    box-shadow: var(--shadow-medium);
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  font-size: 24px;
`;

export const InfoTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: var(--text-white);
`;

export const InfoContent = styled.div``;

export const InfoText = styled.p`
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLink = styled.a`
  color: var(--primary-cyan);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: var(--text-white);
    text-decoration: underline;
  }
`;

export const MapContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-strong);

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const QuickActions = styled(motion.div)`
  margin-top: 60px;
  text-align: center;
`;

export const ActionsTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-white);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  font-weight: 600;
  border-radius: 50px;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-medium);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-strong);
  }
`;

export const SecondaryButton = styled(ActionButton)`
  background: transparent;
  color: var(--primary-cyan);
  border: 2px solid var(--primary-cyan);

  &:hover {
    background: rgba(0, 229, 204, 0.1);
  }
`;

export const WorkingHours = styled(motion.div)`
  background: rgba(0, 229, 204, 0.03);
  border: 1px solid rgba(0, 229, 204, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin-top: 30px;
`;

export const HoursTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-white);
`;

export const HoursList = styled.div`
  display: grid;
  gap: 15px;
`;

export const HourItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 229, 204, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const DayName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-white);
`;

export const TimeRange = styled.span`
  font-size: 16px;
  color: var(--primary-cyan);
  font-weight: 500;
`;

export const WhatsAppBlock = styled(motion.div)`
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 12px;
  padding: 20px;
  margin: 16px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
    
    &:before {
      opacity: 1;
    }
  }
`;

export const WhatsAppContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
  position: relative;
  z-index: 1;
`;

export const WhatsAppIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const WhatsAppInfo = styled.div`
  flex: 1;
`;

export const WhatsAppLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: 4px;
`;

export const WhatsAppNumber = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const WhatsAppCTA = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin-top: 4px;
`;