import React from "react";
import "./TodoListItem.css";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "./actions";

const TodoListItem = ({ todo, removeTodo, completeTodo }) => (
  <div className="todo-item-container">
    <h3>{todo.title}</h3>
    <div className="buttons-container">
      {!todo.completed && (
        <button
          className="completed-button"
          onClick={() => completeTodo(todo.id)}
        >
          Mark As Completed
        </button>
      )}
      <button
        className="remove-button"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
  completeTodo: (id) => dispatch(completeTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
