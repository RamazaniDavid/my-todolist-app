export const CREATE_TODO = "CREATE_TODO";
export const onCreateTodo = (title) => ({
  type: CREATE_TODO,
  payload: { title },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const onRemoveTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const COMPLETE_TODO = "COMPLETE_TODO";
export const onCompleteTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: { id },
});

export const NOT_COMPLETE_TODO = "NOT_COMPLETE_TODO";
export const onNotCompleteTodo = (id) => ({
  type: NOT_COMPLETE_TODO,
  payload: { id },
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const onLoadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const OPERATION_TODOS_IN_PROGRESS = "OPERATION_TODOS_IN_PROGRESS";
export const onOperationTodosInProgress = () => ({
  type: OPERATION_TODOS_IN_PROGRESS,
});

export const OPERATION_TODOS_FAILURE = "OPERATION_TODOS_FAILURE";
export const onOperationTodosFailure = () => ({
  type: OPERATION_TODOS_FAILURE,
});


export const OPERATION_TODOS_FINISH = "OPERATION_TODOS_FINISH";
export const onOperationTodosFinish = () => ({
  type: OPERATION_TODOS_FINISH,
});