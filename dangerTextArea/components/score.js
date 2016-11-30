import React from 'react';

export default class Score extends React.Component {
  constructor() {
    super()
    // TODO
  }


  render() {
    const { bang, score } = this.props
    return (
      <div className='score'>
        <h2 className={ bang?'big':'small' }>{ score }</h2>
      </div>
    )
  }
}
