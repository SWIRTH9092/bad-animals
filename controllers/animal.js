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

router.get("/seed", (req, res) => {
    // array of starter animals
    const startAnimals = [
          { species: "blue jay", extinct: false, location: "North America", lifeExpectancy: 7 },
          { species: "peacock", extinct: false, location: "Asia and Africia", lifeExpectancy: 15 },
          { species: "great horned owl", extinct: false, location: "North and South America", lifeExpectancy: 13 },
          { species: "dodo bird", extinct: true, location: "Mauritius Island", lifeExpectancy: 0 },
          { species: "penguins", extinct: false, location: "Antarctica", lifeExpectancy: 10 },
          { species: "cardinal", extinct: false, location: "North America", lifeExpectancy: 7 },
          { species: "dove", extinct: false, location: "World Wide", lifeExpectancy: 1.5 },
          { species: "robin", extinct: false, location: "North and South America", lifeExpectancy: 1.1 },
        ]
  
    // Delete all animals
    Animal.deleteMany({}, (err, data) => {
      // Seed Starter Animals
      Animal.create(startAnimals,(err, data) => {
          // send created animals as response to confirm creation
          res.json(data);
        }
      );
    });
  });

//-------------------------------------
// Export the Router
//-------------------------------------
module.exports = router;
