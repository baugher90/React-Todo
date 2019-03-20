import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import SimpleStorage, { clearStorage } from "react-simple-storage";
import './TodoList.css';

const Todos = [];

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: Todos,
      task: '',
      note: '',
    }
  }

  handleChanges = event => {
    console.log("event: ", event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateList = event => {
    event.preventDefault();
    const newTodos = {
      task: this.state.task,
      note: this.state.note,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todoList: [...this.state.todoList, newTodos], task:'', note:''
    });
  };

  render() {
    return (
        <div className="Todo-wrapper">
        <SimpleStorage parent={this} />
        <div className="todo-list">
          {this.state.todoList.map((todoFromMap, index) => (
            <Todo key={index} todoProp={todoFromMap} />
          ))}
        </div>
        <TodoForm
          task={this.state.task}
          note={this.state.note}
          id={this.state.id}
          completed={this.state.completed}
          handleChanges={this.handleChanges}
          updateList={this.updateList}
        />
      </div>
    );
  }
}

export default TodoList;
