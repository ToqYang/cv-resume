import { generateSitemap } from './sitemap.js';
import fs from 'fs';
import path from 'path';

// Generate sitemap
generateSitemap();

// Copy robots.txt to build directory if it exists in static folder
const staticRobotsPath = path.resolve('static', 'robots.txt');
const buildRobotsPath = path.resolve('build', 'robots.txt');

if (fs.existsSync(staticRobotsPath)) {
  fs.copyFileSync(staticRobotsPath, buildRobotsPath);
  console.log('robots.txt copied to build directory');
} else {
  console.warn('robots.txt not found in static directory');
}

console.log('Post-build tasks completed successfully!');