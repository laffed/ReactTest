import React from 'react';
import './App.css';
import TimeOfDay from './components/TimeOfDay';
import TodoItem from './components/TodoItem';
import todosData from './components/todosData';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }


  render() {
    const todoList = this.state.todos.map((n) =>
      <TodoItem
        handleChange={this.handleChange}
        key={n.id}
        item={n} />
    )

    return (
      <div className="App">
        <h1 style={{ color: "black" }}>Le Todo App</h1>
        <TimeOfDay />
        <div className="todo-list">
          {todoList}
        </div>
      </div>
    );
  }
}

export default App;
