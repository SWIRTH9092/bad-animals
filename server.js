require("dotenv").config();
const express = require('express');
const app = express();
// logging middleware
    const morgan = require("morgan")  
    app.use(morgan("tiny"))  // logging middleware
//Port         
    const PORT = process.env.PORT || 3500; // (in case of env file missing)

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