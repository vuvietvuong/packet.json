// const  express = require('express');
// const MongoClient = require('mongodb').MongoClient;
// const app = express();

// const bodyParser = require('body-parser');
// require('./routes')(app,{});
// const cors = require('cors');

// const mongoose = require('mongoose');
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static(__dirname +'/public'));
// app.get('/new/:urlToshort(*)',(req, res,next)=>{
//     var { urlToshort }= req.params;
// })




// app.listen(process.env.PORT || 3000, ()=>{
//     console.log('everything is working');
// });
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});