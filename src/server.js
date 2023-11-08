const express = require('express');
const app = express();
require('dotenv').config();


app.listen(process.env.APP_PORT, () => {
  console.log(`Api running on port: ${process.env.APP_PORT}`)
});