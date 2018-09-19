const express = require('express')

const app = express()

app.use(express.json())

let todos = []

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

// Get all
app.get('/todo', function(req, res) {
  res.send(todos)
})

// get one todo
app.get('/todo/:id', function(req, res) {
  res.send({
    id: req.params.id
  })
})

// update
app.put('/todo/:id', function(req, res) {
  res.send({
    id: req.params.id,
    data: req.body
  })
})

// delete
app.delete('/todo/:id', function(req, res) {
  res.send({
    id: req.params.id
  })
})

// create
app.post('/todo', function(req, res) {
  res.sendStatus(201)
})


app.listen(8080, err => {
  if (err) {
    console.error('NO!!!!')
  } else {
    console.log('We are live on 8080')
  }
})
