var express = require ('express');
var app = express();
var mongoose = require ("mongoose");
var bodyParser = require ("body-parser");
//var db = require("./models")
var PORT= 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

// --------------- CONTACT FORM (mongo) ---------------
mongoose.connect ("mongodb://localhost:27017/clientDB", { useNewUrlParser: true });

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
// --------------- CONTACT FORM (site) ---------------
app.post("/contact.html", function(req, res){

  var clientInqFirstName = req.body.formFirstName;
  var clientInqLastName = req.body.formLastName;
  var clientInqPhone = req.body.formPhone;
  var clientInqEmail = req.body.formformEmail;
  var clientInqEventType = req.body.formEventType;
  var clientInqEventDate = req.body.formEventDate;
  var clientInqEventStart = req.body.formEventStart;
  var clientInqEventEnd = req.body.formEventEnd;
  var clientInqEventMessage = req.body.formMessage;

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
  console.log(client);
})


// --------------- TESTIMONIAL FORM (Mongo) ---------------
var testimonialSubmissionSchema = new mongoose.Schema ({
  name: { type: String, required: true },
  email: { type: String, required: true}, 
  eventType: { type: String, require: true},
  feeback: { type: String, require: true},
  //password: { type: String, required: true}

})

var Testimonial_Submission = mongoose.model ("Testimonial", testimonialSubmissionSchema);
// --------------- TESTIMONIAL FORM (Site) ---------------
app.post("/", function (req, res){
  var testmonialSubmittedName = req.body.testimonialSubmitterName;
  var testmonialSubmittedEmail = req.body.testimonialSubmitterEmail;
  var testmonialSubmittedEventType =req.body.testimonialSubmitterEventType;
  var testmonialSubmittedFeedback = req.body.testimonialSubmitterFeedback;
  //var testmonialSubmittedPassword = testimonialSubmitterPassword;

  var testimonial_submission = new Testimonial_Submission ({
    name: testmonialSubmittedName, 
    email: testmonialSubmittedEmail, 
    eventType: testmonialSubmittedEventType,
    feeback: testmonialSubmittedFeedback, 
    //password: testmonialSubmittedPassword
  })
  testimonial_submission.save();
  res.redirect("/");
  console.log(testimonial_submission);
})


// --------------- SERVER LISTENING ---------------
app.listen(PORT, function(req, res){
  console.log ("server listening on port" + PORT );
})