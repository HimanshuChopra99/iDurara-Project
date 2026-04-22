const Peoples = require("../models/Peoples");
const Companies = require("../models/Companies");
const { customerSchema } = require("../validation/customers");
const { success } = require("zod");
const Customers = require("../models/Customers");

const getCustomerOptions = async (req, res) => {
  try {
    const userId = req.user.id;
    const people = await Peoples.find({ userId }).select("firstName lastName");
    const companies = await Companies.find({ userId }).select("name");

    res.status(200).json({
      success: true,
      data: { people, companies },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get data",
    });
  }
};

const createCustomer = async (req, res) => {
  try {
    const userId = req.user.id;

    //data validation
    const parsedBody = customerSchema.safeParse(req.body);
    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: parsedBody.error.issues[0].message,
      });
    }

    //create payload
    const { type, company, people } = parsedBody.data;

    const payload = { type, userId };
    if (company) payload.company = company;
    if (people) payload.people = people;

    //store in db
    const newCustomer = await Customers.create(payload);

    //return response
    return res.status(201).json({
      success: true,
      message: "Customer created successfully",
      data: newCustomer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create customer",
      error: error.message,
    });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const userId = req.user.id;
    const customerData = await Customers.find({ userId }).populate("people");

    console.log(customerData);
    res.status(200).json({
      success: true,
      message: "Customer data fetch successfully",
      data: customerData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch customers data",
      error: error.message,
    });
  }
};

module.exports = {
  createCustomer,
  getCustomerOptions,
  getAllCustomers,
};
