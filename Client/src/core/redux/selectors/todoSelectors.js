import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const getTodos = (state) => state.todos.data;

export const getTodosByFilter = createSelector([getTodos], (todos) => {
  return memoize((filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  });
});

export const getTodosBySearch = createSelector([getTodos], (todos) =>
  memoize((search) => {
    if (!search) {
      return todos;
    }
    return todos.filter((todo) => todo.title.includes(search));
  })
);

export const getTodosOperationLoding = (state) => state.todos.isLoading;
