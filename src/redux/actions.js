/**
 * Created by Sahil on 8/24/18.
 */

export const LOADING = 'LOADING';
export const FETCHED_TODOS = 'FETCHED_TODOS';
export const UPDATED_TODOS = 'UPDATED_TODOS';

export const fetchTodos = () => (dispatch, getState) => {
  dispatch({ type: LOADING });
  fetch('http://localhost:3000/todoList', {
    Accept: 'application/json',
  })
    .then(todos => todos.json())
    .then(todosJSON => dispatch({
      type: FETCHED_TODOS,
      payload: todosJSON,
    }));
};

export const updateTodoInDB = (todo, callback) => (dispatch) => {
  dispatch({ type: LOADING });
  setTimeout(() => fetch('http://localhost:3000/todoList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: todo,
    }),
  })
    .then(resp => {
      resp.json().then(_respTodo => {
        dispatch({ todo: _respTodo,  type: UPDATED_TODOS });
        callback();
      })
    }), 3000 );
};