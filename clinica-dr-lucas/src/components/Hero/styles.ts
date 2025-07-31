import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--gradient-dark);
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  background-image: 
    radial-gradient(circle at 20% 80%, var(--primary-cyan) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--primary-cyan) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, var(--primary-cyan) 0%, transparent 50%);
`;

export const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.1;
  filter: blur(40px);
  will-change: transform;
  transform: translateZ(0);
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const TextContent = styled(motion.div)``;

export const HeroLogo = styled.img`
  height: 260px;
  margin-bottom: 30px;
  opacity: 0.95;
  width: auto;
  max-width: 700px;
  object-fit: contain;
  display: block;
  
  @media (max-width: 968px) {
    height: 210px;
    max-width: 540px;
    margin: 0 auto 30px;
  }

  @media (max-width: 768px) {
    height: 150px;
    max-width: 360px;
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled(motion.p)`
  color: var(--primary-cyan);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 30px;
  background: linear-gradient(135deg, var(--text-white) 0%, var(--primary-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled(motion.p)`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 40px;
  color: var(--text-gray);
`;

export const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled(motion.button)`
  padding: 16px 40px;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  font-weight: 600;
  border-radius: 50px;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: var(--shadow-medium);
  will-change: transform;
  transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease-out, height 0.3s ease-out;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-strong);

    &::before {
      width: 300px;
      height: 300px;
    }
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
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
  transform: translateZ(0);

  &:hover {
    background: var(--primary-cyan);
    color: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: var(--shadow-medium);
  }
`;

export const VisualContent = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow-strong);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: var(--gradient-primary);
    opacity: 0.3;
    animation: rotate 30s linear infinite;
    will-change: transform;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translateZ(0);
    }
    100% {
      transform: rotate(360deg) translateZ(0);
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 0;
`;

export const FloatingCard = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  box-shadow: var(--shadow-medium);
  z-index: 1;
`;

export const StatCard = styled(FloatingCard)`
  bottom: -30px;
  left: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
`;

export const StatNumber = styled.h3`
  font-size: 36px;
  font-weight: 700;
  color: var(--primary-cyan);
  margin-bottom: 5px;
`;

export const StatLabel = styled.p`
  font-size: 14px;
  color: var(--text-gray);
  text-align: center;
`;

export const TechCard = styled(FloatingCard)`
  top: 20px;
  right: -20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TechIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  font-size: 20px;
`;

export const TechText = styled.div``;

export const TechTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 2px;
`;

export const TechSubtitle = styled.p`
  font-size: 12px;
  color: var(--primary-cyan);
`;