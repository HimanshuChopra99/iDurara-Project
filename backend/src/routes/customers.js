const express = require("express");
const { createCustomer, getAllCustomers, getCustomerOptions } = require("../controllers/customers");
const router = express.Router();

//routes
router.post("/createCustomer",createCustomer); //create customers
router.get("/getCustomer", getAllCustomers); //get customers
router.get("/getCustomerOption", getCustomerOptions) //get customer options

//export
module.exports = router;
