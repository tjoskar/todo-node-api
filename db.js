let uniqueId = 3

let todos = [
  {
    id: 1,
    name: 'Buy milk',
    isComplete: false
  },
  {
    id: 2,
    name: 'Buy a cat!',
    isComplete: false
  }
]

function createItem({ id, name = '', isComplete = false }) {
  return {
    id,
    name: String(name),
    isComplete: Boolean(isComplete)
  }
}

const database = {
  exists(id) {
    return Boolean(todos.find(todo => todo.id === Number(id)))
  },
  getAll() {
    return todos
  },
  find(id) {
    return todos.find(todo => todo.id === Number(id))
  },
  create(todo) {
    const newItem = createItem({ ...todo, id: uniqueId++ })
    todos.push(newItem)
    return newItem
  },
  update(id, todo) {
    todos = todos.map(t => {
      if (t.id === Number(id)) {
        return Object.assign({}, t, todo, { id: Number(id) })
      } else {
        return t
      }
    })
  },
  delete(id) {
    todos = todos.filter(todo => todo.id != id)
  }
}

module.exports = database
