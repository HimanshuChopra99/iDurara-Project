const Items = require("../models/Items");
const Quotes = require("../models/Quotes");
const { itemsSchema } = require("../validation/items");
const { quotesSchema } = require("../validation/quotes");

//create quotes
const createQuotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const body = req.body;

    //parsed data
    const parsedBody = quotesSchema.safeParse(body);
    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: "Failed to validate data",
        error: parsedBody.error.issues[0].message,
      });
    }

    const data = parsedBody.data;

    //store items in db
    let itemsIds = [];

    if (data.items && data.items > 0) {
      const createdItem = await Items.insetMany(data.items);
      itemsIds = createdItem.map((item) => (item = item._id));
    }

    //store quotes in db
    const quotes = await Quotes.create({
      ...data,
      items: itemsIds,
      userId: userId,
    });

    //resturn response
    return res.status(201).json({
      success: true,
      message: "Quotes created successfully",
      data: quotes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create Quotes",
      error: error.message,
    });
  }
};

//get all quotes
const getAllQuotes = async (req, res) => {
  try {
    const userId = req.user.id;

    //get quotes from db
    const quotes = await Quotes.find({ userId })
      .populate("items")
      .populate("client");

    if (!quotes) {
      return res.status(404).json({
        success: false,
        message: "Quotes not found",
      });
    }

    //return response
    return res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: quotes,
    });
  } catch (error) {
    //errors
    return res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: error.message,
    });
  }
};

//get one quotes by id
const getQuotesById = async (req, res) => {
  try {
    const userId = req.user.id;
    const id = req.params;

    //get data form db
    const quotes = await Quotes.findOne({ _id: id, userId })
      .populate("items")
      .populate("client");

    if (!quotes) {
      return res.status(404).json({
        success: false,
        message: "Quotes not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: quotes,
    });
  } catch (error) {
    return (
      res.status(500),
      json({
        success: false,
        message: "Failed to get data",
        error: error.message,
      })
    );
  }
};

module.exports = {
  createQuotes,
  getAllQuotes,
  getQuotesById,
};
