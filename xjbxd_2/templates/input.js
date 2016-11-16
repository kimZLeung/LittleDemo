import style from '../css/style.css';

import React from 'react';

const Bar = React.createClass({
	render() {
		return (
			<div className={style.todoContainer}>
				<input size='30' ref={ (res) => {this.input = res;} } className={style.text} placeholder='haha' />
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
			</div>
		);
	}
});

// export default () => {
// 	return (<div className={style.todoContainer}>
// 				<input size='30' ref={ (res) => {this.input = res;} } className={style.text} placeholder='haha' />
// 				<button className={style.addBtn} onClick={() => {
// 					if(this.input.value) {
// 						store.dispatch({
// 							type: 'ADD_TODO',
// 							text: this.input.value,
// 							id: index++
// 						})
// 					}
// 					this.input.value = '';
// 				}}>add</button>
// 	</div>)
// }

export default Bar