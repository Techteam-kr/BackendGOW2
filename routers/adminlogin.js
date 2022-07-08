const express = require('express');
const router = express.Router();


router.post('/', async(req,res) => { 

     if(req.body.username == "admin" && req.body.password == "GOWadmin") {

        loginStatus = {

            status : "Successfully Logged in as Admin",
            user : "admin"
        }
        res.status(201).send(loginStatus)
        return
    } else {
        loginStatus = {

            status : "Failed To Log in as Admin",
            user : "null"
        }
        res.status(201).send(loginStatus)
        return
    }

})

module.exports = router