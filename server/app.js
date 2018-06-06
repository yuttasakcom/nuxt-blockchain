const express = require('express')
const app = express()

app.set('port', process.env.PORT || '3000')

const routes = require('./routes')
app.use(routes)

module.exports = app
