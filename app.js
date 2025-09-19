const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

app.get("/pass",function(req,res){
        res.send("Password Encryption")
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash("javaistheone",salt,function(err,hash){
                console.log(hash);
            })
        })
       
})


app.get("/",function(req,res){
        res.send("Password Decryption");
         bcrypt.compare("javaistheone","$2b$10$FtXRbIJtpCySc5nVCvE0.eGVHg/R1Ae8DPtVgOsmAxF43Uy9XqEau",function(err,result){
            console.log(result);
            
        })
})

app.listen(5000)