//importing async handler
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')


//@desc Register a user
//route POST/api/users/register
//@access public
//wrapping asyncHandler to get errors
const registerUser = asyncHandler(async (req, res) => {
  //destructing the user data
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  //checking whether the user mail available or not
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("user already registered!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password", hashedPassword);
  //creating a new user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`user created ${user}`);
  //password is secures, so don't want to send complete user
  if(user){
    res.status(201).json({ _id:user.id, email:user.email })
  }else{
    res.status(400);
    throw new Error("User data is not valid")
  }

  res.json({ message: "Register the user" });
});


//@desc login user
//route POST/api/users/login
//@access public
//wrapping asyncHandler to get errors
const loginUser = asyncHandler(async (req, res) => {
  //fetching email and password
  const {email, password} = req.body;
  //if  email or pass is not available 
  if(!email || !password){
    res.status(400);
    throw new Error("All fields are mandatory")
  }
  //if email is present and want to check user presence 
  const user = await User.findOne({email});

//compare password with Hash password
if(user && (await bcrypt.compare(password, user.password))){

  const accessToken = jwt.sign({
    //payload
    user: {
      username: user.username,
      email: user.email,
      id: user.id,
    },
  },
  //accessToken secret from env variable
  process.env.ACCESS_TOKEN_SECRET,

  //generating a token and provide the expiration time
  { expiresIn: "15m" }
  )
  //if matches
res.status(200).json({ accessToken });

}
// if any error
else{
  res.status(401);
  throw new Error("email or password is not valid")

}
  
});



//@desc current user info
//route GET/api/users/current
//@access private
//wrapping asyncHandler to get errors
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});


module.exports = { registerUser, loginUser, currentUser };
