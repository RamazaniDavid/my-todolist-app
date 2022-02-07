import {
  LOAD_TODOS_SUCCESS,
  OPERATION_TODOS_IN_PROGRESS,
  OPERATION_TODOS_FAILURE,
  OPERATION_TODOS_FINISH,
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  NOT_COMPLETE_TODO,
} from "../actions/todoActions";

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case OPERATION_TODOS_IN_PROGRESS:
      return true;
    case OPERATION_TODOS_FINISH:
    case OPERATION_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      const { todo } = payload;
      return state.concat(todo);
    case REMOVE_TODO:
      const { id } = payload;
      return state.filter((todo) => todo._id !== id);
    case COMPLETE_TODO:
      const { id: idToComplete } = payload;
      return state.map((todo) =>
        todo._id === idToComplete ? { ...todo, isCompleted: true } : todo
      );
    case NOT_COMPLETE_TODO:
      const { id: idToNotComplete } = payload;
      return state.map((todo) =>
        todo._id === idToNotComplete ? { ...todo, isCompleted: false } : todo
      );
    case LOAD_TODOS_SUCCESS:
      const { todos } = payload;
      return todos;
    case OPERATION_TODOS_IN_PROGRESS:
    case OPERATION_TODOS_FAILURE:
    default:
      return state;
  }
};
