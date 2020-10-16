const Account = require('../models/UserAccount');
const multer = require('../config/multer')


exports.getUserProfile = (req,res) => {
    Account.findOne({user:req.user.id})
    .then(account => {
        if(!account) {  
            return res.status(404).json('no user account CreateOne')
        }else {
            return res.json(account)
        }
    }).catch(err => console.log(err))
}

exports.getAllUserProfile = (req,res) => {
    Account.findOne({user:req.user.id})
    .then( async account => {
        if(account) {
            return res.json('account has been registerd')
        }

        const newAccount = new Account({
            user:req.user.id,
            googleId:req.user.googleId,
            userName:req.body.userName,
            pincode:req.body.pincode,
            email:req.body.email,
            title:req.body.title,
            avatar:req.file.location,
            bio:req.body.bio,
        })
        newAccount.save()
            .then(newAccount => {
                res.json(newAccount)
            })
            .catch(err => {
                res.status(404).json(err)
            })
        
    }).catch(err => {
        res.json(err)
    })
}

exports.searchProfile = (req,res) => {
    const regex = new RegExp(escapeRegex(req.body.search), 'gi')
    Account.find({ userName:regex })
    .then(result => {
        if(!result){
            res.status(404).json({msg:'not found'})
        }else {
            console.log()
        }
    })
}


exports.getPartciularProfile = (req,res) => {
    Account.findById({_id:req.params.id})
    .then(account => {
        if(!account) {
            res.json({msg:'account dosent exist'})
        }else {
            res.json(account)
        }
    })
}

exports.editProfile = (req,res) => {
    console.log(req.file)

    //add youtube and instagram handle

    Account.findOneAndUpdate({user:req.user.id},
     {  
         $set:{
            userName: req.body.userName,
            avatar:req.file.location,
            bio: req.body.bio,
            email: req.body.email,
            user: req.user.id
        }
     }).then(account => {
         res.json({msg:'successfully update your account'})
     }).catch(err => console.log(err))
}