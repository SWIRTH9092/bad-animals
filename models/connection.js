//----------------------------------------
//  dependencies
//----------------------------------------
require("dotenv").config();           // Load ENV Variables
const mongoose = require("mongoose"); // gives us that db connection and cool methods for CRUD to the datas

//----------------------------------------
//  Database Connection 
//----------------------------------------
//  Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

// Events for when connection opens/disconnects/errors
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//----------------------------------------
//  Export Connection
//----------------------------------------
module.exports = mongoose