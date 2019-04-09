console.log("Hello");

//npm init
//npm run start
//npm install request

var express = require('express');

var app = express();

var lodash = require('lodash');



app.get("/", function (req,res){
    res.send("Hello");
});
//app. all sve metode
//app.use generalan, pozivanje middleware

app.use("/createPeople", function (req, res, next) {
    console.log('people');
    next();
});
app.listen(4000);

app.get('/api/test', (req, res) => {
    res.send({ hello: 'world' });
  });