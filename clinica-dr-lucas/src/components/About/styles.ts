import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-dark);
  position: relative;
  overflow: hidden;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const ImageSection = styled(motion.div)`
  position: relative;
`;

export const DoctorImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 3/4;
  border-radius: 30px;
  overflow: hidden;
  background: var(--gradient-dark);
  box-shadow: var(--shadow-strong);
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: var(--gradient-primary);
    border-radius: 30px;
    z-index: -1;
    opacity: 0.7;
  }
`;

export const DoctorImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 229, 204, 0.05);
  border: 2px dashed rgba(0, 229, 204, 0.3);
`;

export const PlaceholderIcon = styled.div`
  font-size: 64px;
  color: var(--primary-cyan);
  margin-bottom: 20px;
  opacity: 0.5;
`;

export const PlaceholderText = styled.p`
  color: var(--text-gray);
  font-size: 16px;
  text-align: center;
  padding: 0 20px;
`;

export const ExperienceBadge = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  padding: 25px;
  border-radius: 20px;
  box-shadow: var(--shadow-strong);
  text-align: center;
  min-width: 150px;
`;

export const SurgeryBadge = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: -20px;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  padding: 25px;
  border-radius: 20px;
  box-shadow: var(--shadow-strong);
  text-align: center;
  min-width: 150px;
`;

export const ExperienceNumber = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const ExperienceText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TextSection = styled(motion.div)``;

export const AboutSubtitle = styled.p`
  color: var(--primary-cyan);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const AboutTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.2;
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  color: var(--text-gray);
  line-height: 1.8;
  margin-bottom: 30px;
`;

export const QualificationsList = styled.ul`
  list-style: none;
  margin-bottom: 40px;
`;

export const QualificationItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(0, 229, 204, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(0, 229, 204, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 229, 204, 0.08);
    border-color: rgba(0, 229, 204, 0.2);
    transform: translateX(5px);
  }
`;

export const QualificationIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  flex-shrink: 0;
`;

export const QualificationContent = styled.div``;

export const QualificationTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--text-white);
`;

export const QualificationDesc = styled.p`
  font-size: 14px;
  color: var(--text-gray);
`;

export const CTASection = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled(motion.button)`
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

export const SecondaryButton = styled(motion.button)`
  padding: 16px 40px;
  background: transparent;
  color: var(--primary-cyan);
  font-weight: 600;
  border-radius: 50px;
  font-size: 18px;
  border: 2px solid var(--primary-cyan);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 229, 204, 0.1);
    transform: translateY(-3px);
  }
`;