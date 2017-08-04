var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

/* GET Category listing. */
router.get('/:category', (req, res) => {
  console.log(req.params.category)

  Product.find({'category': req.params.category}, (err, products) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(products);
    });
});


module.exports = router;
