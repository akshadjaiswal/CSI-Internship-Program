// *ROUTE LOGIC
//Logic use in place of the req,res for each route

// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers. Need to wrap entire function
const asyncHandler = require('express-async-handler');

// Use bcrypt to hash the password
const bcrypt = require('bcryptjs');

// Bring in the user model
const User = require('../models/userModel');

// Bring in jsonwebtoken
const jwt = require('jsonwebtoken');

// *-------------------------------------------------------
// * @desc Register a new user
// * @route /api/users
// * access Public
const registerUser = asyncHandler(async (req, res) => {
  // DESTRUCTURE
  const { name, email, password } = req.body;

  //VALIDATION
  if (!name || !email || !password) {
    // send the client error, client didn't fill out all the info
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exists, if so throw a 400
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  // HASH-- the password with bcrypt, promise based functions
  const salt = await bcrypt.genSalt(10);
  // takes password and adds salt aka hashes it
  const hashedPassword = await bcrypt.hash(password, salt);

  // CREATE USER
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  // Check if user is created , 201 means everything was created
  if (user) {
    res.status(201).json({
      // user in mongodb stores id as _id
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

  // console.log(req.body);
  // res.send('Register Route');
});
// *-------------------------------------------------------

// *-------------------------------------------------------
// * @desc Login a new user
// * @route /api/users/login
// * access Public
const loginUser = asyncHandler(async (req, res) => {
  //  DESTRUCTURE
  const { email, password } = req.body;

  // FIND USER BY EMAIL IN THE DB
  const user = await User.findOne({ email });

  // IF USER AND PLAINTEXT PASSWORDS COMPARED TO HASH PASSWORD MATCH
  if (user && (await bcrypt.compare(password, user.password))) {
    // RETURN A USER AS A JSON
    res.status(200).json({
      // user in mongodb stores id as _id
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error('invalid credentials');
  }
});
// *-------------------------------------------------------

// *-------------------------------------------------------
// * @desc Get current user
// * @route /api/users/me
// * access Private
const getMe = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name
  };
  res.status(200).json(user);
});
// *-------------------------------------------------------

// GENERATE TOKEN
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

module.exports = {
  loginUser,
  registerUser,
  getMe
};
