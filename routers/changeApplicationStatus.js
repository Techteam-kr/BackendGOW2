const express = require('express');
const router = express.Router();
const Otp = require('../models/smsschema')
const Application = require('../models/formSchema')

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants")
.then((result) => {console.log("Connected to MongoDB")})
.catch((err) => {console.log("Failed to Connect to MongoDB")});

router.post('/', async(req,res) => {

    const filter = { id: req.body.formid };
    const update = { status: req.body.status, description: req.body.description };
    const opts = { new: true};

    let doc = await Application.findOneAndUpdate(filter, update, opts);
   /// console.log('The Mobile no is ' + doc.mobileno + ' the OTP is ' + doc.otp)

   res.status(200).send('Status is Updated')

})

module.exports = router