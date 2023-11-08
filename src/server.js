require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.APP_PORT || 3333;

const { listUserHandler } = require('./handlers/User/listUsers');
const { createUserHandler } = require('./handlers/User/createUser');

app.use(express.json());

app.get('/user', listUserHandler);
app.post('/user', createUserHandler);

app.listen(PORT, () => {
  console.log(`Api running on port: ${PORT}`);
});