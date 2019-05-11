var express = require ('express');
var app = express();
var mongoose = require ("mongoose");

var PORT= 3000;

app.use(express.static("public"));

mongoose.connect ("mongodb://localhost:27017/clientInq", { useNewUrlParser: true });

var clientInqFormSchema = new mongoose.Schema ({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: String,
  email: { type: String, required: true },
  eventType: String,
  eventDate: Date,
  eventStart: String,
  eventEnd: String,
  message: String
})

var Client_Inq = mongoose.model ("Client_Inq", clientInqFormSchema);


var client = new Client_Inq({
  firstName: "Betty",
  lastName: "Bop",
  phoneNumber: "502-502-5022",
  email: "betty@BarProp.com",
  eventType: "wedding",
  eventDate: 08-02-2019,
  eventStart: "12:00",
  eventEnd: "9:00",
  message: "Hello everyone."

})

//client.save();

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "public/index.html");
// })

// app.get("/contact", function(req, res){
//   res.sendFile(__dirname + "public/contact.html");
// })

app.listen(PORT, function(req, res){
  console.log ("server listening on port" + PORT );
})