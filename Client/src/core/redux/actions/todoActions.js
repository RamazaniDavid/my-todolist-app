export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (title) => ({
  type: CREATE_TODO,
  payload: { title },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const COMPLETE_TODO = "COMPLETE_TODO";
export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: { id },
});

export const NOT_COMPLETE_TODO = "NOT_COMPLETE_TODO";
export const notCompleteTodo = (id) => ({
  type: NOT_COMPLETE_TODO,
  payload: { id },
});
