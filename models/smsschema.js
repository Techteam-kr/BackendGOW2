const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const Schema  = mongoose.Schema

const smsSchema = new Schema({

    mobileno: {
        type : String,
        required : true
    }, 

    otp : {
        type : String, 
        required : true
    }, 
    expire_at: {type: Date, default: Date.now, expires: 65}
}, {timestamps: true}) 

smsSchema.index({ "expire_at": 1 }, { expireAfterSeconds: 30 });

const Otp = mongoose.model('Otp', smsSchema)
module.exports = Otp