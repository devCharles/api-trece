const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'hola mundo'
  })
})

app.get('/otro', (req, res) => {
  res.json({
    message: 'otro endpoint'
  })
})

app.listen(8080, () => {
  console.log('Server listening')
})
