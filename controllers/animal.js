//-------------------------------------
// Import Dependencies
//-------------------------------------

const express = require("express")
const Animal = require("../models/animal")

//-------------------------------------
// Create Route
//-------------------------------------
const router = express.Router();

//-------------------------------------
// Routes
//-------------------------------------
router.get("/", (req, res) => {
    console.log(req)
    res.send("server works")
})

//-------------------------------------
// Export the Router
//-------------------------------------
module.exports = router;
