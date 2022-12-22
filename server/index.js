const express = require('express');
var cors = require('cors');
const products = require('./routes/product');
const initDb = require('./config/initDb');
const app = express();
const port = 3000;

app.use(cors());

require('dotenv').config();

initDb()
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.use('/products', products);

app.get('*', (req, res) => {
  res.send('Welcome to Catalyst Assessment - M Usman');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
