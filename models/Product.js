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
	'product_image': {
		'name': String,
		'path': String
	},
	'product_image_2': {
		'name': String,
		'path': String
	},
	'product_image_3': {
		'name': String,
		'path': String
	},
	'product_image_4': {
		'name': String,
		'path': String
	},
	'color_image': {
		'name': String,
		'path': String
	},
	'related_products': []
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;