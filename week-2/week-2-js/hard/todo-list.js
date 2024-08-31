/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.task = []
  }

  add(expression) {
    this.task.push(expression)
  }

  return() {
    return this.task;
  }

  remove(index) {
    if (index >= 0 && index < this.task.length) {
      this.task.splice(index, 1)
      return this.task
    } else {
      return this.task
    }
  }

  update(index, updatedTodo) {
    if (index > 0 && index < this.task.length) {
      this.task[index] = updatedTodo;
    }
  }

  getAll() {
    return this.task;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.task.length) {
      return this.task[indexOfTodo]
    } 
    return null
  }

  clear() {
    this.task = [];
  }

  
}

module.exports = Todo;
