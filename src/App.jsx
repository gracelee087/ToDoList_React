import React, { useState } from 'react';
import './App.css';
import InputForm from './components/form';
import MainList from './components/main';

function App() {
  const [count, setCount] = useState(0);
  const [taskName, setTaskName] = useState();
  const [taskList, setTaskList] = useState([]);

  function getDataFromInput(input) {
    setTaskName(input);
    setTaskList([...taskList, input]);
  }

  function deleteTask(index) {
    const updatedTaskList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
  }

  function editTask(index, updatedValue) {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = updatedValue;
    setTaskList(updatedTaskList);
  }

  return (
    <>
      <div>
        <InputForm getTask={getDataFromInput} />
        <h1>{taskName}</h1>
        <MainList taskList={taskList} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </>
  );
}

export default App;