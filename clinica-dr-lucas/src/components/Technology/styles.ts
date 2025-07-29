import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TechnologyContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-section);
  position: relative;
  overflow: hidden;
`;

export const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

export const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0, 229, 204, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 204, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
  padding: 0 20px;
  position: relative;
  z-index: 1;
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

export const TechnologyGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MainEquipment = styled(motion.div)`
  background: rgba(0, 229, 204, 0.03);
  border: 1px solid rgba(0, 229, 204, 0.1);
  border-radius: 30px;
  padding: 60px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const EquipmentContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const EquipmentImage = styled(motion.div)`
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-strong);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EquipmentInfo = styled.div``;

export const EquipmentBadge = styled.div`
  display: inline-block;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

export const EquipmentTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-white);
`;

export const EquipmentDescription = styled.p`
  font-size: 18px;
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: rgba(0, 229, 204, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(0, 229, 204, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 229, 204, 0.08);
    border-color: rgba(0, 229, 204, 0.2);
    transform: translateY(-2px);
  }
`;

export const FeatureIcon = styled.div`
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

export const FeatureText = styled.span`
  font-size: 16px;
  color: var(--text-white);
  font-weight: 500;
`;

export const TechCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 229, 204, 0.1);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 229, 204, 0.3);
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);

    &::before {
      opacity: 0.05;
    }
  }
`;

export const TechCardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(0, 229, 204, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-cyan);
  font-size: 28px;
  margin-bottom: 20px;
`;

export const TechCardTitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-white);
`;

export const TechCardDescription = styled.p`
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.6;
`;