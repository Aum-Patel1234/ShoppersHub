const mongoose = require('mongoose');
import {Product} from "./product_model"

// Define the Address Schema
const addressSchema = new mongoose.Schema({
  street: { type: String, },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true }
});

// Define the Order Schema
const orderSchema = new mongoose.Schema({
  productId: { type: Number, required: true , unique: true},
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' }
});

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  addresses: [addressSchema],
  isAdmin: { type: Boolean, default: false },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  orderHistory: [orderSchema],
  wishlist: [Product],
  dateJoined: { type: Date, default: Date.now }
});

// Hash password before saving (optional)
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   // Hash password logic here (e.g., bcrypt)
//   next();
// });

// Create the User Model
const User = mongoose.model('User', userSchema);

module.exports = User;