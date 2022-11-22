require("dotenv").config();
const express = require('express');  //import express          
const morgan = require("morgan")  // logging middleware
const methodOverride = require("method-override") // allows us to override post request from our ejs/forms
const PORT = process.env.PORT || 3500; // (in case of env file missing)
const Animal = require("./models/animal")
const AnimalRouter = require("./controllers/animal")

//----------------------------------------
//  Middleware
//----------------------------------------
const app = express(); 
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request
app.use(express.static("public")) // serve files from public statically
app.use("/animals", AnimalRouter)

// listening Port - always at the bottom
    app.listen(PORT, () => {
        console.log("listening on port:" , PORT)
     })