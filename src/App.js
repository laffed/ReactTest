import React from 'react';
import './App.css';
import TimeOfDay from './components/TimeOfDay';
import TodoItem from './components/TodoItem';
import todosData from './components/todosData';


function App() {
  const todoList = todosData.map((n) => <TodoItem key={n.id} text={n.text} completed={n.completed} />)

  return (
    <div className="App">
      <TimeOfDay />
      <div className="todo-list">
        {todoList}
      </div>
    </div>
  );
}

export default App;
