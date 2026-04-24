const express = require("express");
const {
  createQuotes,
  getAllQuotes,
  getQuotesById,
} = require("../controllers/quotes");
const router = express.Router();

router.post("/quotes", createQuotes);
router.get("/quotes", getAllQuotes);
router.get("/quotes/:id", getQuotesById); 

module.exports = router;
