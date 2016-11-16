// var createStore = require('redux').createStore;

import { createStore, combineReducers } from 'redux';

const todo = (state = [{
	text: '我是默认值',
	id: 0,
	completed: false
}], action) => {
	switch(action.type) {
		case 'ADD_TODO': 
			return [...state, {
				text: action.text,
				id: action.id,
				completed: false
			}];
		case 'TOGGLE_TODO':
			return state.map(t => {
				if(t.id != action.id) {
					return t;
				}
				else {
					// return {
					// 	...t,
					// 	completed: !t.completed
					// };
					return Object.assign(t, {completed: !t.completed});
				}
			})
		case 'DELETE_TODO':
			var flag = undefined;
			for(var i = 0; i<state.length; i++) {
				if(state[i].id == action.id) {
					flag = i;
				}
			}
			if(flag == 0) {
				return [...state.slice(1)];
			}
			if(flag) {
				return [...state.slice(0, flag), ...state.slice(flag+1, state.length)];
			}
			else {
				return state;
			}
		default:
			return state;
	}
}

const visiFilter = (state = 'ALL', action) => {
	switch(action.type) {
		case 'VISIBLE': 
			return action.filter;
		default: 
			return state;
	}
}

// var store = createStore(todo);

const todoApp = combineReducers({
	todo,
	visiFilter
})

const store = createStore(todoApp);

// module.exports = {
// 	store: store
// }

export default store;