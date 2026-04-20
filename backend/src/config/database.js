const mongoose = require("mongoose");
require("dotenv").config();
const dns = require("dns");

// Use stable public DNS servers (Google + Cloudflare)
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database connect successfully"))
    .catch((error) => {
      console.log("error in connection of database");
      console.error(error);
    });
};
