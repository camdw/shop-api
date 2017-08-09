var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const Orders = require('../models/Order');
const Behaviour = require('../models/UserBehaviour')

/* GET user behaviour and orders. */
router.get('/:id', (req, res) => {
  
  Behaviour
      .findOne({user_id: req.params.id})
      .populate('favourite_products')
      .populate('past_orders')
      .exec((err, behaviour) => {
        if (err) {
        next(err);
        return;
        }
    res.json(behaviour);

  });

});

router.get('/orders/:id', (req, res) => {
  
  Orders
      .find({user_id: req.params.id})
      .populate('order_items.productId')
      .exec((err, orders) => {
        if (err) {
        next(err);
        return;
        }
    
        res.json(orders);

  });



});





module.exports = router;

