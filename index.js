const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended:true}))




app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
   let email = req.body.email;
   console.log(email);
    res.redirect("/");
})




app.listen(3000, function(){
    console.log("server started at 3000");
})