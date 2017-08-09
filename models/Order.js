const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  'user_id': {'type': Schema.Types.ObjectId, 'ref': 'User'},
  'order_items': [{
    'productId': {'type': Schema.Types.ObjectId, 'ref': 'Product'},
    'ordered_color': String,
    'ordered_size': String,
  }],
  'total': Number,
}, { 'timestamps': {'createdAt': 'created_at'} });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;