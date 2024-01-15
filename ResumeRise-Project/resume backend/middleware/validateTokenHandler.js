const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")


const validateToken = asyncHandler(async(req,res , next ) => {

  let token ;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if(authHeader && authHeader.startsWith("Bearer")){
    //to get the token
    //split using here to define the Bearer position 
    token = authHeader.split(" ")[1];
    //to verify the token
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
      //if user don't have token or not valid token
      if(err){
        res.status(401);
        throw new Error("user is not authorized");
      }
      //if user have token
      // console.log(decoded)
      //decoding the token
      req.user = decoded.user;
      next();// middleware

    });
    //if don't have token
    if(!token){
      res.status(401);
      throw new Error("user is not authorized or token missing")
    }
  }

})

module.exports = validateToken;