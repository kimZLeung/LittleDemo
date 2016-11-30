import React from 'react';

export default class Time extends React.Component {
  constructor() {
    super();
    // TODO
    this.timeSet = this.timeSet.bind(this)
    this.clear = this.clear.bind(this)
  }

  timeSet(num) {
    var self = this
    // console.log(this.time.style)
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
    if(num<3000) {
      this.timeout = setTimeout(function() {
        self.time.style.left = (num/60)+'%'
        self.time.style.right = (num/60)+'%'
        self.time.style.backgroundColor = '#'+num/2
        self.timeSet(num + 50)
      }, 50)
    }
  }

  clear() {
    if(this.timeout) {
      clearTimeout(this.timeout)
    }
    this.time.style = { left: '1%', right: '1%' }
    this.time.style.backgroundColor = 'black'
  }

  componentWillUpdate(nextP, nextS) {
    const style = this.time.style
    if(!nextP.title) {
      this.clear()
      style.display = 'none'
    } else {
      this.timeSet(0)
      style.display = 'inline-block'
    }
    // console.log(this.time)
  }

  render() {
    return (
      <div className='all'>
        <div className='process' ref = {(time) => {this.time = time}} ></div>
      </div>
    )
  }
}
