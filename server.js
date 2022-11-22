require("dotenv").config();
const express = require('express');  //import express          
const morgan = require("morgan")  // logging middleware
const methodOverride = require("method-override") // allows us to override post request from our ejs/forms
const PORT = process.env.PORT || 3500; // (in case of env file missing)
const Animal = require("./models/animal")
   
//----------------------------------------
//  Middleware
//----------------------------------------
const app = express(); 
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request
app.use(express.static("public")) // serve files from public statically

//----------------------------------------
//  Routes
//----------------------------------------
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.")
})

app.get("/animals/seed", (req, res) => {
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




// test get port

        app.get('/', (req, res) => {
            res.send(
                '<h1>Get worked!</h1>'
            );
        });

// listening Port - always at the bottom
    app.listen(PORT, () => {
        console.log("listening on port:" , PORT)
     })