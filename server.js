const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const app = express()
const path = require('path')
if (process.env.NODE_ENV !== 'production'){
  require('dotenv')
}

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('/api/users', (req,res) => {
  res.json(['Wojtek','Patrycja'])
})

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Mongoose'))


app.listen(process.env.PORT || 5000)