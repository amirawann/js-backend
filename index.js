require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/yahoo', (req, res) => {
    res.send('www.yahoo.com')
})
app.get('/login', (req, res) => {
    res.send('please login for this page')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})