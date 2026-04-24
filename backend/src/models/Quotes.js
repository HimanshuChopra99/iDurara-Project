const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Draft", "Pending", "Sent", "Accepted", "Declined"],
      required: true,
      default: "Draft",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    expireDate: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items",
      },
    ],
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

module.exports = mongoose.model("Quotes", quotesSchema);
