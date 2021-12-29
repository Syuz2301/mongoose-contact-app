const express = require("express");
const bodyParser = require("body-parser");


require('dotenv').config();

const api = require("./app");

const db = require('./app/db');

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.use('/api', api);

// app.use((error, req, res, next) => { res.send(error)});

app.use(express.static("../frontend/build"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

db.connect();