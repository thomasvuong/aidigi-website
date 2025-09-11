// Minimal Next.js custom server for cPanel Node.js App
// Uses the assigned PORT from the environment (Passenger) or falls back to 3000 locally

const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '127.0.0.1';
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      handle(req, res);
    });

    server.listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`> Next.js app ready on http://${hostname}:${port} (env: ${process.env.NODE_ENV || 'development'})`);
    });
  })
  .catch((err) => {
    console.error('Error starting Next.js server:', err);
    process.exit(1);
  });


