var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const Behaviour = require('../models/UserBehaviour.js')


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

/* PUT Add Favourite */
router.put('/addFavourite', (req, res) => {
  var userId = req.body.userId;
  var productId = req.body.productId
  
  Behaviour.findOne({user_id: userId}, (err, theBehaviour) => {

    if(theBehaviour.favourite_products.indexOf(productId) === -1) {
      Behaviour.findOneAndUpdate({user_id: userId}, {$push: { "favourite_products": productId }}, {new: true}, (err, behaviour)=>{
        res.send(behaviour)
      }) 
    }
  })
})

/* PUT Remove Favourite */
router.put('/removeFavourite', (req, res) => {
  var userId = req.body.userId;
  var productId = req.body.productId
  
  Behaviour.findOneAndUpdate({user_id: userId}, {$pull: { "favourite_products": productId }}, {new: true}, (err, behaviour)=>{
        res.send(behaviour)
      }) 
    }
  )


/* PUT Product to Cart. */
router.put('/addToCart', (req, res) => {
  var userId = req.body.userId;
  var item = req.body.cartItem;
  
  Behaviour.findOneAndUpdate({user_id: userId}, {$push: { "current_cart": item }}, {new: true}, (err, behaviour)=>{
    res.send(behaviour)
      }) 
     }
  )

module.exports = router;
