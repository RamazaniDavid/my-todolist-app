import { CREATE_TODO, REMOVE_TODO } from "../actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      const { text } = payload;
      const newTodo = {
        text,
        completed: false,
      };
      return state.concat(newTodo);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};
