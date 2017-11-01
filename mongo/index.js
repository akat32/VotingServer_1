var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Voting');
mongoose.Promise = global.Promise;

var KeysSchema = mongoose.Schema({
  key : {type : String},
  used : {type : Boolean}
});
Keys = mongoose.model("keys", KeysSchema);

var PoliticianSchema = mongoose.Schema({
  name : {type : String},
  vote : {type : Number}
});

Poititcian = mongoose.model("poititcian", PoliticianSchema);


exports.Poititcian = Poititcian;
exports.Keys = Keys;
