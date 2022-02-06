import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

const TodoListItem = ({ todo, removeTodo, completeTodo }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
    <div className="d-flex align-items-center">
      {!todo.completed ? <span>{todo.title}</span> : <s>{todo.title}</s>}
    </div>
    <span data-mdb-toggle="tooltip">
      {!todo.completed && (
        <FaCheck
          className="text-success pointer"
          title="Mark as completed"
          onClick={() => completeTodo(todo.id)}
        ></FaCheck>
      )}
      <FaTimes
        className="text-primary pointer"
        title="Remove item"
        onClick={() => {
          removeTodo(todo.id);
        }}
      ></FaTimes>
    </span>
  </li>
);

export default TodoListItem;
