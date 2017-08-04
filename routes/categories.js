var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

/* GET Category listing. */
router.get('/categories', (req, res, next) => {
  console.log(req)
  // Product.find((err, productList) => {
  //   if (err) {
  //     res.json(err);
  //     return;
  //   }
  //   res.json(productList);
    
  // });
});


/* GET Categories */
router.get('/:product_type', (req, res) => {
  console.log(req.params)
  // if(!mongoose.Types.ObjectId.isValid(req.params.product_type)) {
  //   res.status(400).json({ message: 'Specified category is not valid' });
  //   return;
  // }

  // Product.findById(req.params.id, (err, theProduct) => {
  //     if (err) {
  //       res.json(err);
  //       return;
  //     }

  //     res.json(theProduct);
  //   });
});

module.exports = router;
