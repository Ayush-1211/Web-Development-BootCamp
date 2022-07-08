const express = require("express");
const https = require("https")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html")
    
    //res.send("Running");
});

app.post("/", function(req, res){
    //res.send("Recieved....")

    const query = req.body.cityName
    const apiKey = "88c8e400312dbcba02024d216493119e"
    const units = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            //console.log(weatherData);

            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>The weather is currently " + description + "</p>")
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees celcius.</h1>")
            res.write("<img src=" + imgURL + ">")
            res.send();

        });

    });

});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});