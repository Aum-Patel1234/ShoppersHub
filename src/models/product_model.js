const mongoose = require('mongoose');

// Define the Review Schema
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reviewerName: { type: String, default: "Anonymus" },
  reviewerEmail: { type: String, required: true }
});

// Define the Dimensions Schema
const dimensionsSchema = new mongoose.Schema({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  depth: { type: Number, required: true }
});

// Define the Meta Schema
const metaSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  barcode: { type: String, required: true },
  qrCode: { type: String, required: true }
});

// Define the Product Schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  tags: [String],
  brand: { type: String, required: true },
  sku: { type: String, required: true },
  weight: { type: Number, required: true },
  dimensions: dimensionsSchema,
  warrantyInformation: { type: String },
  shippingInformation: { type: String },
  availabilityStatus: { type: String, required: true },
  reviews: [reviewSchema],
  returnPolicy: { type: String, required: true },
  minimumOrderQuantity: { type: Number, required: true },
  meta: metaSchema,
  images: [String],
  thumbnail: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;