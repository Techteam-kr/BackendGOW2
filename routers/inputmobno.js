const express = require('express');
const qs = require('qs')
const axios = require('axios')
const router = express.Router();
const Otp = require('../models/smsschema')

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants")
.then((result) => {console.log("Connected to MongoDB")})
.catch((err) => {console.log("Failed to Connect to MongoDB")});



router.post('/', async(req,res) => {

    //Generate Random 4 digit OTP
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    const otp = new Otp({
        mobileno : req.body.mobno,
        otp : val.toString()
    }) 

    const filter = { mobileno: req.body.mobno };
    const update = { otp: val.toString() };
    const opts = { new: true, upsert: true };

    let doc = await Otp.findOneAndUpdate(filter, update, opts);
    console.log('The Mobile no is ' + doc.mobileno + ' the OTP is ' + doc.otp)

    //otp.save(); 

    axios({
        method: 'post',
        url: 'http://four.iissms.co.in/api/v4/?api_key=Abb8a66c04bd298fd3bab7ffb38ae4f18',
        data: qs.stringify({
            method: 'sms',
            sender: 'RMADAS',
            to: req.body.mobno,
            message: 'Dear User, Your One Time Password (OTP) is '+ val +' Government on Wheels'
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' 
        }
      })

    res.send('OTP is sent to ' + req.body.mobno) 

})

module.exports = router
