import React, { useState } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  completeTodo,
  createTodo,
  removeTodo,
} from "../../core/redux/actions/todoActions";
import Tab from "../shared/layout/Tab";

const TodoList = ({ todos = [], createTodo, completeTodo, removeTodo }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(1);

  return (
    <div className="list-wrapper">
      <NewTodoForm createTodo={createTodo} />
      <Tab selectedTabIndex={selectedTabIndex}>
        <div label="All Tasks">
          <ul className="list-group mb-0">
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        </div>
        <div label="Active">
          <ul className="list-group mb-0">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              ))}
          </ul>
        </div>
        <div label="Completed">
          <ul className="list-group mb-0">
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              ))}
          </ul>
        </div>
      </Tab>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (title) => dispatch(createTodo(title)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  completeTodo: (id) => dispatch(completeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
