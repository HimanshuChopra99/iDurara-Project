const mongoose = require("mongoose");

const peoplesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
<<<<<<< HEAD
    type: mongoose.Schema.Types.ObjectId,
    ref: "Companiese",
=======
    type: String,
    ref: "companiese",
>>>>>>> 53b58dbac6d916af0c16915fefd286f947c4fcc4
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique:true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Peoples", peoplesSchema);
