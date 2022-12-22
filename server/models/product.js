const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  details: String,
});

const Product = mongoose.model('products', productSchema);

module.exports = { Product };
