const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy static assets
const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

// Copy wwwroot contents to dist
const wwwrootPath = path.join(__dirname, 'PortfolioApp', 'wwwroot');
if (fs.existsSync(wwwrootPath)) {
  copyDirectory(wwwrootPath, distDir);
}

// Copy index.html to dist
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(distDir, 'index.html'));
}

// Copy manifest.json to dist
const manifestPath = path.join(__dirname, 'manifest.json');
if (fs.existsSync(manifestPath)) {
  fs.copyFileSync(manifestPath, path.join(distDir, 'manifest.json'));
}

// Copy frontend-static content
const frontendStaticPath = path.join(__dirname, 'PortfolioApp', 'frontend-static');
if (fs.existsSync(frontendStaticPath)) {
  const files = fs.readdirSync(frontendStaticPath);
  files.forEach(file => {
    const srcPath = path.join(frontendStaticPath, file);
    const destPath = path.join(distDir, file);
    fs.copyFileSync(srcPath, destPath);
  });
}

console.log('Static build completed successfully!');