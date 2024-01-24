// server.js
const express = require('express');
const cors = require('cors');
const faker = require('@faker-js/faker');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.options('/messages/unread', cors());
app.get('/messages/unread', (req, res) => {
  const generateFakeMessage = () => ({
    id: faker.string.uuid(),
    from: faker.internet.email(),
    subject: faker.lorem.words(3),
    body: faker.lorem.paragraph(),
    received: Math.floor(Date.now() / 1000),
  });
  app.get('/', (req, res) => {
    res.send('Привет, это ваш корневой путь!');
  });

  const fakeMessages = Array.from({ length: 1 }, generateFakeMessage);
  console.log(fakeMessages)
  const response = { status: 'ok', messages: fakeMessages };
  res.json(response);
});

app.listen(port, '0.0.0.0');