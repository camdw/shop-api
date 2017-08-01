const orderSchema = new Schema({
  'user_id': String,
  'order_items': [{'type': Schema.Types.ObjectId, 'ref': 'Product'}],
  'total': Number,
  'timestamps': {
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
  }
});