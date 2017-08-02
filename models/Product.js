const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	'mpn': String,
	'title': String,
	'description': String,
	'price': Number,
	'sale_price': Number,
	'product_type': String,
  	'color': [{
		'name': String,
		'code': String
	  }],
	'size': [],
	'related_products': []
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;