import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import ALL from '../templates/todo.js';
import ACTIVE from '../templates/active.js';
import COM from '../templates/com.js';
import { render } from 'react-dom';
import Bar from '../templates/bar.js';
import Input from '../templates/input.js';

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

export default () => {
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