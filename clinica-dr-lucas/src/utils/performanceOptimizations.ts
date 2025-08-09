// Utility functions for performance optimizations

// Preload critical resources
export const preloadCriticalResources = () => {
  // Já pré-carregadas no index.html via <link rel="preload"> para fontes locais.
  // Se desejar fallback remoto, descomente abaixo:
  // const fallbackFonts = [
  //   'https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdXeFaxOedc.woff2',
  //   'https://fonts.gstatic.com/s/oswald/v53/TK3iWkUHHAIjg752FD8Ghe4.woff2'
  // ];
  // fallbackFonts.forEach(font => {
  //   const link = document.createElement('link');
  //   link.rel = 'preload';
  //   link.as = 'font';
  //   link.type = 'font/woff2';
  //   link.href = font;
  //   link.crossOrigin = 'anonymous';
  //   document.head.appendChild(link);
  // });
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  images.forEach(img => imageObserver.observe(img));
};

// Defer non-critical CSS
export const deferNonCriticalCSS = () => {
  const nonCriticalStyles = document.querySelectorAll('link[data-critical="false"]');
  
  nonCriticalStyles.forEach(link => {
    const newLink = link.cloneNode() as HTMLLinkElement;
    newLink.media = 'print';
    newLink.addEventListener('load', () => {
      newLink.media = 'all';
    });
    link.parentNode?.replaceChild(newLink, link);
  });
};

// Optimize third-party scripts
export const optimizeThirdPartyScripts = () => {
  // Load scripts with async or defer
  const scripts = document.querySelectorAll('script[data-optimize]');
  
  scripts.forEach(script => {
    const newScript = document.createElement('script');
    newScript.src = script.getAttribute('src') || '';
    newScript.async = true;
    script.parentNode?.replaceChild(newScript, script);
  });
};

// Web Worker for heavy computations
export const createPerformanceWorker = () => {
  const workerCode = `
    self.addEventListener('message', (e) => {
      const { type, data } = e.data;
      
      switch(type) {
        case 'heavyComputation':
          // Move heavy computations here
          const result = performHeavyComputation(data);
          self.postMessage({ type: 'computationComplete', result });
          break;
      }
    });
    
    function performHeavyComputation(data) {
      // Example: Complex calculations
      return data;
    }
  `;
  
  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const workerUrl = URL.createObjectURL(blob);
  return new Worker(workerUrl);
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      lazyLoadImages();
      deferNonCriticalCSS();
      optimizeThirdPartyScripts();
    });
  } else {
    preloadCriticalResources();
    lazyLoadImages();
    deferNonCriticalCSS();
    optimizeThirdPartyScripts();
  }
};