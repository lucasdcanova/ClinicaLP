import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background: var(--bg-section);
  padding: 60px 0 20px;
  position: relative;
  overflow: hidden;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandSection = styled.div``;

export const FooterLogo = styled.img`
  height: 60px;
  margin-bottom: 20px;
`;

export const BrandDescription = styled.p`
  font-size: 16px;
  color: var(--text-gray);
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 300px;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(0, 229, 204, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-cyan);
  transition: all 0.3s ease;

  &:hover {
    background: var(--gradient-primary);
    color: var(--primary-dark);
    transform: translateY(-3px);
  }
`;

export const FooterColumn = styled.div``;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-white);
`;

export const ColumnList = styled.ul`
  list-style: none;
`;

export const ColumnLink = styled(motion.a)`
  display: block;
  padding: 8px 0;
  color: var(--text-gray);
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: var(--primary-cyan);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary-cyan);
    padding-left: 10px;

    &::before {
      width: 5px;
    }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 14px;
  color: var(--text-gray);
  margin-bottom: 10px;
`;

export const Credits = styled.p`
  font-size: 12px;
  color: var(--text-gray);
  opacity: 0.7;

  a {
    color: var(--primary-cyan);
    transition: all 0.3s ease;

    &:hover {
      color: var(--text-white);
    }
  }
`;

export const BackToTop = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-dark);
  font-size: 20px;
  box-shadow: var(--shadow-medium);
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-strong);
  }
`;