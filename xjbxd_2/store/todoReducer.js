export default (state = [{
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