export default function NewTodo(){
  return(
    <div className ="newTodo">
      <label>
        Goal
        <input type = "string"/>
      </label>
      <label>
        Done
        <input type = "checkbox"/>
      </label>
    </div>
  )

}
