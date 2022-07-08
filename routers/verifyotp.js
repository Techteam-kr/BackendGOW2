const express = require('express');
const router = express.Router();
const Otp = require('../models/smsschema')

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants")
.then((result) => {console.log("Connected to MongoDB")})
.catch((err) => {console.log("Failed to Connect to MongoDB")});

router.post('/', async(req,res) => {
     let isOTPValidated = "false";
     
    OTP = Otp.findOne({ mobileno: req.body.mobno}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log(docs.toObject().otp)
            savedOTP = docs.toObject().otp
            recievedOTP = req.body.otp
                if(savedOTP == recievedOTP){
                    isOTPValidated = "true";
                    res.send(isOTPValidated)
                } else {
                    isOTPValidated = "false";
                    res.send(isOTPValidated)
                } 
        }
    });
})

module.exports = router