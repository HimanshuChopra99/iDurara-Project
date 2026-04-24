const { companiesSchema } = require("../validation/companies");
const Companies = require("../models/Companies");

//create company
const createCompanies = async (req, res) => {
  try {
    const body = req.body;
    console.log(body)
    const parsedBody = companiesSchema.safeParse(body);

    console.log(parsedBody)

    if (!parsedBody.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid data or missing data",
      });
    }

    const { name, contact, country, phone, email, website } = parsedBody.data;

    const isExists = await Companies.findOne({ email });
    if (isExists) {
      return res.status(400).json({
        success: false,
        message: "Company already exists",
      });
    }

    const payload = {
      name,
      email,
      userId: req.user.id,
    };

    if (contact) payload.contact = contact;
    if (country) payload.country = country;
    if (website) payload.website = website;

    const newCompany = await Companies.create(payload);

    return res.status(201).json({
      success: true,
      data: newCompany,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create company",
    });
  }
};

//get all companies
const getCompanies = async (req, res) => {
  try {
    const userId = req.user.id;

    //get all data
    const allCompanies = await Companies.find({ userId }).lean();

    //return response
    return res.status(200).json({
      success: true,
      message: "All companies data fetch successfully",
      data: allCompanies,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to get companies data",
    });
  }
};

module.exports = {
  createCompanies,
  getCompanies,
};
