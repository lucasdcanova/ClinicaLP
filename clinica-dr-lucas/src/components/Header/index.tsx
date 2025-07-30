import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Nav,
  NavLink,
  CTAButton,
  MobileMenuButton,
  MobileMenu,
  CloseButton
} from './styles';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Tecnologia', href: '#technology' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <>
      <HeaderContainer
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderContent>
          <Logo 
            src="/images/logo_simbolo.svg" 
            alt="Dr. Lucas Dickel Canova"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          
          <Nav>
            {navItems.map((item, index) => (
              <NavLink
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </NavLink>
            ))}
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consulta
            </CTAButton>
          </Nav>

          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <Menu />
          </MobileMenuButton>
        </HeaderContent>
      </HeaderContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'black',
                zIndex: 999
              }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton onClick={() => setMobileMenuOpen(false)}>
                <X />
              </CloseButton>
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <CTAButton>Agendar Consulta</CTAButton>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;