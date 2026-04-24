const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["people", "company"],
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Companies",
      default: null,
    },
    people: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Peoples",
      default: null,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Customers", customersSchema);
