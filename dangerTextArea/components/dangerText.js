import React from 'react';

export default class DangerText extends React.Component {
	constructor() {
		super();
		// TODO
		this.handleD = this.handleD.bind(this);
	}

	handleD() {
		// console.log(this.input);
		this.props.handleDown(this.input)
	}

	render() {
		return (
			<div>
				<Time></Time>
				<h1 className='title'>Pure Text</h1>
				<textarea onKeyUp = { this.handleD } ref = {(text) => {this.input = text}} className='dangerText'></textarea>
			</div>
		)
	}
}
