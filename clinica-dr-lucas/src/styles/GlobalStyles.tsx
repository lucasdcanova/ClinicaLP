import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-dark);
    color: var(--text-white);
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    text-transform: uppercase;
  }

  p {
    color: var(--text-gray);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    letter-spacing: 0.02em;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-cyan);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00B8A9;
  }

  .section-padding {
    padding: 100px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;