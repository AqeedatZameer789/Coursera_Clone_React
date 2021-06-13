import axios from "axios";

function PostUser(params) {
    
  const new_user = { name: params.name, email: params.email,password: params.password };

  return axios({
    method: "POST",
    url: "http://localhost:3008",
    data: new_user,
  });
}

function GetData(params) {
  return axios({ method: "GET", url: "http://localhost:3008" });
}

export { PostUser ,GetData};
