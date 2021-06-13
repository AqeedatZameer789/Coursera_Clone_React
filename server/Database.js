const { response } = require("express");
const expressModule = require("express");
const app = expressModule();
const fileModule = require("fs");
//const course = require("./courses");
//const course_model = course.Course_Model;
const project = require("./projects");

const cors = require("cors");
app.use(expressModule.json());
app.options("/", cors());

const mongoose = require("mongoose");
const Project_model=project.project_model;

const client = require("./Client");
const client_model = client.Client_Model;

const subject = require("./Subjects");
const subject_Model = client.Subject_Model;
//const course_model=require("./courses");


mongoose.connect("mongodb+srv://lucas:lucas123@cluster0.ik14g.mongodb.net/Coursera?retryWrites=true&w=majority",
{ useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log("Successfully connected to Database")
})
.catch((error)=> {
    console.log(error);
});
app.use(expressModule.json());
const clients = [];
let fileContents = fileModule.readFileSync("./projectData.json");
console.log("IN FILE");



let arr = JSON.parse(fileContents);
console.log(arr);
/*arr.forEach((element) => {
  const project = new Project_model({
    id: element.id,
    imgsrc: element.imgsrc,
    heading: element.heading,
    paragraph: element.paragraph,
    btn: element.btn,
    span1: element.span1,
    span2: element.span2,
    span3: element.span3,
    span4: element.span4,
    imgsrc_span: element.imgsrc_span,
    level_img: element.level_img,
    level_text: element.level_text,
    imgstar1: element.imgstar1,
    imgstar2: element.imgstar2,
    imgstar3: element.imgstar3,
    imgstar4: element.imgstar4,
    imgstar5: element.imgstar5
  });
  project
    .save()
    .then((result) => {
      console.log("Successfully inserted into DB" + result);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(element);
});
*/
/**
 * app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  Project_model
    .find()
    .then((result) => {
      course_model.find().then((result1) => {
        client_model
          .find()
          .then((result3) => {
            console.log(result3);
            res.send({ result, result1, result3 });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });

});
 */


app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  Project_model
    .find()
    .then((result) => {
      subject_model.find().then((result1) => {
        client_model
          .find()
          .then((result3) => {
            console.log(result3);
            res.send({ result, result1, result3 });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });

});

app.post("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log("in post method");
  const client1 = new user_model({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  client1
    .save()
    .then((result) => {
      console.log("Successfully inserted into DB" + result);
    })
    .catch((error) => {
      console.log(error);
    });
  const client = {
    id: clients.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  clients.push(client);
  console.log(clients);
  console.log(
    "Sending response back to frontend after adding client to the array"
  );
  res.send("Register Successful");
});
app.listen(3001, () => {
  console.log("Server started: Listening at port 3002");
});