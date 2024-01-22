// server.js
const express = require('express');
const cors = require('cors');
// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/messages/unread', (req, res) => {
  const generateFakeMessage = () => ({
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: faker.lorem.words(3),
    body: faker.lorem.paragraph(),
    received: Math.floor(Date.now() / 1000),
  });

  const fakeMessages = Array.from({ length: 1 }, generateFakeMessage);
  const response = { status: 'ok', messages: fakeMessages };
  res.json(response);
});

app.listen(port, () => {});
