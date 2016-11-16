import { createStore, combineReducers } from 'redux';

import todos from './todoReducer.js';

export default createStore(todos);