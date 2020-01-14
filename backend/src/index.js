const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const MONGO_URI = 'mongodb+srv://week10:week10@cca-dm9y5.mongodb.net/test?retryWrites=true&w=majority'
const app = express()

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)
