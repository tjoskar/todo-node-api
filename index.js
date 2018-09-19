const express = require('express')
const app = express()
app.use(express.json())

const port = 8080

let unique_id = 3;

let todos = 
[
    {
      "id": 1,
      "name": "Buy milk",
      "isComplete": false
    },
    {
      "id": 2,
      "name": "Buy a cat!",
      "isComplete": false
    }
]
  
//////////
// TODO //
//////////

app.get("/todo", (req, res) => {
    res.send(todos)
})

app.post("/todo", (req, res) => {
    const new_obj = {
        id: unique_id,
        name: req.body.name ? req.body.name : "",
        isComplete: req.body.isComplete ? req.body.isComplete : false
    }
    unique_id++;
    todos.push(new_obj)
    res.sendStatus(201)
})

/////////////
// TODO ID //
/////////////

app.get('/todo/:id', (req, res) => {
    const t = todos.find(t => t.id == req.params.id)
    t ? res.send(t) : res.sendStatus(404)
})

app.put('/todo/:id', (req, res) => {
    const t = todos.find(t => t.id == req.params.id)
    if (!t) {
        res.sendStatus(404)
    } else {
        if(req.body.name) t.name = req.body.name
        if(req.body.isComplete != undefined) t.isComplete = req.body.isComplete
        res.status(200)
        res.send(t)
    }
})

app.delete('/todo/:id', (req, res) => {
    const t = todos.find(t => t.id == req.params.id)
    if (!t) {
        res.sendStatus(404)
        return
    }
    todos = todos.filter(t => t.id != req.params.id)
    res.sendStatus(200)   
})

////////////
// LISTEN //
////////////

app.listen(port, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("listening on port " + port + "...")
    }
})