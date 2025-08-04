import { useEffect, useRef, useCallback } from 'react';

interface AnimationResult {
  index: number;
  transform: string;
  opacity: string;
  filter: string;
}

export const useAnimationWorker = () => {
  const workerRef = useRef<Worker | null>(null);
  const pendingCallbackRef = useRef<((results: AnimationResult[]) => void) | null>(null);

  useEffect(() => {
    // Create worker
    const workerCode = `
      self.addEventListener('message', (e) => {
        const { type, data } = e.data;
        
        if (type === 'calculateParticleAnimation') {
          const results = data.map(particle => {
            const { index, clientX, clientY, rect, particleRect } = particle;
            
            const particleCenterX = particleRect.left + particleRect.width / 2;
            const particleCenterY = particleRect.top + particleRect.height / 2;
            
            const deltaX = clientX - particleCenterX;
            const deltaY = clientY - particleCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            const maxDistance = 600;
            const force = Math.max(0, 1 - distance / maxDistance);
            const speed = (index % 3 + 1) * 0.35;
            
            const paradoxFactor = -0.8;
            const moveX = deltaX * force * speed * paradoxFactor;
            const moveY = deltaY * force * speed * paradoxFactor;
            
            const scale = 1 + force * 0.8;
            
            return {
              index,
              transform: \`translate3d(\${moveX}px, \${moveY}px, 0) scale(\${scale})\`,
              opacity: \`\${0.3 + force * 0.7}\`,
              filter: \`blur(\${4 + (1 - force) * 12}px)\`
            };
          });
          
          self.postMessage({ type: 'animationCalculated', results });
        }
      });
    `;
    
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    workerRef.current = new Worker(workerUrl);
    
    workerRef.current.addEventListener('message', (e: MessageEvent) => {
      if (e.data.type === 'animationCalculated' && pendingCallbackRef.current) {
        pendingCallbackRef.current(e.data.results);
        pendingCallbackRef.current = null;
      }
    });
    
    return () => {
      workerRef.current?.terminate();
      URL.revokeObjectURL(workerUrl);
    };
  }, []);

  const calculateAnimations = useCallback((particleData: any[], callback: (results: AnimationResult[]) => void) => {
    if (workerRef.current) {
      pendingCallbackRef.current = callback;
      workerRef.current.postMessage({
        type: 'calculateParticleAnimation',
        data: particleData
      });
    }
  }, []);

  return { calculateAnimations };
};