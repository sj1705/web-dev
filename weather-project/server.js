const express = require("express");
const https = require("https");
const app = express();
app.use(express.urlencoded({}));
app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
 const query=req.body.city;
 const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=7f5ea3c90b50560e661a9995d89c7722&units=metric";
 https.get(url, function(response) {
   response.on("data",function(data){
     const weatherDetails=JSON.parse(data);
     const temp=weatherDetails.main.temp;
     const weatherDescription=weatherDetails.weather[0].description;
     const icon=weatherDetails.weather[0].icon;
     const iconString="http://openweathermap.org/img/wn/"+icon+"@2x.png";
     console.log(weatherDescription);
     console.log(temp);
     res.write("<h1>The weather in "+query+" is " + temp + " Degree Celsius</h1>");
     res.write("<p>The weather currently forcasts "+ weatherDescription+" . <p>");
     res.write("<img src="+iconString+">");
     res.send();
   });
   console.log(response.statusCode);
 });
});




app.listen(3000, function() {
  console.log("server running at 3000");
});
