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

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      const { todo } = payload;
      return { ...state, data: [...state.data, todo] };
    case REMOVE_TODO:
      const { id } = payload;
      return { ...state, data: state.data.filter((todo) => todo.id !== id) };
    case COMPLETE_TODO:
      const { id: idToComplete } = payload;
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === idToComplete ? { ...todo, completed: true } : todo
        ),
      };
    case NOT_COMPLETE_TODO:
      const { id: idToNotComplete } = payload;
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === idToNotComplete ? { ...todo, completed: false } : todo
        ),
      };
    case LOAD_TODOS_SUCCESS:
      const { todos } = payload;
      return { ...state, data: todos };
    case OPERATION_TODOS_IN_PROGRESS:
      return { ...state, isLoading: true };
    case OPERATION_TODOS_FAILURE:
    case OPERATION_TODOS_FINISH:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
