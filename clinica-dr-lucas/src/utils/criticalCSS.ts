// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --primary-dark: #2B3A5C;
    --primary-cyan: #00E5CC;
    --text-white: #FFFFFF;
    --text-gray: #E0E0E0;
    --bg-dark: #1a2332;
    --bg-section: #243142;
    --gradient-primary: linear-gradient(135deg, #00E5CC 0%, #00B8A9 100%);
    --gradient-dark: linear-gradient(135deg, #2B3A5C 0%, #1a2332 100%);
    --shadow-soft: 0 4px 20px rgba(0, 229, 204, 0.1);
    --shadow-medium: 0 8px 32px rgba(0, 229, 204, 0.15);
    --shadow-strong: 0 12px 48px rgba(0, 229, 204, 0.2);
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-dark);
    color: var(--text-white);
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
  }
  
  /* Header critical styles */
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: rgba(26, 35, 50, 0.95);
    backdrop-filter: blur(12px);
    z-index: 100;
    transition: transform 0.3s ease;
  }
  
  /* Hero critical styles */
  #home {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--gradient-dark);
  }
  
  /* Prevent layout shift for fonts */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-display: swap;
    src: local('IBM Plex Sans'), url('https://fonts.gstatic.com/s/ibmplexsans/v19/zYX7KVElMYYaJe8bpLHnCwDKhdXeFaxOedc.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Oswald';
    font-display: swap;
    src: local('Oswald'), url('https://fonts.gstatic.com/s/oswald/v53/TK3iWkUHHAIjg752FD8Ghe4.woff2') format('woff2');
  }
  
  /* Prevent CLS for images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Button base styles */
  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }
`;

// Inject critical CSS inline
export const injectCriticalCSS = () => {
  const style = document.createElement('style');
  style.innerHTML = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
};

// Load non-critical CSS asynchronously
export const loadNonCriticalCSS = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = function() {
    (this as HTMLLinkElement).media = 'all';
  };
  document.head.appendChild(link);
};