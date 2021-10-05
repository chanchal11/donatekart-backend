var http = require('http'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({}));

// API endpoints
app.use("/api/campaign",require("./routes/campaign.route"));

module.exports = app;