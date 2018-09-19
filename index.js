const express = require('express')

const app = express()

app.use(express.json())

let todos = [
  {
    id: 1,
    todo: 'Eat lunch'
  },
  {
    id: 2,
    todo: 'something else'
  }
]

app.get('/ping', (req, res) => {
  res.send('Pong!')
})

// Get all (CHECK)
app.get('/todo', function(req, res) {
  res.send(todos)
})

// get one todo (CHECK)
app.get('/todo/:id', function(req, res) {
  res.send( todos.filter(todo => todo.id == req.params.id))
})

// update one todo (CHECK)
app.put('/todo/:id', function(req, res) {
  todos.map(todo => {if(todo.id == req.params.id){
    todo.todo = req.body.todo 
  }}) 
})

// delete (CHECK)
app.delete('/todo/:id', function(req, res) {
  let index = todos.findIndex(x => x.id == req.params.id)
  todos.splice(index, 1)

})

// create (CHECK)
app.post('/todo', function(req, res) {
  todos.push(req.body)
  //console.log(req)
  res.sendStatus(201)
})


app.listen(8080, err => {
  if (err) {
    console.error('NO!!!!')
  } else {
    console.log('We are live on 8080')
  }
})
