var express = require ('express');
var app = express();
var PORT= 3000;

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/app/public/index.html");
})

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/app/public/contact.html");
})

app.listen(PORT, function(req, res){
  console.log ("server listening on port" + PORT );
})