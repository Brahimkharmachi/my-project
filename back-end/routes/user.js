const express = require('express')
const router = express.Router()
const User = require('../models/user')



// Register

router.post("/register",async (req,res) =>{
    const newUser = new User({
        username:req.body.username,
        email: req.body.email,
        password:req.body.password
    });

    console.log(newUser)
   try{

   
    const user = await newUser.save();
    res.status(201).json(user);
   }catch (err) {
    res.status(500).json(err)
   }
} );

module.exports = router