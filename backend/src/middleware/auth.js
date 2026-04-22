const jwt = require("jsonwebtoken");

require("dotenv").config();

//authentication
exports.auth = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.replace("Bearer ", "");

    //token missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token found",
      });
    }

    //verify
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Failed to validate user authentication",
    });
  }
};
