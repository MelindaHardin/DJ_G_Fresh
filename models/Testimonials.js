var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// --------------- TESTIMONIAL FORM (Mongo) ---------------
mongoose.connect ("mongodb://localhost:27017/clientInq", { useNewUrlParser: true });

var testimonialSubmissionSchema = new Schema ({
  name: { type: String, required: true },
  email: { type: String, required: true}, 
  eventType: { type: String, require: true},
  feeback: { type: String, require: true},
  password: { type: String, required: true}

})

var Testimonial = mongoose.model ("Testimonial", testimonialSubmissionSchema);
module.exports = Testimonial;

// // --------------- TESTIMONIAL FORM (Site) ---------------
// app.post("/", function (req, res){
//   var testmonialSubmittedName = req.body.testimonialSubmitterName;
//   var testmonialSubmittedEmail = req.body.testimonialSubmitterEmail;
//   var testmonialSubmittedEventType =req.body.testimonialSubmitterEventType;
//   var testmonialSubmittedFeedback = req.body.testimonialSubmitterFeedback;
//   var testmonialSubmittedPassword = testimonialSubmitterPassword;

//   var testimonial_submission = new Testimonial_Submission ({
//     name: testmonialSubmittedName, 
//     email: testmonialSubmittedEmail, 
//     eventType: testmonialSubmittedEventType,
//     feeback: testmonialSubmittedFeedback, 
//     password: testmonialSubmittedPassword
//   })
//   testimonial_submission.save();
//   res.redirect("/");
//   console.log(testimonialSubmission);
// })