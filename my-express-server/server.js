const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("You can contact me on: ayushprajapati1211@gmail.com");
});

app.get("/about", function(req, res){
    res.send("This is about us page.");
});

app.get("/hobbies", function(req, res){
    res.send("This is my hobbies page.");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});