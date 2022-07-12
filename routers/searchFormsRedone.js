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


router.post('/', async(req,res) => {

    YojanaName = req.body.yojanaName;
    ApplicationStatus = req.body.applicationStatus;
    //IdentifierField can be both ApplicationID and Mobile No
    IdentifierField = req.body.identifierfield;

    if(YojanaName == "All" && ApplicationStatus == "All" && IdentifierField == "All"){
        //When none of the fields are selected
        console.log('NONE OF THE FILTERS ARE SELECTED')
        Users.find({}, function (err, docs){

            if (err){
                console.log(err);
                res.status(450).send('Error')
                return
            }
            else {
                console.log(docs)
                res.status(200).send(docs)
                return
            }
        });

        return

    }

    //IF USER SElects only YOJANA
    if(ApplicationStatus == "All" && IdentifierField == "All"){
        //res.status(201).send("Only Yojana is Selected")
        Users.find({yojanaName: YojanaName}, function (err, docs){

            if (err){
                console.log(err);
                res.status(450).send('Error')
            }
            else {
                console.log(docs)
                res.status(200).send(docs)
            }
        });
        return
    }

    //IF USER SELECTS ONLY STATUS
    if(YojanaName == "All" && IdentifierField == "All"){
            
            Users.find({status: ApplicationStatus}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
            return
    }

    //IF USER SELECTS ONLY IDENTIFIER FIELD
    if(YojanaName == "All" && ApplicationStatus == "All"){

        if(IdentifierField.length == 10){

            Users.find({mobileNumber: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else if(IdentifierField.length == 13){
            
            Users.find({id: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else {
            res.status(200).send("No Data Found")
            return 
        }
        return
    }

    //IF USER SELECTS BOTH YOJANA AND STATUS
    if(IdentifierField == "All"){
        console.log("Both yojana and Status")
        Users.find({yojanaName: YojanaName, status : ApplicationStatus}, function (err, docs){

            if (err){
                console.log(err);
                res.status(450).send('Error')
                return
            }
            else {
                console.log(docs)
                res.status(200).send(docs)
                return
            }
        });
        return
    }

    //if User Selects both Yojana and Identifier 
    if(ApplicationStatus == "All"){
        console.log("Both yojana and Identifier")
        if(IdentifierField.length == 10){

            Users.find({yojanaName: YojanaName, mobileNumber: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else if(IdentifierField.length == 13){
            
            Users.find({yojanaName: YojanaName, id: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else {
            res.status(200).send("No Data Found")
            return 
        }
        return
    }

    //IF USER SELECTS STATUS AND IdentifierID
    if(YojanaName == "All"){
        console.log("Both Status and Identifier")
        if(IdentifierField.length == 10){

            Users.find({status: ApplicationStatus, mobileNumber: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else if(IdentifierField.length == 13){
            
            Users.find({status: ApplicationStatus, id: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else {
            res.status(200).send("No Data Found")
            return 
        }
        return
    }

    //When user selects all three parameters
    if(YojanaName != "All" && ApplicationStatus != "All" && IdentifierField != "All"){
        console.log('All three parameters are selected')
        if(IdentifierField.length == 10){

            Users.find({yojanaName: YojanaName, status: ApplicationStatus, mobileNumber: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else if(IdentifierField.length == 13){
            
            Users.find({yojanaName: YojanaName, status: ApplicationStatus,id: IdentifierField}, function (err, docs){

                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                    return
                }
                else {
                    console.log(docs)
                    res.status(200).send(docs)
                    return
                }
            });
        } else {
            res.status(200).send("No Data Found")
            return 
        }
        return
    }

})

module.exports = router