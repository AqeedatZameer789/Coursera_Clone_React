const fileModule = require("fs");
const { response } = require("express");
const expressModule = require("express");

const app = expressModule();
const cors = require("cors");
app.options("/", cors());
app.use(expressModule.json());
let fileContents = fileModule.readFileSync("./Data.json");


let arr = JSON.parse(fileContents);
console.log(arr);

app.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send( arr );
  
});
app.post("/", (request, response) => {
  console.log("Post method Called");
  console.log(request.body);
  const new_user = {
    id: arr.length + 1,
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  };
  arr.push(new_user);
  response.header("Access-Control-Allow-Origin", "*");
  response.send(arr);
});

app.listen(3008, () => {
  console.log("Server started: Listening at port 3008");
});