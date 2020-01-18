require('dotenv/config')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const websocket = require('./websocket')

const app = express()
const server = http.Server(app)

websocket.setupWebsocket(server)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors({ origion: 'http://localhost:3001' }))
app.use(express.json())
app.use(routes)

server.listen(process.env.PORT || 3333)
