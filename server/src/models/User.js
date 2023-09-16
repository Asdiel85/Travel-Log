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
        type: Boolean
    },
})