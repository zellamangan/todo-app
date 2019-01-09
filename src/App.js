import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'

class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Buy pencils'},
      {id: 3, content: 'Finish nav icon'},
      {id: 4, content: 'pay bills'},
      
    ]
  }

  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos 
    })

  } 

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo list</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
