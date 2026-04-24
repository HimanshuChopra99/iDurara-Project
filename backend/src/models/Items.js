const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Items", itemsSchema);
