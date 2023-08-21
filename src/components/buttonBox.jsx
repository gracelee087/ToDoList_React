import React from 'react';

export default function ButtonBox({ onDelete, onEdit }) {
  return (
    <div>
      <button onClick={onDelete}>delete</button>
      <button onClick={onEdit}>edit</button>
    </div>
  );
}