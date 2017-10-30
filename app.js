var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./mongo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
var vote = require('./routes/vote')(express.Router(), Keys, Voting);
app.use('/vote', vote);
app.listen(3000, (req,res)=>{
  console.log('Server Port on 3000!');
})

module.exports = app;
