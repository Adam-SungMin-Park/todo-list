import '../css/App.css'
import React  from 'react';
import TodoList from './todoList';
import TodoListEdit from './todoListEdit';


function App() {
  return (
    <>
      <TodoList />
      <TodoListEdit />
    </>
  )
}

export default App;
