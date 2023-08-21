import { useState } from 'react'

export default function InputForm({getTask}) {
  const [taskName, setTaskName] = useState();
  
  function handleClick(event){
    event.preventDefault()
    getTask(taskName)
    // console.log(taskName)

  }

  return (





    <div className='inputForm'>
      <form action=''>
        <input placeholder='New Task'
          onChange={(e) => {
              setTaskName(e.target.value);
            }}></input>
        <button onClick={handleClick}>Add Task</button>
      </form>
    </div>







  );



}
