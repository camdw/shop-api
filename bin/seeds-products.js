const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const Product = require('../models/Product');


const products = [
//DRESS 1 WWE078
  {
  'mpn': 'WWE078',
	'title': 'Ruffle neckline bambula dress',
	'description': 'Cheese cloth dress, Frill collar. Ruched front. L: 88cm in size 38',
	'price': 65.00,
	'sale_price': 32.50,
	'category': 'Dresses',
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
	'category': 'Dresses',
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
	'category': 'Dresses',
  'color': [{
    'name': 'Cobalt Blue',
    'code': '138'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },



  /// TOPS ///

  //TOP 1 WWE610
  {
  'mpn': 'WWE610',
	'title': 'Fringes Top',
	'description': 'Half sleeve top and V-neck. Frayed hem. L: 56cm S/38',
	'price': 99.90,
	'sale_price': 49.95,
	'category': 'Tops',
  'color': [{
    'name': 'Dark Navy',
    'code': '135'
  },
  {
    'name': 'Ecru',
    'code': '621'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


//TOP 2 WWE288
{
  'mpn': 'WWE288',
	'title': '"Crazy Jungle" Printed Top',
	'description': '"Crazy Jungle" print sleeveless top. Square neck and V-back. Darts at bust. Split sides. L: 57 cm S/38',
	'price': 65.00,
	'sale_price': 32.50,
	'category': 'Tops',
  'color': [{
    'name': 'Aquamarine',
    'code': '500'
  },
  {
    'name': 'Dark Grey',
    'code': '209'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


//TOP 3 WWE088
{
  'mpn': 'WWE088',
	'title': 'Top With Ruffles',
	'description': 'Boatneck top, frill hem detail. Half sleeve with frill cuffs.',
	'price': 69.90,
	'sale_price': 34.95,
	'category': 'Tops',
  'color': [{
    'name': 'Light Aquamarine',
    'code': '501'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


  // SKIRTS //


  //SKIRT 1 WWE174
  {
  'mpn': 'WWE174',
	'title': '"Geometric Dots" Printed Skirt',
	'description': 'Cheese cloth skirt. "Geometric Dots" print. Side pockets. Stretch waist at back. Tie belt in the same fabric. Length 50cm in size 38',
	'price': 69.90,
	'sale_price': 34.95,
	'category': 'Skirts',
  'color': [{
    'name': 'Geometric Dots',
    'code': '521'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


//SKIRT 2 WJE552
{
  'mpn': 'WJE552',
	'title': 'Ribbed Midi Skirt',
	'description': 'Ribbed skirt in cotton. Midi length, concealed side zip.',
	'price': 50.00,
	'sale_price': 24.50,
	'category': 'Skirts',
  'color': [{
    'name': 'Dark Navy',
    'code': '135'
  }],
	'size': ['36', '38', '40', '42'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


//SKIRT 3 WWE289
{
  'mpn': 'WWE289',
	'title': '"Crazy Jungle" Cross Skirt',
	'description': 'Boatneck top, frill hem detail. Half sleeve with frill cuffs.',
	'price': 85.00,
	'sale_price': 51.00,
	'category': 'Skirts',
  'color': [{
    'name': 'Aquamarine',
    'code': '500'
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
	'category': 'Shoes',
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
	'category': 'Shoes',
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
	'category': 'Shoes',
  'color': [{
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
	'category': 'Bags',
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
	'category': 'Bags',
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
	'category': 'Bags',
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
  },


///Accessories

  //ACC 2
  {
  'mpn': 'WYE495',
	'title': 'Circles Necklace',
	'description': '62 cm // Enamel pendant // Composition: 100% Brass',
  'price': 40.90,
	'sale_price': 25.95,
	'category': 'Accessories',
  'color': [{
    'name': 'Light Pink',
    'code': '447'
  }],
	'size': ['U'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },
  

  //ACC 3
  {
  'mpn': 'WYE496',
	'title': 'Rings Necklace',
	'description': '62 cm // Enamel pendant // Composition: 100% Brass',
  'price': 69.90,
	'sale_price': 34.95,
	'category': 'Accessories',
  'color': [{
    'name': 'Aquamarine',
    'code': '500'
  },
  {
    'name': 'Mint',
    'code': '515'
  }],
	'size': ['U'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


   //ACC 4
  {
  'mpn': 'WYE499',
	'title': 'Geometric Earings',
	'description': 'Long earings, geometric shape. L. 7cm',
  'price': 39.90,
	'sale_price': 19.95,
	'category': 'Accessories',
  'color': [{
    'name': 'Aquamarine',
    'code': '500'
  },
  {
    'name': 'Pale Pink',
    'code': '515'
  },
  {
    'name': 'Off White',
    'code': '010'
  }],
	'size': ['U'],
  'related_products': ['WSE461', 'WSE488', 'WBE305']
  },


   //ACC 5
  {
  'mpn': 'WFE455',
	'title': 'Aminal Print Scarf',
	'description': '50 cm X 180 cm // Linen scarf in "ANIMAL PATCH PRINT" // Composition: 100% Linen',
  'price': 39.90,
	'sale_price': 19.95,
	'category': 'Accessories',
  'color': [{
    'name': 'Dark Red',
    'code': '450'
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
