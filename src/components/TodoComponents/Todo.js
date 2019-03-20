import React from 'react';
import SimpleStorage, { clearStorage } from "react-simple-storage";
import './Todo.css';

const Todo = props =>{
  return (
    <div className="todo-card">
      <div className="todo-info" onClick={() => clearStorage(this)}>
        <h3>{props.todoProp.task}</h3>
        <p>
          <strong>Note's:</strong> {props.todoProp.note}
        </p>
      </div>
    </div>
  );
}

export default Todo;