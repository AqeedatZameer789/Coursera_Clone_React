const mongoose = require("mongoose");
const schema = mongoose.Schema;
const client_schema = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, requred: true },

});
const Client_Model = mongoose.model("clients", client_schema);
module.exports.Client_Model = Client_Model;
