const fs = require('fs');
const path = require('path');

const filesToPatch = [
  'node_modules/html2canvas/dist/html2canvas.esm.js',
  'node_modules/html2canvas/dist/html2canvas.js',
  'node_modules/html2canvas/dist/html2canvas.min.js',
  'node_modules/html2pdf.js/dist/html2pdf.bundle.js'
];

// Also find any files in node_modules/.vite/deps
const viteDepsDir = path.resolve(__dirname, '../node_modules/.vite/deps');
if (fs.existsSync(viteDepsDir)) {
  const deps = fs.readdirSync(viteDepsDir);
  deps.forEach(file => {
    if (file.includes('html2pdf') || file.includes('html2canvas')) {
      filesToPatch.push(`node_modules/.vite/deps/${file}`);
    }
  });
}

filesToPatch.forEach((relPath) => {
  const fullPath = path.resolve(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // 1. Patch throwing unsupported color function error
  const throwPatterns = [
    /throw new Error\(["']Attempting to parse an unsupported color function [^"']+["']\);?/g,
    /throw new Error\(\\"Attempting to parse an unsupported color function \\"[^"]+\\"\);?/g,
    /throw new Error\(`Attempting to parse an unsupported color function \$\{[^}]+\}\`;?/g
  ];

  throwPatterns.forEach((pattern) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, 'return (pack ? pack(30, 41, 59, 1) : 0);');
      modified = true;
    }
  });

  // Also catch generic Attempting to parse an unsupported color function in bundled code
  if (content.includes('Attempting to parse an unsupported color function')) {
    content = content.replace(/throw\s+new\s+Error\([^)]+unsupported color function[^)]+\);?/g, 'return (pack ? pack(30, 41, 59, 1) : 0);');
    modified = true;
  }

  // 2. Add oklch, oklab, lab, color support to SUPPORTED_COLOR_FUNCTIONS if present
  if (content.includes('SUPPORTED_COLOR_FUNCTIONS = {') && !content.includes('oklab:')) {
    content = content.replace(
      'SUPPORTED_COLOR_FUNCTIONS = {',
      'SUPPORTED_COLOR_FUNCTIONS = {\n        oklch: function(_c, _a) { return pack(185, 28, 28, 1); },\n        oklab: function(_c, _a) { return pack(30, 41, 59, 1); },\n        lab: function(_c, _a) { return pack(30, 41, 59, 1); },\n        color: function(_c, _a) { return pack(30, 41, 59, 1); },'
    );
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Successfully patched: ${relPath}`);
  }
});
