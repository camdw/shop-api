var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const Order = require('../models/Order');
const Behaviour = require('../models/UserBehaviour')


/* GET cart product details. */
router.get('/:id', (req, res) => {

  Behaviour
      .findOne({user_id: req.params.id})
      .populate("current_cart.productId")
      .exec((err, behaviour) => {
        if (err) {
        res.json(err);
        return;
        }
    res.json(behaviour);

  });
});

/* PUT remove item from Cart */
router.put('/deleteItem', (req, res) => {
  var userId = req.body.userId;
  var productId = req.body.productId;

  Behaviour.findOneAndUpdate({user_id: userId}, {$pull: { 'current_cart': { 'productId': productId } } }, {new: true}, (err, behaviour)=>{
    res.send(behaviour)
      }) 
     }
  )


/* POST create order */
router.post('/order', (req, res) => {
  const theOrder = new Order ({
    user_id: req.body.userId,
    order_items: req.body.orderItems,
    total: req.body.total
  });


  theOrder.save((err, order) => {
    if (err) { 
      res.json(err);
    } else {
      Behaviour.findOneAndUpdate({user_id: req.body.userId}, {'current_cart': [] }, {new: true}, (err, behaviour)=>{
        Behaviour.findOneAndUpdate({user_id: req.body.userId}, {$push: {'past_orders': order._id } }, {new: true}, (err, behaviour)=>{
          res.json({message: order})
        })
      })  

      
    }
    return;
  });
  
});





/* PUT empty Cart */
router.put('/deleteItem', (req, res) => {
  var userId = req.body.userId;
  var productId = req.body.productId;

  Behaviour.findOneAndUpdate({user_id: userId}, {$pull: { 'current_cart': { 'productId': productId } } }, {new: true}, (err, behaviour)=>{
    res.send(behaviour)
      }) 
     }
  )


module.exports = router;

