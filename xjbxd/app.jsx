import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store.js';
// var store = require('./store/store.js').store;

import style from './css/style.css';

var index = 1;

const visitionFilter = (todos, filter) => {
	switch(filter) {
		case 'ALL': 
			return todos;
		case 'ACTIVE':
			return todos.filter(t => (!t.completed));
		case 'COM': 
			return todos.filter(t => (t.completed));
	}
}


const Bar = ({activeBtn='ALL'}) => {
	return (
		<div>
			<a href='#' className={activeBtn == 'ALL'?style.actBtn:style.urlBtn} onClick={(e) => {
				e.preventDefault();
				store.dispatch({
					type: 'VISIBLE',
					filter: 'ALL',
				})
			}}> ALL </a>
			<a href='#' className={activeBtn == 'ACTIVE'?style.actBtn:style.urlBtn} onClick={(e) => {
				e.preventDefault()
				store.dispatch({
					type: 'VISIBLE',
					filter: 'ACTIVE',
				})
			}}> SHOW_ACTIVE </a>
			<a href='#' className={activeBtn == 'COM'?style.actBtn:style.urlBtn} onClick={(e) => {
				e.preventDefault();
				store.dispatch({
					type: 'VISIBLE',
					filter: 'COM',
				})
			}}> SHOW_COMPLETED </a>
		</div>
	);
}

const Td = React.createClass({
	render() {
		const filter = visitionFilter;
		const tdList = filter(this.props.todos, this.props.filter)
		console.log('--------------this.TIME---------------');
		console.log(tdList.length, tdList);
		console.log('--------------TODO.LIST---------------');
		var list = tdList.map(function(t) {
			return <li onClick={() => {
				store.dispatch({
					type: 'TOGGLE_TODO',
					id: t.id
				})
			}} className={t.completed?style.comItem:style.item} key={t.id}>{t.text}
			<button onClick={() => {
				store.dispatch({
					type: 'DELETE_TODO',
					id: t.id
				})
			}}>X</button></li>
		});
		return (
			<div className={style.todoContainer}>
				<input ref = {(text) => {
						this.input = text;
					}} size='30' className={style.text} placeholder='haha' />
				<button className={style.addBtn} onClick={() => {
					if(this.input.value) {
						store.dispatch({
							type: 'ADD_TODO',
							text: this.input.value,
							id: index++
						})
					}
					this.input.value = '';
				}}>add</button>
				<ul className={style.list}>
					{list}
				</ul>
				<Bar activeBtn={this.props.filter}></Bar>
			</div>
			);
	}
});

const render = () => {
	ReactDOM.render(
		<Td todos={store.getState().todo} filter={store.getState().visiFilter} ></Td>,
		document.getElementById('app')
	);
}

render();
store.subscribe(render);