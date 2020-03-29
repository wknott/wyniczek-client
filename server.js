const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV !== 'production'){
  require('dotenv')
}
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Mongoose'))
const indexRouter = require('./routes/index')
app.use('/', indexRouter)
app.use(express.static('public'));

app.listen(process.env.PORT || 3000)
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
// const MongoClient = require('mongodb').MongoClient;
// const url = process.env.MONGO_URL;

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   const dbo = db.db("wyniczek");
//   dbo.createCollection("users",function(err,res) {
//     if (err) throw err;
//     console.log('Collection created');
//     db.close
//   })
//   db.close();
// });
// MongoClient.connect(url, { useUnifiedTopology: true }, function(err,db) {
//   if(err) throw err;
//   const dbo = db.db('wyniczek');
//   const myobj = { name: "Wojtek" };
//   dbo.collection("users").insertOne(myobj, function(err,res) {
//     if (err) throw err;
//     console.log('Dodano 1 użytkownika');
//     db.close(); 
//   });
// });
// MongoClient.connect(url, {useUnifiedTopology: true}, function(err,db) {
//   const dbo = db.db('wyniczek');
//   dbo.collection("users").find({}, {projection:{ _id:0,name:1}}).toArray(function(err,res){
//     console.log(res);
//     db.close();
//   });
// });
