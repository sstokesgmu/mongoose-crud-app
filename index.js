//Get Imports
require("dotenv").config();
const express = require("express");
const app = express();
const conn = require("./config/db")
conn();

//Home route
app.get('/', (req,res) => {
    res.send("Home Page!");
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
})

