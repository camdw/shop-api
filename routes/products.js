var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');


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
  
  User.findById(userId, (err, theUser) => {
    
    if(theUser.favourite_products.indexOf(productId) === -1)
      User.findByIdAndUpdate(userId, {$push: { "favourite_products": productId }}, {new: true}, (err, user)=>{
        res.send(user)
      }) 
    }
  )
})

/* PUT Remove Favourite */
router.put('/removeFavourite', (req, res) => {
  var userId = req.body.userId;
  var productId = req.body.productId
  
  User.findByIdAndUpdate(userId, {$pull: { "favourite_products": productId }}, {new: true}, (err, user)=>{
        res.send(user)
      }) 
    }
  )



module.exports = router;
