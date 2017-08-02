var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
console.log("hello")

/* GET Product listing. */
router.get('/', (req, res, next) => {
  console.log("hello outside find")
  Product.find((err, productList) => {
    console.log("hello inside find")
    if (err) {
      res.json(err);
      return;
    }
      console.log("hello product list find", productList)
    res.json(productList);
    
  });
});

/* GET Product details. */
router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Product.findById(req.params.id, (err, theProduct) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theProduct);
    });
});

module.exports = router;
