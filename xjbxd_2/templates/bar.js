import style from '../css/style.css';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router';

import React from 'react';

export default ({activeBtn='ALL'}) => {
	return (
		<div className={style.bar}>
			<Link to='/all' activeClassName={style.actBtn}>ALL</Link>
			<Link to='/active' activeClassName={style.actBtn}>SHOW_ACTIVE</Link>
			<Link to='/com' activeClassName={style.actBtn}>SHOW_COMPLETED</Link>
		</div>
	);
}