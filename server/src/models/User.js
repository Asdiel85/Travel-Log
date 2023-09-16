const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Name of user is required!'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email name is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  isAdmin: {
    type: Boolean,
  },
});

userSchema.virtual('repeatPassword').set(function (value) {
  if (value !== this.password) {
    throw new Error('Passsword missmatch!');
  }
});

userSchema.pre('save', async function () {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
});

const User = new mongoose.model('User', userSchema);

module.exports = User;
