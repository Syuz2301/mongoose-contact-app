const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;
function connect() {
    mongoose.connect(DB_URL).then(
        () => {
            console.log("MongoDB connected");
        },
        (error) => {
            console.error(error);
        }
    )
};

module.exports = { connect }