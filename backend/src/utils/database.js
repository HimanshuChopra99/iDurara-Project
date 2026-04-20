const mongoose = require('mongoose')
require("dotenv").config()

exports.connect = () => {
   mongoose
   .connect(process.env.DATABASE_URL)
   .then(() => console.log("Database connect successfully"))
   .catch((error) => {
    console.log("error in connection of database")
    console.error(error)
   })
}