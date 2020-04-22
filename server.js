const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))
const usersRouter = require('./routes/users')
const gamesRouter = require('./routes/games')
app.use('/api/users', usersRouter)
app.use('/api/games', gamesRouter)

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})
mongoose.connect(process.env.URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', error => console.log('Connected to Mongoose'))


app.listen(process.env.PORT || 5000)