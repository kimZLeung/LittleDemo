import React from 'react';
import store from './store/store.js';

import router, { renderList } from './Router/Route.js';

import style from './css/style.css';



const start = () => {		// 重新渲染整个路由会报警告，这本身就是不对的思路。
	router();
}

start();
store.subscribe(start);