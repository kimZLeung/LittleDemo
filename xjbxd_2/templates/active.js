import React from 'react';
import store from '../store/store.js';

import style from '../css/style.css';

export default () => {
	var todos = store.getState();
	var list = todos.filter(t => (!t.completed));
	var lists = list.map(t => {
		return (<li onClick={() => {
				store.dispatch({
					type: 'TOGGLE_TODO',
					id: t.id
				})
			}} className={t.completed?style.comItem:style.item} key={t.id}>{t.text}</li>);
	});
	return (<ul className={style.list}>
					{lists}
			</ul>);
};