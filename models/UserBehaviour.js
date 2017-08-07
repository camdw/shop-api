const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userBehaviourSchema = new Schema({
  'user_id': {'type': Schema.Types.ObjectId, 'ref': 'User'},
  'past_orders': [{'type': Schema.Types.ObjectId, 'ref': 'Order'}],
  'favourite_products': [{'type': Schema.Types.ObjectId, 'ref': 'Product'}],
  'abandonned_cart': [{'type': Schema.Types.ObjectId, 'ref': 'Product'}],
  'visited_products': [{'type': Schema.Types.ObjectId, 'ref': 'Product'}],
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