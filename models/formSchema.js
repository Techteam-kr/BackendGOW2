const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const Schema  = mongoose.Schema

const formSchema = new mongoose.Schema({
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
    wardNumber: String,
    id: String,
    yojanaName: String,
    isApproved: { type: Boolean, default:false},
    isRejected: { type: Boolean, default:false},
    isInProgress: { type: Boolean, default:false},
    status: { type: String, default: "Applied"},
    description: String,
    benificiaryMobNumber: String,
    registringFor: String,
});
var Users = mongoose.model("Users", formSchema);
module.exports = Users