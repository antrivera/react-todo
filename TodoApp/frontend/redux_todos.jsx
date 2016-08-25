import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import allTodos from './reducers/selector';
import {requestTodos, createTodo} from './actions/todo_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const contentEl = document.getElementById('content');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, contentEl);
  window.store = store;
  window.createTodo = createTodo;
});
