const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
	'id': String,
	'title': String,
	'description': String,
	'mpn': String,
	'price': Number,
	'sale_price': Number,
	'product_type': String,
  	'color': String,
	'size': String,
	'product_image': String,
	'product_image_2': String,
	'product_image_3': String,
	'product_image_4': String,
	'color_image': String,
	'related_products': []
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;