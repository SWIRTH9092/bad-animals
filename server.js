require("dotenv").config();
const express = require('express');
const app = express();
// logging middleware
    const morgan = require("morgan")  
    app.use(morgan("tiny"))  // logging middleware
//Port         
    const PORT = process.env.PORT || 3500; // (in case of env file missing)


// listening Port
    app.listen(PORT, () => {
        console.log("listening on port:" , PORT)
     })