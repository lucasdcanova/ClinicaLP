import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de fade in para elementos com classe .fade-in
      gsap.utils.toArray('.fade-in').forEach((element: any) => {
        gsap.fromTo(element, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Animação de scale para elementos com classe .scale-in
      gsap.utils.toArray('.scale-in').forEach((element: any) => {
        gsap.fromTo(element,
          {
            scale: 0.8,
            opacity: 0
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out' as const,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%'
            }
          }
        );
      });

      // Animação de parallax para elementos com classe .parallax
      gsap.utils.toArray('.parallax').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });

      // Animação de texto revelação
      gsap.utils.toArray('.reveal-text').forEach((element: any) => {
        gsap.fromTo(element,
          {
            backgroundSize: '0% 100%'
          },
          {
            backgroundSize: '100% 100%',
            duration: 1.5,
            ease: 'power2.inOut' as const,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%'
            }
          }
        );
      });

      // Animação de linha decorativa
      gsap.utils.toArray('.line-animation').forEach((element: any) => {
        gsap.fromTo(element,
          {
            scaleX: 0,
            transformOrigin: 'left center'
          },
          {
            scaleX: 1,
            duration: 1,
            ease: 'power2.inOut' as const,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%'
            }
          }
        );
      });

      // Animação de números contadores
      gsap.utils.toArray('.counter').forEach((element: any) => {
        const target = parseInt(element.getAttribute('data-target')) || 0;
        gsap.fromTo(element,
          {
            textContent: 0
          },
          {
            textContent: target,
            duration: 2,
            ease: 'power1.in' as const,
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: element,
              start: 'top 80%'
            }
          }
        );
      });

      // Animação de movimento flutuante
      gsap.utils.toArray('.float').forEach((element: any) => {
        gsap.to(element, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut' as const
        });
      });

      // Animação de cards com stagger
      const cards = gsap.utils.toArray('.stagger-card') as HTMLElement[];
      if (cards.length > 0) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out' as const,
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 80%'
            }
          }
        );
      }

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useMouseFollower = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      width: 20px;
      height: 20px;
      border: 2px solid var(--primary-cyan);
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1
      });
    };

    const growCursor = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.2
      });
    };

    const shrinkCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2
      });
    };

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', growCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', growCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
      document.body.removeChild(cursor);
    };
  }, []);
};