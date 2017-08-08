var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const Orders = require('../models/Order');
const Behaviour = require('../models/UserBehaviour')

/* GET cart product details. */
router.get('/:id', (req, res) => {

  Behaviour
      .findOne({user_id: req.params.id})
      .populate("current_cart.productId")
      .exec((err, behaviour) => {
        if (err) {
        next(err);
        return;
        }
    res.json(behaviour);

  });
});

/* PUT Remove Favourite */
router.put('/deleteItem', (req, res) => {
  var userId = req.body.userId;
  var productId = req.body.productId;

  Behaviour.findOneAndUpdate({user_id: userId}, {$pull: { 'current_cart': { 'productId': productId } } }, {new: true}, (err, behaviour)=>{
    res.send(behaviour)
      }) 
     }
  )




module.exports = router;

