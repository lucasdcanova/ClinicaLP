import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Adiciona fonte Poppins
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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
