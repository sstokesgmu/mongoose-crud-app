const mongoose = require("mongoose");

const conn = () => {
    //! connect to the database
    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once("open", () => {
            console.log("connected to mongodb")
        });
    } catch (error) {
        console.log(`Could not connect ${error.message}`);
    }
}

module.exports = conn;