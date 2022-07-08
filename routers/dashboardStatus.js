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

    let isAppliedCount;
    let isInProgressCount;
    let isRejectedCount;
    let isAcceptedCount;
    let totalCount;

    Users.find({yojanaName: req.body.yojanaName , status: "Applied"}, function (err, docs) {
        if (err){
            console.log(err);
            res.status(450).send('Error')
        }
        else{
            isAppliedCount = docs.length;
            console.log(isAppliedCount)
            console.log("First function call : +", docs);
            
            //res.status(201).send(docs.length.toString())

            Users.find({yojanaName: req.body.yojanaName , status: "inProgress"}, function (err, docs) {
                if (err){
                    console.log(err);
                    res.status(450).send('Error')
                }
                else{
                    console.log("First function call : ", docs);
                    isInProgressCount = docs.length;
                    //res.status(201).send(docs.length.toString())

                    

                    Users.find({yojanaName: req.body.yojanaName , status: "Rejected"}, function (err, docs) {
                        if (err){
                            console.log(err);
                            res.status(450).send('Error')
                        }
                        else{
                            console.log("First function call : ", docs);
                            isRejectedCount = docs.length;
                            //res.status(201).send(docs.length.toString())

                            console.log('Applied ' + isAppliedCount)
                            console.log('In Progress ' + isInProgressCount)
                            console.log('Rejected ' + isRejectedCount)

                            Users.find({yojanaName: req.body.yojanaName , status: "Accepted"}, function (err, docs) {
                                if (err){
                                    console.log(err);
                                    res.status(450).send('Error')
                                }
                                else{
                                    console.log("First function call : ", docs);
                                    isAcceptedCount = docs.length;
                                    //res.status(201).send(docs.length.toString())
        
                                    console.log('Applied ' + isAppliedCount)
                                    console.log('In Progress ' + isInProgressCount)
                                    console.log('Rejected ' + isRejectedCount)
                                    console.log('Accepted ' + isAcceptedCount)

                                    Users.find({yojanaName: req.body.yojanaName}, function (err, docs) {
                                        if (err){
                                            console.log(err);
                                            res.status(450).send('Error')
                                        }
                                        else{
                                            console.log("First function call : ", docs);
                                            totalCount = docs.length;
                                            //res.status(201).send(docs.length.toString())
                
                                            console.log('Applied ' + isAppliedCount)
                                            console.log('In Progress ' + isInProgressCount)
                                            console.log('Rejected ' + isRejectedCount)
                                            console.log('Accepted ' + isAcceptedCount)
                                            console.log('Total ' + totalCount)

                                            let DashboardData = {
                                                Applied : isAppliedCount,
                                                inProgress : isInProgressCount,
                                                Rejected: isRejectedCount,
                                                Accepted : isAcceptedCount,
                                                total : totalCount
                                            }

                                            res.status(200).send(DashboardData)
                                            return
                                        }
                                    });

                                }
                            });

                            
                        }
                    });
                }
            });
        }
    });
    console.log(isAppliedCount)
    

    

    // console.log(isAppliedCount.toString() + isInProgressCount.toString() + isRejectedCount.toString())

   // res.status(200).send('isAppliedCount.toString() + isInProgressCount.toString() + isRejectedCount.toString()')
            

})

module.exports = router