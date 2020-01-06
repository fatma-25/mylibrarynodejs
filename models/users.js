const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  login: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  privilege: { type: String },
  date:{ type: String, required: true },
  imageUser: { type: String },
  quote: { type: String },
  booklibrary:{
    type:Array
  }
  // ,
  // dateregister: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("user", userSchema);