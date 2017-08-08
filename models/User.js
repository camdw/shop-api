const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  'email': String,
  'password': String,
  'firstname': String,
  'lastname': String,
  'address': {
    'street': String,
    'postal_code': String,
    'city': String,
  },
  'past_orders': [{'type': Schema.Types.ObjectId, 'ref': 'Order'}],
  'favourite_products': [{'type': Schema.Types.ObjectId, 'ref': 'Product'}],
  'visited_products': [{'type': Schema.Types.ObjectId, 'ref': 'Product'}],
  'current_cart': [{
    'productId': String,
    'productSku': String,
    'ordered_color': String,
    'ordered_size': String,
    'quantity': Number,
    'product_price': Number,
    'total_price': Number}],
  'sizes': {
    'tops': [],
    'trousers': [],
    'dresses': [],
    'shoes': []
  },
  'colours': [],
  'price_behaviour': {
    'full_price_frequency': Number,
    'sale_price_frequency': Number,
    'average_price': Number,
    'average_discount': Number
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;