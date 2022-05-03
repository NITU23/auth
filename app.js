const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const md5 = require("md5");
const app = express();


app.use(express.static("public"));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://Hello:Nitin@cluster0.jsfnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true});

const userSchema = new mongoose.Schema({
  email : String,
  password : String
});
const User = new mongoose.model("User",userSchema);
app.get("/",function(req,res){
  res.render("home");
});
app.post("/",function(req,res){
  res.render("home");
})
app.get("/login",function(req,res){
      res.render("login");
    })


app.post("/register",function(req,res){
    const newUser = new User({
      email : req.body.usename,
        password : req.body.password,
       hash : md5(req.body.password)
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }
      else {
             res.render("registersuccess");
      }
          })
   });
   app.post("/login",function(req,res){

     const username = req.body.usename;
     const hash = md5(req.body.password);
     const password  = req.body.password

   User.findOne({email:username},function(err,foundUser){
     if(err){
       console.log(err);
     }
     else {
       if(foundUser){
         if(foundUser.password===password){
           res.render("drum");

         }
         else {
           res.render("loginfail");
         }
       }
     }
   })
})
app.get("/home",function(req,res){
  res.render("home");
}
);
app.get("/register",function(req,res){
  res.render("home");
})
app.listen(3000,function(){
  console.log("server started on port 3000");
})
