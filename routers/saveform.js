const express = require('express');
const router = express.Router();



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants");
// aadharNumber: "123456754"
// accountNumber: "4553"
// addressLineOne: "Home"
// addressLineTwo: "Home"
// age: "28"
// bankName: "HDFC"
// bplNumber: ""
// branchName: ""
// caste: "2A"
// fullName: "Arun"
// gaurdianName: "Arun"
// gender: "Male"
// ifscCode: "HDFC000132322"
// income: "40000"
// mobileNumber: "9712323133"
// mobileVerified: false
// religion: "Hindu"
// sentOtp: false
// wardNumber: "1234"
var nameSchema = new mongoose.Schema({
    aadharNumber: String,
    accountNumber: String,
    addressLineOne: String,
    addressLineTwo: String,
    age: String,
    bankName: String,
    bplNumber: String,
    branchName: String,
    caste: String,
    fullName: String,
    gaurdianName: String,
    gender: String,
    ifscCode: String,
    income: String,
    mobileNumber: String,
    mobileVerified: Boolean,
    religion: String,
    sentOtp: Boolean,
    wardNumber: String
});
var Users = mongoose.model("Users", nameSchema);

router.post('/', async(req,res) => {
    var myData = new Users(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
})

module.exports = router