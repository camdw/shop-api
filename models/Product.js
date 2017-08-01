const productSchema = new Schema({
	'id': String,
	'title': String,
	'description': String,
	'mpn': String,
	'image_link': String,
	'additional_image_link': [],
	'price': Number,
	'sale_price': Number,
	'product_type': String,
  'color': String,
	'size': String,
	'related_products': []
});