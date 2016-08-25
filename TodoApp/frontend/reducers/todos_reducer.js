import {TODO_CONSTANTS} from '../actions/todo_actions';
import { merge } from 'lodash';

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case TODO_CONSTANTS.RECEIVE_TODOS:
      return action.todos.reduce((obj, todo) => {
        obj[todo.id] = todo;
        return obj;
      }, {});
    case TODO_CONSTANTS.RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case TODO_CONSTANTS.REMOVE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    case TODO_CONSTANTS.TOGGLE_TODO:
      newState = merge({}, state);
      newState[action.todo.id].done = action.todo.done;
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;
