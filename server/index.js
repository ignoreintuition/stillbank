const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

const dbuser = 'sb_user';
const dbpassword = 's%3BXjAL%7B3E%5B8!Nn';
var db;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

MongoClient.connect('mongodb://' + dbuser + ':'+ dbpassword + '@ds013966.mlab.com:13966/rwd-test', {
  uri_decode_auth: true,
  native_parser: true
}, (err, newDB) => {
  if (err) return console.log(err);
  db = newDB.db('rwd-test')
  app.listen(3000, function() {
    console.log("listening on 3000");
  });
})

app.get('/trans/', (req, res) => {
  db.collection('sb_trans').find({"subAccountID":req.query.sid}).toArray(function(err, results) {
    res.send(results[0]);
  });
})

app.get('/acct/', (req, res) => {
  db.collection('sb_acct').find({"subAccountID":req.query.sid}).toArray(function(err, results) {
    res.send(results[0]);
  });
})

app.post('/', (req, res) => {

})
