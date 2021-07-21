



export default function TodoList({todo}){


  return (
      <div className = "todoListColumn">
        <h1>Todo List</h1>
        {todo.map((todo) => {
            return(
              <div className = "todoList" key = {todo.id}>
                <div>{todo.id}</div>
                <div>{todo.isChecked}</div>
              </div>
            )
        })}
      </div>

  )
}
