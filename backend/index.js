const express = require("express");
const app = express();

const dotenv = require("dotenv");
const database = require("./src/config/database");
const cors = require("cors");
const { auth } = require("./src/middleware/auth");
const cookieParser = require("cookie-parser");
dotenv.config();

// routes
const userRouter = require("./src/routes/user");
const companyRouter = require("./src/routes/company");
<<<<<<< HEAD
const customerRouter = require("./src/routes/customers")
=======
const peoplesRouter = require("./src/routes/peoples")
>>>>>>> 53b58dbac6d916af0c16915fefd286f947c4fcc4

const PORT = process.env.PORT || 3000;

//connect db
database.connect();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/auth", userRouter);

//authantication
app.use(auth);
//routes
app.use("/api/v1/company", companyRouter);
<<<<<<< HEAD
app.use("/api/v1/customer", customerRouter)

=======
app.use("/api/v1/peoples",peoplesRouter)
>>>>>>> 53b58dbac6d916af0c16915fefd286f947c4fcc4

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
