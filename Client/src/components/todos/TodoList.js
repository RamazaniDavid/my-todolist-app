import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  completeTodo,
  createTodo,
  removeTodo,
  notCompleteTodo,
} from "../../core/redux/actions/todoActions";
import Tab from "../shared/layout/Tab";

const TodoList = ({
  todos = [],
  createTodo,
  completeTodo,
  removeTodo,
  notCompleteTodo,
}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm createTodo={createTodo} />
      <Tab>
        <div label="All Tasks">
          <ul className="list-group mb-0">
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                notCompleteTodo={notCompleteTodo}
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
                  notCompleteTodo={notCompleteTodo}
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
                  notCompleteTodo={notCompleteTodo}
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
  notCompleteTodo: (id) => dispatch(notCompleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export { TodoList };
