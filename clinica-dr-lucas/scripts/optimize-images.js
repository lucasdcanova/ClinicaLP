const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const files = await fs.readdir(publicDir);
  
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('logo192') && !file.includes('logo512')
  );
  
  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const baseName = path.basename(file, path.extname(file));
    
    try {
      // Create WebP version
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(path.join(publicDir, `${baseName}.webp`));
      
      // Create optimized JPEG/PNG
      if (file.endsWith('.png')) {
        await sharp(inputPath)
          .png({ quality: 85, compressionLevel: 9 })
          .toFile(path.join(publicDir, `${baseName}-optimized.png`));
      } else {
        await sharp(inputPath)
          .jpeg({ quality: 85, progressive: true })
          .toFile(path.join(publicDir, `${baseName}-optimized.jpg`));
      }
      
      console.log(`✓ Optimized ${file}`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }
}

optimizeImages().then(() => {
  console.log('Image optimization complete!');
}).catch(console.error);