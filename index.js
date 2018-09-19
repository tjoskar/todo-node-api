const express = require('express')
const database = require('./db')
const app = express()

app.use(express.json())

app.get('/todo', (req, res) => res.send(database.getAll()))

app.post('/todo', (req, res) => {
  database.create(req.body)
  res.sendStatus(201)
})

app.get('/todo/:id', (req, res) => {
  const todo = database.find(req.params.id)
  if (!todo) {
    res.sendStatus(404)
  } else {
    res.send(todo)
  }
})

app.put('/todo/:id', (req, res) => {
  if (!database.exists(req.params.id)) {
    res.sendStatus(404)
  } else {
    database.update(req.params.id, req.body)
    res.send(database.find(req.params.id))
  }
})

app.delete('/todo/:id', (req, res) => {
  database.delete(req.params.id)
  res.sendStatus(204)
})

const PORT = 8080
app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`))
