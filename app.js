var express = require ('express');
var app = express();
var mongoose = require ("mongoose");
var bodyParser = require ("body-parser");

var PORT= 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// app.get("/", function(req, res){
//   res.sendFile(__dirname + "public/index.html");
// })

// app.get("/contact", function(req, res){
//   res.sendFile(__dirname + "public/contact.html");
// })


mongoose.connect ("mongodb://localhost:27017/clientInq", { useNewUrlParser: true });

var clientInqFormSchema = new mongoose.Schema ({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: String,
  email: String, 
  eventType: String,
  eventDate: Date,
  eventStart: String,
  eventEnd: String,
  message: String
})

var Client_Inq = mongoose.model ("Client_Inq", clientInqFormSchema);

// // var client = new Client_Inq({
// //   firstName: "Betty",
// //   lastName: "Bop",
// //   phoneNumber: "502-502-5022",
// //   email: "betty@BarProp.com",
// //   eventType: "wedding",
// //   eventDate: 08-02-2019,
// //   eventStart: "12:00",
// //   eventEnd: "9:00",
// //   message: "Hello everyone."

// // })

app.post("/contact.html", function(req, res){

 var clientInqFirstName = req.body.formFirstName;
 var clientInqLastName = req.body.formLastName;
 var clientInqPhone= req.body.formPhone;
 var clientInqEmail= req.body.formformEmail;
 var clientInqEventType= req.body.formEventType;
 var clientInqEventDate= req.body.formEventDate;
 var clientInqEventStart= req.body.formEventStart;
 var clientInqEventEnd= req.body.formEventEnd;
 var clientInqEventMessage= req.body.formMessage;

 var client= new Client_Inq ({
    firstName: clientInqFirstName,
    lastName: clientInqLastName,
    phoneNumber: clientInqPhone,
    email: clientInqEmail,
    eventType: clientInqEventType,
    eventDate: clientInqEventDate,
    eventStart: clientInqEventStart,
    eventEnd: clientInqEventEnd,
    message: clientInqEventMessage
 })
 client.save();
 res.redirect("/");
})


//client.save();


app.listen(PORT, function(req, res){
  console.log ("server listening on port" + PORT );
})