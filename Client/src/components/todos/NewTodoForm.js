import React from "react";
import useInput from "../../shared/hooks/useInput";

const NewTodoForm = ({ createTodo }) => {
  const [titleProps, resetTitle] = useInput("");

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          name="title"
          className={`form-control ${titleProps.value ? "active" : ""}`}
          id="title"
          required
          {...titleProps}
        />
        <label className="form-label" htmlFor="title">
          New task...
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-info ms-2"
        onClick={() => {
          titleProps.value && createTodo(titleProps.value);
          resetTitle();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default NewTodoForm;
