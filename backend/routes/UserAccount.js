//high flag
//do all the operation based on the current account model

//todo task
//get the total of required things
//route for adding update as per the time period
//router for stalks update on time period every 24 hrs
//create profile comments


const express =  require('express')
const mongoose =  require('mongoose');
const passport = require('passport')
// const cloudinary = require('cloudinary')
const Account = require('../models/UserAccount');
const multer = require('../config/multer')
// require("../config/cloudinary");
const router = express.Router() 
const ProfileController = require('../controller/ProfileController')
//get route for getting personal account information
router.get('/userAccount',passport.authenticate('jwt',{session:false}),ProfileController.getUserProfile)


//post route for creating freshly new user profile account
router.post('/useraccount',passport.authenticate('jwt',{session:false}),multer.single('avatar'),(req,res) => {
    console.log(req.file)
   
})

router.get('/useraccount/all',passport.authenticate('jwt',{session:false}),ProfileController.getAllUserProfile)

router.post('/search/:numbers',passport.authenticate('jwt',{session:false}),ProfileController.searchProfile)

function escapeRegex(text) {
return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


// get the id detail on click while navigating
router.get('/useraccount/:id',passport.authenticate("jwt",{session:false}),ProfileController.getPartciularProfile)


// edit the account

router.put('/useraccount',passport.authenticate('jwt',{session:false}),multer.single('avatar'),ProfileController.editProfile)





module.exports = router