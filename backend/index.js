const express = require("express");
const app = express();

const dotenv = require("dotenv");
const database = require("./src/config/database");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { success } = require("zod");

dotenv.config();
const PORT = process.env.PORT || 3000;

//connect db
database.connect();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
