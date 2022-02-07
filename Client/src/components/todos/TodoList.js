import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import Tab from "../shared/layout/Tab";
import {
  loadTodos,
  createTodo,
  removeTodo,
  completeTodo,
  notCompleteTodo,
} from "../../core/redux/thunks/todoThunks";

const TodoList = ({
  todos = [],
  createTodo,
  completeTodo,
  removeTodo,
  notCompleteTodo,
  loadTodos,
}) => {
  useEffect(() => {
    console.log("TodoList.useEffect");
    loadTodos();
  }, [loadTodos]);

  return (
    <div className="list-wrapper">
      <NewTodoForm createTodo={createTodo} />
      <Tab>
        <div label="All Tasks">
          <ul className="list-group mb-0">
            {todos.map((todo) => (
              <TodoListItem
                key={todo._id}
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
              .filter((todo) => !todo.isCompleted)
              .map((todo) => (
                <TodoListItem
                  key={todo._id}
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
              .filter((todo) => todo.isCompleted)
              .map((todo) => (
                <TodoListItem
                  key={todo._id}
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
  loadTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export { TodoList };
