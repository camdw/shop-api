const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  'email': String,
  'password': String,
  'firstname': String,
  'lastname': String,
  'address': {
    'street': String,
    'postal_code': String,
    'city': String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;