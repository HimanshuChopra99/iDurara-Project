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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Companiese",
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Peoples", peoplesSchema);
