const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId:{
    type:String,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  }, 
  new:{
    type:Boolean,
    required:true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
