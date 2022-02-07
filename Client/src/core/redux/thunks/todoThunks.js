import { ApiHelper } from "../../../shared/helpers/apiHelper";
import {
  onCreateTodo,
  onLoadTodosSuccess,
  onOperationTodosFinish,
  onOperationTodosInProgress,
  onOperationTodosFailure,
  onRemoveTodo,
  onCompleteTodo,
  onNotCompleteTodo,
} from "../actions/todoActions";

const todoThunkActionCreator = (operation) => {
  return async (dispatch, getState) => {
    try {
      dispatch(onOperationTodosInProgress());
      const { todos } = getState();
      await operation(dispatch, todos);
      dispatch(onOperationTodosFinish());
    } catch (err) {
      dispatch(onOperationTodosFailure());
    }
  };
};

export const loadTodos = () => {
  return todoThunkActionCreator(async (dispatch, todos) => {
    if (todos.length) {
      dispatch(reloadTodos());
      return;
    }
    todos = await ApiHelper("/api/v1/todos");
    dispatch(onLoadTodosSuccess(todos ?? []));
  });
};

export const reloadTodos = () => {
  return todoThunkActionCreator(async (dispatch, todos) => {
    todos = await ApiHelper("/api/v1/todos");
    dispatch(onLoadTodosSuccess(todos ?? []));
  });
};

export const createTodo = (title) => {
  return todoThunkActionCreator(async (dispatch, todos) => {
    const todo = await ApiHelper("/api/v1/todos/create", "POST", { title });
    dispatch(onCreateTodo(todo));
  });
};

export const removeTodo = (id) => {
  return todoThunkActionCreator(async (dispatch) => {
    await ApiHelper(`/api/v1/todos/${id}`, "DELETE");
    dispatch(onRemoveTodo(id));
  });
};

export const completeTodo = (id) => {
  return todoThunkActionCreator(async (dispatch) => {
    await ApiHelper(`/api/v1/todos/${id}/complete`, "POST");
    dispatch(onCompleteTodo(id));
  });
};

export const notCompleteTodo = (id) => {
  return todoThunkActionCreator(async (dispatch) => {
    await ApiHelper(`/api/v1/todos/${id}/not-complete`, "POST");
    dispatch(onNotCompleteTodo(id));
  });
};
