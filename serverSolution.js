const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle unhandled exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  server.close(() => {
    console.log('Server closed gracefully after uncaught exception.');
    process.exit(1);
  });
});

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  server.close(() => {
    console.log('Server closed gracefully after unhandled rejection.');
    process.exit(1);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
