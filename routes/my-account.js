var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const Orders = require('../models/Order')

/* GET user details. */
router.get('/:id', (req, res) => {

  User
      .findOne({_id: req.params.id})
      .populate("favourite_products")
      .exec((err, user) => {
        if (err) {
          next(err);
          return;
          }
        console.log(user)
    res.json(user);

  });

  // User.findById(req.params.id, (err, user) => {
  //     if (err) {
  //       res.json(err);
  //       return;
  //     }



  //     res.json(user);
  //   });
});




module.exports = router;

