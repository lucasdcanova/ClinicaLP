import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { useGSAP } from './hooks/useGSAP';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const gsapRef = useGSAP();
  // useMouseFollower(); // Desabilitado temporariamente para melhorar performance

  // Removido carregamento de fonte Poppins via Google Fonts para reduzir recursos bloqueantes

  return (
    <div ref={gsapRef}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Services />
      <About />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
