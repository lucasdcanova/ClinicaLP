import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${props => props.scrolled ? '20px 0' : '35px 0'};
  background: ${props => props.scrolled ? 'rgba(27, 35, 50, 0.98)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 15px;
  }
`;

export const Logo = styled.img`
  height: 80px;
  cursor: pointer;
  transition: transform 0.3s ease;
  background: transparent;
  mix-blend-mode: normal;
  width: auto;
  max-width: 200px;
  object-fit: contain;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 50px;
    max-width: 150px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(motion.a)`
  color: var(--text-white);
  font-weight: 500;
  font-size: 16px;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-cyan);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary-cyan);

    &::after {
      width: 100%;
    }
  }
`;

export const CTAButton = styled(motion.button)`
  padding: 12px 30px;
  background: var(--gradient-primary);
  color: var(--primary-dark);
  font-weight: 600;
  border-radius: 30px;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);

    &::before {
      left: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  color: var(--text-white);
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: var(--bg-dark);
  padding: 80px 30px 30px;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  color: var(--text-white);
  font-size: 28px;
  cursor: pointer;
`;

