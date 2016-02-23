require('dotenv').config();
var Express = require('express')
  , app = Express()
  ,  MongoClient = require('mongodb').MongoClient
  ,  assert = require('assert')

var url = process.env.DATABASE_URI || 'mongodb://localhost:27017/galv-war-room';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
});

app.get('/', function(request, response){
  response.send("server is running")
});
