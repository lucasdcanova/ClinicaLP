import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  placeholder?: string;
}

const ImageWrapper = styled.div<{ aspectRatio?: number }>`
  position: relative;
  overflow: hidden;
  ${props => props.aspectRatio && `
    padding-bottom: ${(1 / props.aspectRatio) * 100}%;
  `}
`;

const StyledImage = styled.img<{ isLoaded: boolean }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  ${props => props.width && props.height && `
    position: absolute;
    top: 0;
    left: 0;
  `}
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  className,
  sizes,
  srcSet,
  onLoad,
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading === 'eager') {
      setIsIntersecting(true);
      return;
    }

    const options = {
      rootMargin: '50px',
      threshold: 0.01
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observerRef.current?.disconnect();
      }
    }, options);

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const aspectRatio = width && height ? width / height : undefined;

  return (
    <ImageWrapper aspectRatio={aspectRatio} className={className}>
      {!isLoaded && <Placeholder />}
      <StyledImage
        ref={imgRef}
        src={isIntersecting ? src : placeholder || ''}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        sizes={sizes}
        srcSet={isIntersecting ? srcSet : undefined}
        onLoad={handleLoad}
        isLoaded={isLoaded}
      />
    </ImageWrapper>
  );
};

export default OptimizedImage;