const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Invalid username or password');
  }
  console.log(user);
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error('Invalid username or password');
  }

  const payload = {
    _id: user._id,
    username: user.username,
    isAdmin: user.isAdmin,
  };

  const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });
  
  return token;
};
