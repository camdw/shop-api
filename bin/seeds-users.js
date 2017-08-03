const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dynamicshop');

const User = require('../models/User');


const users = [
{
  'email': 'camille@test.com',
  'password': 'test',
  'firstname': 'Camille',
  'lastname': 'Test',
  'address': {
    'street': 'Test Street',
    'postal_code': '08000',
    'city': 'Barcelona',
  },
}]



User.create(users, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((user) => {
    console.log('user uploaded')
  });
  mongoose.connection.close();
});
