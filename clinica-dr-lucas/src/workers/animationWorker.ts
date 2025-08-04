// Web Worker for heavy animation calculations

interface ParticleData {
  index: number;
  clientX: number;
  clientY: number;
  rect: DOMRect;
  particleRect: DOMRect;
}

interface AnimationResult {
  index: number;
  transform: string;
  opacity: string;
  filter: string;
}

self.addEventListener('message', (e: MessageEvent) => {
  const { type, data } = e.data;
  
  switch(type) {
    case 'calculateParticleAnimation':
      const results = calculateParticleAnimations(data);
      self.postMessage({ type: 'animationCalculated', results });
      break;
  }
});

function calculateParticleAnimations(particles: ParticleData[]): AnimationResult[] {
  return particles.map(particle => {
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
      transform: `translate3d(${moveX}px, ${moveY}px, 0) scale(${scale})`,
      opacity: `${0.3 + force * 0.7}`,
      filter: `blur(${4 + (1 - force) * 12}px)`
    };
  });
}

export {};