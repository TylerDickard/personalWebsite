// modules
const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// cross origin middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

require('./routes')(app);

app.listen(config.port, () => console.log( `Test app listening on ${config.port}!`))