import React from "react";
import { connect } from "react-redux";
import useInput from "../shared/hooks/useInput";
import { createTodo, removeTodo } from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ createTodo }) => {
  const [titleProps, resetTitle] = useInput("");

  return (
    <div className="new-todo-form">
      <input
        {...titleProps}
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        name="title"
      />
      <button
        className="new-todo-button"
        onClick={() => {
          createTodo(titleProps.value);
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTodo: (title) => dispatch(createTodo(title)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(null, mapDispatchToProps)(NewTodoForm);
