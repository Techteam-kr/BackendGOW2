const express = require('express');
const router = express.Router();
const Users = require('../models/formSchema')


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants");

// var nameSchema = new mongoose.Schema({
//     aadharNumber: String,
//     accountNumber: String,
//     addressLineOne: String,
//     addressLineTwo: String,
//     age: String,
//     bankName: String,
//     bplNumber: String,
//     branchName: String,
//     caste: String,
//     fullName: String,
//     gaurdianName: String,
//     gender: String,
//     ifscCode: String,
//     income: String,
//     mobileNumber: String,
//     mobileVerified: Boolean,
//     religion: String,
//     sentOtp: Boolean,
//     wardNumber: String,
//     id: String,
//     yojanaName: String,
//     isApproved: { type: Boolean, default:false},
//     isRejected: { type: Boolean, default:false},
//     isInProgress: { type: Boolean, default:false},
// });
// var Users = mongoose.model("Users", nameSchema);

router.post('/', async(req,res) => {
    //setting the Form ID

    formData = req.body;
    
    formData.id = Date.now()
    
    var myData = new Users(formData);
    myData.save()
        .then(item => {
            res.send("Form saved to database with ID " + formData.id + " please note down the ID ");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
})

module.exports = router