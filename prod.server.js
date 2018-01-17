// 启动打包后(./dist)的项目

var express = require('express')
var config = require('./config/index')

var app = express()
var router = express.Router()
var port = process.env.PORT || config.build.port

router.get("/", function (req, res, next) {
  req.url = './index.html'
  next()
})

app.use(router)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('> Listening at ' + port + '\n')
})
