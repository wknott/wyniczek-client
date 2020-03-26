// const express = require('express');
// const cors = require('cors');
// const app = express();
// const MongoClient = require('mongodb').MongoClient;
// const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config();
// const url = process.env.MONGO_URL;
// const port = process.env.PORT || 5000;

// // app.route('/').get(function(req,res){
// //   MongoClient.connect(url, function(err, db){
// //     var cursor = db.collection('Users').find();
// //     cursor.each(function(err,item) {
// //       if(item != null){
// //         res.send(item.name);
// //       }
// //     });
// //     db.close();
// //   })
// // })

// // const server = app.listen(port, () =>{
// //   console.log(`Server is running on port: ${port}`);
// // });
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("wyniczek");
  dbo.createCollection("users",function(err,res) {
    if (err) throw err;
    console.log('Collection created');
    db.close
  })
  db.close();
});