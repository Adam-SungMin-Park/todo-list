import TodoItem from './todoItem';



export default function TodoList({todo}){
  return (
      <div className = "todoListColumn">
        <h1>Todo List</h1>
        {todo.map((todo) => {
            return(
              <TodoItem
              key = {todo.id}
              {...todo}
              />
            )
        })}
        <div className ="addTodo">
          <button>Add Todo</button>
        </div>
      </div>

  )
}
