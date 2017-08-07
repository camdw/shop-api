const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dynamicshop');

const UserBehaviour = require('../models/UserBehaviour');


const behaviours = [
{
  'user_id': '5985d54dbf7a4314a57f209e',
  'past_orders': [],
  'favourite_products': ['59843a5545c28a06888a7d68'],
  'abandonned_cart': [],
  'visited_products': [],
  'sizes': {
    'tops': ['38'],
    'trousers': [],
    'dresses': [],
    'shoes': ['41']
  },
  'colours': [],
  }]



UserBehaviour.create(behaviours, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((behaviour) => {
    console.log('behaviour uploaded')
  });
  mongoose.connection.close();
});
