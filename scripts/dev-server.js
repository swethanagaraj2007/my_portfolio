const http = require('http');
const fs = require('fs');
const path = require('path');

let port = parseInt(process.env.PORT, 10) || 3000;
const HOST = '127.0.0.1';
const ROOT_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let cleanUrl = decodeURI(req.url.split('?')[0]);
  if (cleanUrl === '/') {
    cleanUrl = '/index.html';
  }

  // Prevent directory traversal
  const safePath = path.normalize(cleanUrl).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 48px;">
          <h1>404 — Not Found</h1>
          <p>The requested file <code>${cleanUrl}</code> could not be found.</p>
          <a href="/">← Return to Portfolio</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

function startServer(attemptPort) {
  server.removeAllListeners('error');
  
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️  Port ${attemptPort} is already in use. Trying port ${attemptPort + 1}...`);
      startServer(attemptPort + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(attemptPort, HOST, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Swetha N. Developer Portfolio is live!`);
    console.log(`👉 Local: http://localhost:${attemptPort}`);
    console.log(`👉 Host:  http://${HOST}:${attemptPort}`);
    console.log(`Press Ctrl+C anytime to stop.`);
    console.log(`======================================================\n`);
  });
}

startServer(port);
