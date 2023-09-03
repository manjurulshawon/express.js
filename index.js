const express = require('express')
const app = express()

const apiRouter = require('./src/Routes/api')
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/',apiRouter)

app.listen(3000, ()=>{
    console.log("Server Runnig on port 3000");
})