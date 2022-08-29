const express = require('express')
const app = express()
const port = 3000
let isDisableKeepAlive = false
app.use(function(req, res, next) {
  if (isDisableKeepAlive) {
    res.set('Connection', 'close')
  }
  next()
})
console.log(process.pid)
app.get('/', function (req, res) { 
  res.send(`
    Hello World!<br>
    크크<br>
    process.env.NODE_ENV: ${process.env.NODE_ENV}<br>
    pcocess.pid: ${process.pid}<br>
    코코<br>
  `)
})
let appServer = app.listen(port, function () {
  process.send('ready')
  console.log(`application is listening on port ${port}...`)
})
process.on('SIGINT', function () {
  isDisableKeepAlive = true
  appServer.close(function () {
    console.log('server closed.')
    process.exit(0)
  })
})