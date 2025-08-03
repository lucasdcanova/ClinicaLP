import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail,
  ChevronUp
} from 'lucide-react';
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  BrandSection,
  FooterLogo,
  BrandDescription,
  SocialLinks,
  SocialLink,
  FooterColumn,
  ColumnTitle,
  ColumnList,
  ColumnLink,
  FooterBottom,
  Copyright,
  Credits,
  BackToTop
} from './styles';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterTop>
            <BrandSection>
              <FooterLogo 
                src="/logo_simbolo_sem_fundo.png" 
                alt="Dr. Lucas Dickel Canova"
              />
              <BrandDescription>
                Clínica especializada em cirurgia geral e endoscopia digestiva, 
                comprometida com a excelência no cuidado da sua saúde.
              </BrandDescription>
              <SocialLinks>
                <SocialLink
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} />
                </SocialLink>
                <SocialLink
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook size={20} />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </SocialLink>
                <SocialLink
                  href="mailto:contato@drlucascanova.com.br"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} />
                </SocialLink>
              </SocialLinks>
            </BrandSection>

            <FooterColumn>
              <ColumnTitle>Serviços</ColumnTitle>
              <ColumnList>
                <li>
                  <ColumnLink href="#services">Cirurgia Geral</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="#services">Endoscopia Digestiva</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="#services">Colonoscopia</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="#services">Check-up Digestivo</ColumnLink>
                </li>
              </ColumnList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Clínica</ColumnTitle>
              <ColumnList>
                <li>
                  <ColumnLink href="#about">Sobre Nós</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="#technology">Tecnologia</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="#contact">Localização</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="#contact">Horários</ColumnLink>
                </li>
              </ColumnList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Contato Rápido</ColumnTitle>
              <ColumnList>
                <li>
                  <ColumnLink href="tel:+555535221234">(55) 3522-1234</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="https://wa.me/5555996909381?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">WhatsApp</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="mailto:contato@drlucascanova.com.br">E-mail</ColumnLink>
                </li>
                <li>
                  <ColumnLink href="https://wa.me/5555996909381?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta">Agendar Online</ColumnLink>
                </li>
              </ColumnList>
            </FooterColumn>
          </FooterTop>

          <FooterBottom>
            <Copyright>
              © {currentYear} Dr. Lucas Dickel Canova - Clínica Cirúrgica. Todos os direitos reservados.
            </Copyright>
            <Credits>
              Desenvolvido com dedicação para oferecer a melhor experiência aos nossos pacientes
            </Credits>
          </FooterBottom>
        </FooterContent>
      </FooterContainer>

      {showBackToTop && (
        <BackToTop
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp />
        </BackToTop>
      )}
    </>
  );
};

export default Footer;