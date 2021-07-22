


export default function TodoItem({id , goal, isChecked}){
  return(
    <div className = "todoItem">
      <div className = "todoHeader">
        <h3 className = "todoNumber">{id}</h3>
        <h3 className = "todoGoal">{goal}</h3>
        <h3>{isChecked ? "yes" : "NOOO"}</h3>

      </div>
    </div>

  )

}
