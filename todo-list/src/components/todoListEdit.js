
import NewTodo from './NewTodo';

export default function TodoListEdit({edit}){

  if(edit === undefined){
    return(
      <h1>Please select entry</h1>
    )
  }


  if(edit === 'New'){
    return (
        <>
          <h1>New Todo</h1>
          <NewTodo/>
        </>

    )
  }
}
