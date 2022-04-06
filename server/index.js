const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000

const log = req=>{
  console.log(
    req.method,
    '\n\treq.query', req.query,
    '\n\treq.body', req.body
  )
}

express()
  .use(cors())
  .use(bodyParser.json())
  .get('/', (req, res) => res.status(200).send('server running'))
  .get('/get', (req, res) => {
    log(req)
    const {millis} = req.query
    res.status(200).json({success:true, millis})
  })
  .post('/post', (req, res) => {
    log(req)
    const {millis} = req.query
    const {value} = req.body
    res.status(200).json({success:true, millis, value})
  })
  .listen(port, console.log.bind(console, 'server running on port', port))
