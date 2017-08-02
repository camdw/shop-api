const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dynamicshop');

const Product = require('../models/Product');


const products = [
//DRESS 1 WWE078
  {
  'mpn': 'WWE078',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Dress',
  'color': [{
    'name': 'Intense Yellow',
    'code': '108'
  },
  {
    'name': 'Dark Red',
    'code': '450'
  },
  {
    'name': 'Black',
    'code': '999'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


//DRESS 2 WWE087
{
  'mpn': 'WWE087',
	'title': 'Kimono dress',
	'description': 'Wrapped kimono dress. Fasten on side with tie belt in the same fabric and inner button. Length 92cm in size 38',
	'price': 79.90,
	'sale_price': 39.95,
	'product_type': 'Dress',
  'color': [{
    'name': 'Ink Blue',
    'code': '137'
  },
  {
    'name': 'Medium Pink',
    'code': '440'
  },
  {
    'name': 'Shiny Green',
    'code': '513'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


//DRESS 3
{
  'mpn': 'WKE379',
	'title': 'Jacquard Flower Tunic',
	'description': 'Sleeveless tunic. V-neck and back. Floral jacquard. Split sides.',
	'price': 79.90,
	'sale_price': 31.95,
	'product_type': 'Dress',
  'color': [{
    'name': 'Cobalt Blue',
    'code': '138'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


  /// SHOES /////



 /// SHOE 1  WSE487
 {
  'mpn': 'WSE487',
	'title': 'Mule sandals',
	'description': 'Leather clog // 9 cm block high heel and 3,5 cm platform // Made in Spain',
	'price': 99.90,
	'sale_price': 39.95,
	'product_type': 'Shoes',
  'color': [{
    'name': 'Red',
    'code': '250'
  },
  {
    'name': 'Ink Blue',
    'code': '137'
  }],
	'size': ['37', '38', '39', '40'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },




  //SHOE 2
  {
  'mpn': 'ZSE013',
	'title': 'Jute Sneakers',
	'description': 'Print espadrille trainers // 2,5 cm woven-jute flatform // Made in Spain',
  'price': 65.00,
	'sale_price': 39.00,
	'product_type': 'Shoes',
  'color': [{
    'name': 'Ink Blue',
    'code': '137'
  },
  {
    'name': 'White',
    'code': '000'
  }],
	'size': ['37', '38', '39', '40'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


  //SHOE 3

  {
  'mpn': 'WSE488',
	'title': 'Crossover sandals',
	'description': 'Cross-over sandals in suede // Heel: 5 cm // Made in Spain',
	'price': 119.00,
	'sale_price': 59.95,
	'product_type': 'Shoes',
  'color': [{
    'name': 'Old Gold',
    'code': '801'
  },
  {
    'name': 'Cinnamon',
    'code': '369'
  },
  {
    'name': 'Dark Mint',
    'code': '520'
  },
{
    'name': 'Coral',
    'code': '438'
  }],
	'size': ['37', '38', '39', '40'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },

  
  ///BAGS

  //BAG 1
  {
  'mpn': 'WBE292',
	'title': 'Fabric bagpack',
	'description': 'W: 32cm (26cm bottom width) x H: 37cm x D: 13cm // Canvas backpack with polyurethane base, zip fastening and small front pocket. Interior pockets.',
  'price': 65.00,
	'sale_price': 32.50,
	'product_type': 'Bag',
  'color': [{
    'name': 'Ecru',
    'code': '620'
  },
  {
    'name': 'Ink Blue',
    'code': '137'
  }],
	'size': ['U'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },

 
  //BAG 2
  {
  'mpn': 'WBE302',
	'title': 'Structured sling with ring',
	'description': 'W: 24cm x H: 17cm x D: 5cm // Crossbody bag with horse leather flap-top and metal ring. Magnetic fastening. Long detachable and adjustable strap and inner pockets.',
  'price': 69.90,
	'sale_price': 34.95,
	'product_type': 'Bag',
  'color': [{
    'name': 'Cobalt Blue',
    'code': '138'
  },
  {
    'name': 'Dark Red',
    'code': '450'
  }],
	'size': ['U'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
  

  //BAG 3
  {
  'mpn': 'WBE298',
	'title': 'Structured sling with ring',
	'description': 'W: 24cm x H: 17cm x D: 5cm // Crossbody bag with horse leather flap-top and metal ring. Magnetic fastening. Long detachable and adjustable strap and inner pockets.',
  'price': 69.90,
	'sale_price': 34.95,
	'product_type': 'Bag',
  'color': [{
    'name': 'Grey',
    'code': '204'
  },
  {
    'name': 'Coral',
    'code': '438'
  }],
	'size': ['U'],
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
