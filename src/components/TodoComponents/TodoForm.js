import React from "react";
import './TodoForm.css';
import SimpleStorage, { clearStorage } from "react-simple-storage";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.task}
        placeholder="task"
        name="task"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        value={props.note}
        placeholder="note"
        name="note"
        onChange={props.handleChanges}
      />
      <button onClick={props.updateList}>Add Todo</button>
      <button onClick={() => clearStorage()}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
