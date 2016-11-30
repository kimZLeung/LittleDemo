import React from 'react';
import Time from '../components/restTime';
import Score from '../components/score';
import DangerText from '../components/dangerText.js';


export default class App extends React.Component {
  constructor() {
    super()
    // TODO
    this.state = {
      score: 0,
      bang: false,
      time: false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(text) {
    if(this.timeout) {
			clearTimeout(this.timeout);
      // console.log(this.state);
      var curNum = this.state.score
      var time = this.state.time
      // this.clearTime(timeSet);
      // console.log(this.state.score)
      if(this.state.score >= 50) {
        this.setState({
          score: ++curNum,
          bang: true,
          time: true
        })
      } else {
        this.setState({
          score: ++curNum,
          bang: false,
          time: true
        })
      }
      if(curNum%10 == 0) {
        // TODO
        //
        //
      }
      console.log(this.state)
		}
		this.timeout = setTimeout(() => {
			text.value = '';
      this.setState({
        score: 0,
        bang: false,
        time: false
      })
		}, this.props.time)
  }

  clearTime(timeSet) {
    clearTimeout(timeSet)
  }

  render() {
    return (
      <div id='app'>
        <Score score={ this.state.score } bang={this.state.bang} >
        </Score>
        <Time title={ this.state.time } ></Time>
        <DangerText handleDown={ this.handleKeyDown }></DangerText>
      </div>
    )
  }
}
