const express = require('express');
const router = express.Router();



var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/applicants");

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