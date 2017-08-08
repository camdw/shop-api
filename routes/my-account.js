var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const Orders = require('../models/Order');
const Behaviour = require('../models/UserBehaviour')

/* GET user behaviour. */
router.get('/:id', (req, res) => {
  
  Behaviour
      .findOne({user_id: req.params.id})
      .populate("favourite_products")
      .exec((err, behaviour) => {
        if (err) {
        next(err);
        return;
        }
    res.json(behaviour);

  });
});






module.exports = router;

