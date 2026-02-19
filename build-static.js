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

// Copy index.html to dist and fix CSS paths
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
  let htmlContent = fs.readFileSync(indexPath, 'utf8');
  // Fix CSS path for production
  htmlContent = htmlContent.replace(
    './PortfolioApp/wwwroot/css/site.css',
    './css/site.css'
  );
  htmlContent = htmlContent.replace(
    './PortfolioApp/wwwroot/css/boxicons.css',
    './css/boxicons.css'
  );
  htmlContent = htmlContent.replace(
    './PortfolioApp/wwwroot/js/',
    './js/'
  );
  fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);
}

// Copy manifest.json to dist
const manifestPath = path.join(__dirname, 'manifest.json');
if (fs.existsSync(manifestPath)) {
  fs.copyFileSync(manifestPath, path.join(distDir, 'manifest.json'));
}

// Copy frontend-static content (skip index.html to avoid overwriting main index)
const frontendStaticPath = path.join(__dirname, 'PortfolioApp', 'frontend-static');
if (fs.existsSync(frontendStaticPath)) {
  const files = fs.readdirSync(frontendStaticPath);
  files.forEach(file => {
    if (file.toLowerCase() === 'index.html') return; // keep root index.html as source of truth
    const srcPath = path.join(frontendStaticPath, file);
    const destPath = path.join(distDir, file);
    fs.copyFileSync(srcPath, destPath);
  });
}

// Fix CSS paths in dist/index.html (final step after all copies)
const distIndexPath = path.join(distDir, 'index.html');
if (fs.existsSync(distIndexPath)) {
  let htmlContent = fs.readFileSync(distIndexPath, 'utf8');
  // Fix CSS and JS paths for production
  htmlContent = htmlContent.replace(
    /\.\/PortfolioApp\/wwwroot\/css\//g,
    './css/'
  );
  htmlContent = htmlContent.replace(
    /\.\/PortfolioApp\/wwwroot\/js\//g,
    './js/'
  );
  fs.writeFileSync(distIndexPath, htmlContent);
}

console.log('Static build completed successfully!');