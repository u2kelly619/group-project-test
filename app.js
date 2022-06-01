const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<head><meta charset="utf-8" /></head>')
  res.write('<body>')
  res.write('<h1>這是clara首頁!clara肚子餓了</h1>')
  res.write('</body>')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})