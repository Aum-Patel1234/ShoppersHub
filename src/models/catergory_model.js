const mongoose = require('mongoose');

// Define the Category Schema
const categorySchema = new mongoose.Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;