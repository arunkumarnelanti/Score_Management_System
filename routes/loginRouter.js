const express = require("express")
const router = express.Router();
const path = require('path');
const Marks = require("../models/StudentSchema")
router.get('/', async (req,res) => {
    var MarksDetails = await Marks.find();

    res.render("home", {obj : MarksDetails});
    
})

router.get('/add', (req,res) => {
    res.render("form")
})

router.post('/add', async (req,res) => {
    console.log("Posting")


    const MarksDetails = new Marks({
        name : req.body.name,
        email : req.body.email,
        ca1 : req.body.ca1,
        ca2 : req.body.ca2,
        ca3 : req.body.ca3
    })

    console.log(MarksDetails)
    
    try{
        await MarksDetails.save().then(function(){
            console.log("Data Added"); // Success
            res.send({status : 200})
        }).catch(function(error){
            console.log(error); // Failure
        });
    }
    catch(err){

    }

    
    
})


router.delete('/delete/:id',(req,res) => {
    console.log(req.params.id);
    console.log("Del");

    if(req.params.id != undefined){

        Marks.deleteOne({email : req.params.id}).then(function(){
            console.log("Data deleted"); // Success
            res.send({status : 200 });
        }).catch(function(error ){
            console.log(error); // Failure
        })
    }

})

router.get('/update/:id', async (req,res) => {
 //   console.log(req.params.id)

    const UserDetails = await Marks.find({email : req.params.id})
 //   console.log(UserDetails)
    console.log(UserDetails[0])
    res.render("updateForm", {obj : UserDetails[0]})
})

router.patch('/update/:id', async(req,res) => {
    console.log(req.params.id)

        
    try{
        var UserDetails = await Marks.findOne({email : req.params.id});
        UserDetails.name = req.body.name
        UserDetails.email = req.body.email
        UserDetails.ca1 = req.body.ca1
        UserDetails.ca2 = req.body.ca2
        UserDetails.ca3 = req.body.ca3

        console.log(UserDetails)

        UserDetails.save().then(function(){
            console.log("Data Saved and updated"); // Success
            res.send({status : 200});
        }).catch(function(error){
            console.log(error); // Failure
        });

    }
    catch(err){

    }

})


module.exports = router