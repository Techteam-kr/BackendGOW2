const express = require('express');
const router = express.Router();
const data = require('../masterJson')

router.get('/', async(req,res) => {

    let names = [];
    for(let i = 0; i < data.length ; i++){
        names.push(data[i].name)
    }

    let list = {
        "names" : names
    }

    const CategoryObject = [{
        "categories" : ["Housing","Pension","Disability","Transgender","Women & Children","Health","Unorganised Labour","Students","Skill Development","BPL","Other"]
    }]
    console.log("Request Recieved")
    res.status(201).send(list)
})





module.exports = router