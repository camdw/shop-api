var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

/* GET Product listing. */
router.get('/', (req, res, next) => {
  Product.find((err, productList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(productList);
    
  });
});

/* GET Product details. */
router.get('/:id', (req, res) => {

  Product.findById(req.params.id, (err, theProduct) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theProduct);
    });
});

module.exports = router;
