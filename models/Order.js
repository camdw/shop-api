const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  'user_id': String,
  'order_items': [{
    'productId': Schema.Types.ObjectId,
    'ordered_color': String,
    'ordered_size': String,
    'quantity': Number,
  }],
  'total': Number,
});