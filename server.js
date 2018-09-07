var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser'); 
var app = express();

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require("mongodb").ObjectID;  
var db;
var cors = require('cors')


app.use(bodyParser.json()); // to parse the jsons in the post
app.use(cors()); // to allow multiple origin requests

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/items", { useNewUrlParser: true }, function(err, client) {
  if(err) throw err;

  db = client.db('items');
  app.listen(3000);
  console.log("Listening on port 3000\n");

});

// Getting all the items
app.get("/todos", function(req, res) {
  db.collection("items").find().toArray(function (error, results) {
      if (error) throw error;
      res.send(results);
    });                
});

// Inserting a new item
app.post('/todos', (req, res, next) => {
    
  //To avoid anything else to be injected
  var item = { name: req.body.name };

  db.collection("items").insertOne(item, null, function (error, results) {
      if (error) throw error;   
      res.send();
  });
});

app.delete('/todos/:id', (req, res, next) => {

  var itemToDelete = { _id: new ObjectID(req.params.id) };

  db.collection('items').deleteOne(itemToDelete, (err, result) => {
    if(err)  throw err;
    res.send();
  });
});

app.put('/todos/:id', (req, res, next) => {

  var itemToUpdate = { _id: new ObjectID(req.params.id) };

  db.collection("items").update( itemToUpdate, 
    {$set: {name: req.body.name }}, 
    (err, result) => {

      if(err) throw err;
      res.send();
  });
});