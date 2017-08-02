const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dynamicshop');

const Product = require('../models/Product');


const products = [
//DRESS 1 WWE078
  {
    'id': 'WWE07810836',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Intense Yellow',
	'size': '36',
    'product_image': {
      'name': 'WWE078108_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078108_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078108_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078108_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078108_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_108.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07810838',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Intense Yellow',
	'size': '38',
    'product_image': {
      'name': 'WWE078108_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078108_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078108_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078108_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078108_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_108.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07810840',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Intense Yellow',
	'size': '40',
    'product_image': {
      'name': 'WWE078108_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078108_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078108_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078108_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078108_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_108.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07810842',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Intense Yellow',
	'size': '42',
    'image': {
      'name': 'WWE078108',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_108_M.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07845036',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Dark Red',
	'size': '36',
    'product_image': {
      'name': 'WWE078450_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078450_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078450_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078450_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078450_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_450.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07845038',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Dark Red',
	'size': '38',
    'product_image': {
      'name': 'WWE078450_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078450_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078450_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078450_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078450_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_450.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07845040',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Dark Red',
	'size': '40',
    'product_image': {
      'name': 'WWE078450_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078450_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078450_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078450_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078450_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_450.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07845042',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Dark Red',
	'size': '42',
    'product_image': {
      'name': 'WWE078450_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078450_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078450_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078450_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_450_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078450_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_108.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07899936',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Black',
	'size': '36',
    'product_image': {
      'name': 'WWE078999_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078999_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078999_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078999_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078999_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_999.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07899938',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Black',
	'size': '38',
    'product_image': {
      'name': 'WWE078999_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078999_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078999_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078999_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078999_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_999.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07899940',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Black',
	'size': '40',
    'product_image': {
      'name': 'WWE078999_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078999_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078999_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078999_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078999_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_999.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE07899942',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'mpn': 'WWE078',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
    'color': 'Black',
	'size': '42',
    'product_image': {
      'name': 'WWE078999_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078999_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078999_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078999_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_999_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078999_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_999.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },

////



//DRESS 2 WWE087
{
    'id': 'WWE08713736',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Ink Blue',
	'size': '36',
    'product_image': {
      'name': 'WWE087137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08713738',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Ink Blue',
	'size': '38',
   'product_image': {
      'name': 'WWE087137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08713740',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Ink Blue',
	'size': '40',
    'product_image': {
      'name': 'WWE087137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08713742',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Ink Blue',
	'size': '42',
    'product_image': {
      'name': 'WWE087137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08744036',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Medium Pink',
	'size': '36',
    'product_image': {
      'name': 'WWE087440_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087440_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087440_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087440_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087440_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_440.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08744038',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Medium Pink',
	'size': '38',
    'product_image': {
      'name': 'WWE087440_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087440_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087440_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087440_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087440_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_440.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08744040',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Medium Pink',
	'size': '40',
    'product_image': {
      'name': 'WWE087440_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087440_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087440_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087440_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087440_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_440.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08744042',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Medium Pink',
	'size': '42',
   'product_image': {
      'name': 'WWE087440_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE087440_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE087440_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE087440_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE087_440_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE087440_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE087_440.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08751336',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Shiny Green',
	'size': '36',
   'product_image': {
      'name': 'WWE078513_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078513_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078513_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078513_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078513_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_513.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08751338',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Shiny Green',
	'size': '38',
    'product_image': {
      'name': 'WWE078513_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078513_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078513_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078513_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078513_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_513.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08751340',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Shiny Green',
	'size': '40',
    'product_image': {
      'name': 'WWE078513_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078513_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078513_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078513_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078513_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_513.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WWE08751342',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'mpn': 'WWE087',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
    'color': 'Shiny Green',
	'size': '42',
    'product_image': {
      'name': 'WWE078513_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_M.jpg'
    },
    'product_image_2': {
      'name': 'WWE078513_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WWE078513_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WWE078513_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WWE078_513_4_M.jpg'
    },
    'color_image': {
      'name': 'WWE078513_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WWE078_513.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
////////////////////




//DRESS 3
{
    'id': 'WKE37913836',
	'title': 'Jacquard Flower Tunic',
	'description': 'Sleeveless tunic. V-neck and back. Floral jacquard. Split sides.',
	'mpn': 'WKE379',
	'price': 79.90,
	'sale_price': 31.95,
	'product_type': 'Dress',
    'color': 'Cobalt Blue',
	'size': '36',
    'product_image': {
      'name': 'WKE379138_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_M.jpg'
    },
    'product_image_2': {
      'name': 'WKE379138_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WKE379138_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WKE379138_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_4_M.jpg'
    },
    'color_image': {
      'name': 'WKE379138_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WKE379_138.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WKE37913838',
	'title': 'Jacquard Flower Tunic',
	'description': 'Sleeveless tunic. V-neck and back. Floral jacquard. Split sides.',
	'mpn': 'WKE379',
	'price': 79.90,
	'sale_price': 31.95,
	'product_type': 'Dress',
    'color': 'Cobalt Blue',
	'size': '38',
   'product_image': {
      'name': 'WKE379138_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_M.jpg'
    },
    'product_image_2': {
      'name': 'WKE379138_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WKE379138_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WKE379138_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_4_M.jpg'
    },
    'color_image': {
      'name': 'WKE379138_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WKE379_138.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WKE37913840',
	'title': 'Jacquard flower Tunic',
	'description': 'Sleeveless tunic. V-neck and back. Floral jacquard. Split sides.',
	'mpn': 'WKE379',
	'price': 79.90,
	'sale_price': 31.95,
	'product_type': 'Dress',
    'color': 'Cobalt Blue',
	'size': '40',
    'product_image': {
      'name': 'WKE379138_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_M.jpg'
    },
    'product_image_2': {
      'name': 'WKE379138_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WKE379138_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WKE379138_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_4_M.jpg'
    },
    'color_image': {
      'name': 'WKE379138_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WKE379_138.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WKE37913842',
	'title': 'Jacquard Flower Tunic',
	'description': 'Sleeveless tunic. V-neck and back. Floral jacquard. Split sides.',
	'mpn': 'WKE379',
	'price': 79.90,
	'sale_price': 31.95,
	'product_type': 'Dress',
    'color': 'Cobalt Blue',
	'size': '42',
   'product_image': {
      'name': 'WKE379138_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_M.jpg'
    },
    'product_image_2': {
      'name': 'WKE379138_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WKE379138_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WKE379138_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WKE379_138_4_M.jpg'
    },
    'color_image': {
      'name': 'WKE379138_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WKE379_138.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },





  /// SHOES /////



 /// SHOE 1  WSE487
{
    'id': 'WSE48725037',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Red',
	'size': '37',
   'product_image': {
      'name': 'WSE487250_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487250_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487250_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487250_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487250_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_250.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48725038',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Red',
	'size': '38',
   'product_image': {
      'name': 'WSE487250_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487250_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487250_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487250_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487250_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_250.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48725039',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Red',
	'size': '39',
   'product_image': {
      'name': 'WSE487250_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487250_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487250_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487250_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487250_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_250.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48725040',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Red',
	'size': '40',
   'product_image': {
      'name': 'WSE487250_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487250_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487250_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487250_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_250_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487250_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_250.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48713737',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '37',
   'product_image': {
      'name': 'WSE487137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48713738',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '38',
   'product_image': {
      'name': 'WSE487137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48713739',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '39',
   'product_image': {
      'name': 'WSE487137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48713740',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'mpn': 'WSE487',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '40',
   'product_image': {
      'name': 'WSE487137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE487137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE487137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE487137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE487_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE487137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE487_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


  //SHOE 2
  
  {
    'id': 'ZSE01313737',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '37',
   'product_image': {
      'name': 'ZSE013137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01313738',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '38',
   'product_image': {
      'name': 'ZSE013137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01313739',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '39',
   'product_image': {
      'name': 'ZSE013137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01313740',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'Ink Blue',
	'size': '40',
   'product_image': {
      'name': 'ZSE013137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_137_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01300037',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'White',
	'size': '37',
   'product_image': {
      'name': 'ZSE013000_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013000_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013000_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013000_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013000_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_000.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01300038',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'White',
	'size': '38',
   'product_image': {
      'name': 'ZSE013000_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013000_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013000_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013000_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013000_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_000.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01300039',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'White',
	'size': '39',
   'product_image': {
      'name': 'ZSE013000_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013000_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013000_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013000_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013000_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_000.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'ZSE01300040',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
	'mpn': 'ZSE013',
	'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
    'color': 'White',
	'size': '40',
   'product_image': {
      'name': 'ZSE013000_1',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_M.jpg'
    },
    'product_image_2': {
      'name': 'ZSE013000_2',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_2_M.jpg'
    },
    'product_image_3': {
      'name': 'ZSE013000_3',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_3_M.jpg'
    },
    'product_image_4': {
      'name': 'ZSE013000_4',
      'path': 'http://images.nicethings.es/ecommerce/024/ZSE013_000_4_M.jpg'
    },
    'color_image': {
      'name': 'ZSE013000_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/ZSE013_000.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },

  //SHOE 3

  {
    'id': 'WSE48871137',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Old Gold',
	'size': '37',
   'product_image': {
      'name': 'WSE488711_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488711_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488711_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488711_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488711_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_711.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48871138',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Old Gold',
	'size': '38',
   'product_image': {
      'name': 'WSE488711_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488711_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488711_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488711_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488711_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_711.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48871139',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Old Gold',
	'size': '39',
   'product_image': {
      'name': 'WSE488711_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488711_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488711_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488711_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488711_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_711.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48871140',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Old Gold',
	'size': '40',
   'product_image': {
      'name': 'WSE488711_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488711_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488711_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488711_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_711_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488711_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_711.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48836937',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Cinnamon',
	'size': '37',
   'product_image': {
      'name': 'WSE488369_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488369_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488369_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488369_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488369_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_369.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48836938',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Cinnamon',
	'size': '38',
   'product_image': {
      'name': 'WSE488369_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488369_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488369_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488369_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488369_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_369.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48836939',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Cinnamon',
	'size': '39',
   'product_image': {
      'name': 'WSE488369_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488369_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488369_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488369_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488369_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_369.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48836940',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Cinnamon',
	'size': '40',
   'product_image': {
      'name': 'WSE488369_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488369_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488369_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488369_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_369_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488369_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_369.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48852037',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Dark Mint',
	'size': '37',
   'product_image': {
      'name': 'WSE488520_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488520_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488520_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488520_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488520_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_520.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48852038',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Dark Mint',
	'size': '38',
   'product_image': {
      'name': 'WSE488520_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488520_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488520_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488520_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488520_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_520.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48852039',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Dark Mint',
	'size': '39',
   'product_image': {
      'name': 'WSE488520_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488520_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488520_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488520_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488520_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_520.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48852040',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Dark Mint',
	'size': '40',
   'product_image': {
      'name': 'WSE488520_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488520_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488520_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488520_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_520_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488520_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_520.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48843837',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Coral',
	'size': '37',
   'product_image': {
      'name': 'WSE488438_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488438_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488438_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488438_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488438_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_438.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48843838',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Coral',
	'size': '38',
   'product_image': {
      'name': 'WSE488438_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488438_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488438_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488438_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488438_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_438.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48843839',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Coral',
	'size': '39',
   'product_image': {
      'name': 'WSE488438_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488438_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488438_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488438_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488438_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_438.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WSE48843840',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'mpn': 'WSE488',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
    'color': 'Coral',
	'size': '40',
   'product_image': {
      'name': 'WSE488438_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_M.jpg'
    },
    'product_image_2': {
      'name': 'WSE488438_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WSE488438_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WSE488438_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WSE488_438_4_M.jpg'
    },
    'color_image': {
      'name': 'WSE488438_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WSE488_438.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },




  ///BAGS

  //BAG 1
  {
    'id': 'WBE292620U',
	'title': 'Fabric bagpack',
	'description': 'W: 32cm (26cm bottom width) x H: 37cm x D: 13cm // Canvas backpack with polyurethane base, zip fastening and small front pocket. Interior pockets.',
	'mpn': 'WBE292',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Bag',
    'color': 'Ecru',
	'size': 'U',
   'product_image': {
      'name': 'WBE292620_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_620_M.jpg'
    },
    'product_image_2': {
      'name': 'WBE292620_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_620_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WBE292620_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_620_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WBE292620_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_620_4_M.jpg'
    },
    'color_image': {
      'name': 'WBE292620_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WBE292_620.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WBE292137U',
	'title': 'Fabric bagpack',
	'description': 'W: 32cm (26cm bottom width) x H: 37cm x D: 13cm // Canvas backpack with polyurethane base, zip fastening and small front pocket. Interior pockets.',
	'mpn': 'WBE292',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Bag',
    'color': 'Ink Blue',
	'size': 'U',
   'product_image': {
      'name': 'WBE292137_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_137_M.jpg'
    },
    'product_image_2': {
      'name': 'WBE292137_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_137_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WBE292137_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_137_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WBE292137_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE292_137_4_M.jpg'
    },
    'color_image': {
      'name': 'WBE292137_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WBE292_137.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


  //BAG 2
  {
    'id': 'WBE302138U',
	'title': 'Structured sling with ring',
	'description': 'W: 24cm x H: 17cm x D: 5cm // Crossbody bag with horse leather flap-top and metal ring. Magnetic fastening. Long detachable and adjustable strap and inner pockets.',
	'mpn': 'WBE302',
	'price': 69.90,
	'sale_price': 34.95,
	'product_type': 'Bag',
    'color': 'Cobalt Blue',
	'size': 'U',
   'product_image': {
      'name': 'WBE302138_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_138_M.jpg'
    },
    'product_image_2': {
      'name': 'WBE302138_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_138_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WBE302138_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_138_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WBE302138_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_138_4_M.jpg'
    },
    'color_image': {
      'name': 'WBE302138_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WBE302_138.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WBE302450U',
	'title': 'Structured sling with ring',
	'description': 'W: 24cm x H: 17cm x D: 5cm // Crossbody bag with horse leather flap-top and metal ring. Magnetic fastening. Long detachable and adjustable strap and inner pockets.',
	'mpn': 'WBE302',
	'price': 69.90,
	'sale_price': 34.95,
	'product_type': 'Bag',
    'color': 'Dark Red',
	'size': 'U',
   'product_image': {
      'name': 'WBE302450_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_450_M.jpg'
    },
    'product_image_2': {
      'name': 'WBE302450_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_450_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WBE302450_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_450_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WBE302450_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE302_450_4_M.jpg'
    },
    'color_image': {
      'name': 'WBE302450_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WBE302_450.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },

  //BAG 3
  {
    'id': 'WBE298204U',
	'title': 'Structured sling with ring',
	'description': 'W: 24cm x H: 17cm x D: 5cm // Crossbody bag with horse leather flap-top and metal ring. Magnetic fastening. Long detachable and adjustable strap and inner pockets.',
	'mpn': 'WBE298',
	'price': 69.90,
	'sale_price': 34.95,
	'product_type': 'Bag',
    'color': 'Grey',
	'size': 'U',
   'product_image': {
      'name': 'WBE298204_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_204_M.jpg'
    },
    'product_image_2': {
      'name': 'WBE298204_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_204_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WBE298204_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_204_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WBE298204_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_204_4_M.jpg'
    },
    'color_image': {
      'name': 'WBE298204_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WBE298_204.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
{
    'id': 'WBE298438U',
	'title': 'Structured sling with ring',
	'description': 'W: 24cm x H: 17cm x D: 5cm // Crossbody bag with horse leather flap-top and metal ring. Magnetic fastening. Long detachable and adjustable strap and inner pockets.',
	'mpn': 'WBE298',
	'price': 69.90,
	'sale_price': 34.95,
	'product_type': 'Bag',
    'color': 'Coral',
	'size': 'U',
   'product_image': {
      'name': 'WBE298438_1',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_438_M.jpg'
    },
    'product_image_2': {
      'name': 'WBE298438_2',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_438_2_M.jpg'
    },
    'product_image_3': {
      'name': 'WBE298438_3',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_438_3_M.jpg'
    },
    'product_image_4': {
      'name': 'WBE298438_4',
      'path': 'http://images.nicethings.es/ecommerce/024/WBE298_438_4_M.jpg'
    },
    'color_image': {
      'name': 'WBE298438_color',
      'path': 'http://images.nicethings.es/ecommerce/opciones/WBE298_438.jpg'
    },
    'related_products': ['WSE461', 'WSE488', 'WBE305']
}]


Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((product) => {
    console.log('product uploaded')
  });
  mongoose.connection.close();
});
