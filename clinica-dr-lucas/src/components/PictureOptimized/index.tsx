import React from 'react';

interface PictureOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  sizes?: string;
}

const PictureOptimized: React.FC<PictureOptimizedProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  className,
  sizes
}) => {
  // Extract filename without extension
  const filename = src.substring(0, src.lastIndexOf('.'));
  const extension = src.substring(src.lastIndexOf('.'));
  
  // Generate WebP and optimized versions
  const webpSrc = `${filename}.webp`;
  const optimizedSrc = extension === '.png' 
    ? `${filename}-optimized.png` 
    : `${filename}-optimized.jpg`;
  
  return (
    <picture className={className}>
      <source 
        srcSet={webpSrc} 
        type="image/webp"
        sizes={sizes}
      />
      <source 
        srcSet={optimizedSrc} 
        type={extension === '.png' ? 'image/png' : 'image/jpeg'}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </picture>
  );
};

export default PictureOptimized;