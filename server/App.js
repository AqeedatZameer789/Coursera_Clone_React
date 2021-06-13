const { response } = require("express");
const expressModule = require("express");
const app = expressModule();
const cors = require("cors");
app.use(expressModule.json());

const users = [
  {
    id: 1,
    name: "aqeedat",
    email: "aqeedat@gmail.com",
    password: "1234",
  },
];

app.options("/", cors());

app.post("/", (request, response) => {
  console.log("Post method Called");
  console.log(request.body);
  const new_user = {
    id: users.length + 1,
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
  };
  users.push(new_user);
  response.header("Access-Control-Allow-Origin", "*");
  response.send(users);
  
});

app.get("/users", (request, response) => {
  console.log("/projects page accessed");
  response.header("Access-Control-Allow-Origin", "*");
  response.send(users);
});
app.listen(3004, () => {
  console.log("Server started: Listening at port 3004 for part 2 sinup");
});
