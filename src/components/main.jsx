import React, { useState } from 'react';
import ButtonBox from './buttonBox';

export default function MainList({ taskList, deleteTask, editTask }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  function handleEdit(index, task) {
    setEditIndex(index);
    setEditValue(task);
  }

  function handleSave(index) {
    editTask(index, editValue);
    setEditIndex(null);
    setEditValue('');
  }

  return (
    <div className="mainList">
      <ul>
        {taskList.map((task, i) => (
          <li key={i} className="listborder">
            {editIndex === i ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) =>  setEditValue(e.target.value)}
                  className="edit-input"/>
                <button onClick={() => handleSave(i)}>Save</button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <ButtonBox
                  onDelete={() => deleteTask(i)}
                  onEdit={() => handleEdit(i, task)}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}