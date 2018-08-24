/**
 * Created by Sahil on 8/24/18.
 */

import {combineReducers} from 'redux';
import {
  FETCHED_TODOS,
  LOADING, UPDATED_TODOS
} from './actions';

const initialState = {
  todoList: [],
  fetching: false,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case FETCHED_TODOS:
      return {
        todoList: action.payload,
        loading: false,
      }
    case UPDATED_TODOS: {
      return {
        todoList: [ action.todo, ...state.todoList ],
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  todos
});