import ReactDOM, { render } from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Bar from './templates/bar.js';
import Input from './templates/input.js';
import store from './store/store.js';
import ALL from './templates/todo.js';
import ACTIVE from './templates/active.js';
import COM from './templates/com.js';

import style from './css/style.css';

const TodoApp = React.createClass({
	render() {
		return (
			<div>
				<Input></Input>
				{this.props.children || <div />}
				<Bar></Bar>
			</div>
		);
	}
})


// ReactDOM.render(
// 	<TodoApp></TodoApp>,
// 	document.getElementById('app')
// )

const start = () => {
	render((
		<Router history={hashHistory}>
			<Route path='/' component={TodoApp}>
				<IndexRoute component={ALL} />
				<Route path='ALL' component={ALL} />
				<Route path='ACTIVE' component={ACTIVE} />
				<Route path='COM' component={COM} />
			</Route>
		</Router>
	), document.getElementById('app'))
}

start();