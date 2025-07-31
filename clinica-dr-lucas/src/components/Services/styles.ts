import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesContainer = styled.section`
  padding: 100px 0;
  background: var(--bg-section);
  position: relative;
  overflow: hidden;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  top: -50%;
  right: -25%;
  width: 50%;
  height: 100%;
  background: radial-gradient(circle, var(--primary-cyan) 0%, transparent 70%);
  opacity: 0.05;
  filter: blur(100px);
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
  padding: 0 20px;
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

export const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 229, 204, 0.1);
  border-radius: 20px;
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  will-change: transform;
  transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-out;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 229, 204, 0.3);
    transform: translateY(-5px);
    box-shadow: var(--shadow-strong);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: var(--gradient-primary);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease-out;
  }

  ${ServiceCard}:hover & {
    &::after {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`;

export const ServiceIcon = styled.div`
  color: var(--primary-dark);
  font-size: 32px;
  z-index: 1;
  position: relative;
`;

export const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-white);
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 25px;
`;

export const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: var(--text-gray);
  font-size: 14px;

  &::before {
    content: '✓';
    color: var(--primary-cyan);
    font-weight: bold;
    font-size: 16px;
  }
`;

export const ServiceLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-cyan);
  font-weight: 500;
  font-size: 16px;
  transition: transform 0.2s ease;
  will-change: transform;

  &:hover {
    transform: translateX(4px);
  }
`;

export const FloatingBadge = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;