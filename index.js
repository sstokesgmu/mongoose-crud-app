//Get Imports
require("dotenv").config();
const express = require("express");
const app = express();
const conn = require("./config/db")
conn();

const starterFruits = require("./config/seed");
const Fruit = require("./models/fruit")


//Bring in fruit routes
const fruitRoutes = require("./routes/fruitRoutes");
app.use(express.json());
app.use("/api/fruits", fruitRoutes);


//Home route
app.get('/', (req,res) => {
    res.send("Home Page!");
})

//Seed route

app.get('/fruits/seed', async (req, res) => {
    try {
        await Fruit.deleteMany({});
        await Fruit.create(starterFruits);
        res.json(starterFruits);
    } catch(error){
        console.log(`Something went wrong loading seed data: ${error.message}`);
    }
});






app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
})

