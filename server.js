// server.js
const { createServer } = require('http');
const app = require('./api/messages');

const server = createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
