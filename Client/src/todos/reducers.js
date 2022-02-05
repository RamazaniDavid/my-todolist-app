import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      const { title } = payload;
      const newTodo = {
        id: Date.now().toPrecision(),
        title,
        completed: false,
      };
      return state.concat(newTodo);
    case REMOVE_TODO:
      const { id } = payload;
      return state.filter((todo) => todo.id !== id);
    case COMPLETE_TODO:
      const { id: idToComplete } = payload;
      return state.map((todo) =>
        todo.id === idToComplete ? { ...todo, completed: true } : todo
      );
    default:
      return state;
  }
};
