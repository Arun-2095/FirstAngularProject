const express= require('express');
const router = express.Router();
const mongoose = require('mongoose');
const admin= require('../models/admin');
const db= 'mongodb+srv://arun:7SIZLLS9Fsli9FcD@cluster0-xobaw.mongodb.net/MyFirstMongoDb?retryWrites=true&w=majority' ;




mongoose.Promise =global.Promise;
mongoose.connect(db ,{ useNewUrlParser: true } , function(err){
    if(err){
        console.error('Error' + err);
    }
})
router.get('/', function(req,res){
    res.send('api works');
});

router.get('/admin',function(req,res){
  admin.find({}).exec(function(err,admin){
      if(err){
          console.log('error in Admin');
      }else{
        res.json(admin);
      }
      
  })
});
module.exports =router;
