const express = require('express');
const router = express.Router();
const data = require('../masterJson')
const mongoose = require('mongoose');
const Users = require('../models/formSchema')

mongoose.connect('mongodb://localhost:27017/applicants', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//  Search the Applicant using ID 

router.get('/', async(req,res) => {

    searchValue = req.body.searchValue;
    console.log(searchValue)
    Users.find({}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("First function call : ", docs);
            res.status(201).send(docs)
        }
    });


})

module.exports = router