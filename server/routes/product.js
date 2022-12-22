const express = require('express');
const router = express.Router();
const { Product } = require('../models/product');

router.get('/', async (_, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(400).json({ msg: 'something went wrong!', error });
  }
});

module.exports = router;
