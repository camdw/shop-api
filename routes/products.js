var express = require('express');
var router = express.Router();

const Product = require('../models/Product');

/* GET Product listing. */
router.get('/products', (req, res, next) => {
  Product.find((err, productList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(productList);
  });
});

/* GET Product details. */
router.get('/products/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Phone.findById(req.params.id, (err, thePhone) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(thePhone);
    });
});

module.exports = router;
