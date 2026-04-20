<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    lowercase:true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique:true
  },
  country:{
    type:String,
    required:true
  }
},
{
  timestamp:true
});

module.exports = mongoose.model("User",userSchema)
=======
>>>>>>> 1ced5721006014e88c8f636b011b1105cdfd1c3d
