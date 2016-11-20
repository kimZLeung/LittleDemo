import React from 'react';

export default class DangerText extends React.Component {
	constructor() {
		super();
		// TODO
		this.handleD = this.handleD.bind(this);
	}

	handleD() {
		if(this.timeout) {
			clearTimeout(this.timeout);
		}
		this.timeout = setTimeout(() => {
			this.input.value = '';
		}, 3000)
	}

	render() {
		return (
			<div>
				<h1 className='title'>Pure Text</h1>
				<textarea onKeyUp = { this.handleD } ref = {(text) => {this.input = text}} className='dangerText'></textarea>
			</div>
		)
	}
}