import React from 'react';

export default class Time extends React.Component {
  constructor() {
    super();
    // TODO
    // this.timeSet = this.timeSet.bind(this)
    // this.clear = this.clear.bind(this)
  }

  // timeSet(num) {
  //   this.refs.heihei.style = { left: num/60+''; right: num/60+'' }
  //   if(num<3000) {
  //     this.timeout = setTimeout(function() {
  //       timeSet(num + 100)
  //     }, 100)
  //   } else {
  //     //
  //   }
  // }
  //
  // clear() {
  //   // clearTimeout(this.timeout);
  //   this.props.move(this.timeout, this.refs.heihei.style)
  //   this.refs.heihei.style = { left: '1%'; right: '1%' }
  // }

  // componentDidMount() {
  //   this.timeSet(0);
  // }

  render() {
    return (
      <div className='all'>
        <div className='process' refs="heihei"></div>
      </div>
    )
  }
}
