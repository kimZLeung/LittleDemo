import React from 'react';

export default class Score extends React.Component {
  constructor() {
    super()
    // TODO
  }

  render() {
    return (
      <div className='score'>
        <h2 className={ this.props.bang?'big':'small' }>{ this.props.score }</h2>
      </div>
    )
  }
}
