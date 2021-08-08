import '../css/App.css'
import React , { useState }  from 'react';
import TodoList from './todoList';
import TodoListEdit from './todoListEdit';


function App() {
  const [todo , setTodo] = useState(sampleTodo);
  const [edit, setEdit] = useState();



  return (
    <div className = "container">
      <TodoList
      todo = {todo} />
       <div className ="addTodo">
          <button onClick = {()=>setEdit('New')}>Add Todo</button>
        </div>
      <TodoListEdit
       edit = {edit}
       />
    </div>
  )
}
 const sampleTodo = [
    {
      id:1,
      goal:"Sleep enough",
      isChecked: true
    },
    {
      id:2,
      goal:"Work out",
      isChecked: false
    },
    {
      id:3,
      goal:"Code",
      isChecked: true
    }
]

export default App;
