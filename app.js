const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/applicants");

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
//     mobileVerified: String,
//     religion: String,
//     sentOtp: String,
//     wardNumber: String
// });
// var Users = mongoose.model("Users", nameSchema);

const categoryRouter = require('./routers/category')
app.use('/category', categoryRouter)

const filteredYojanas = require('./routers/filteredYojanas')
app.use('/filteredYojanas', filteredYojanas)

const searchYojanas = require('./routers/searchYojanas')
app.use('/searchYojanas' , searchYojanas)

const listofYojanas = require('./routers/listofYojanas')
app.use('/listofYojanas', listofYojanas)

const saveform = require('./routers/saveform')
app.use('/saveform', saveform)



app.listen(9002, () => {
    console.log("Server Started on port 9002")
})