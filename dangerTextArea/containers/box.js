import React from 'react';
import Time from '../components/restTime';
import Score from '../components/score';
import DangerText from '../components/dangerText';


export default class App extends React.Component {
  constructor() {
    super()
    // TODO
    this.state = {
      score: 0,
      bang: false
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(text) {
    if(this.timeout) {
			clearTimeout(this.timeout);
      // console.log(this.state);
      var curNum = this.state.score
      // this.clearTime(timeSet);
      // console.log(this.state.score)
      if(this.state.score >= 50) {
        // curNum = this.state.score
        console.log(this.score);
        this.setState({
          score: ++curNum,
          bang: true
        })
      } else {
        this.setState({
          score: ++curNum,
          bang: false
        })
      }
		}
		this.timeout = setTimeout(() => {
			text.value = '';
      this.setState({
        score: 0,
        bang: false
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
        <DangerText handleDown={ this.handleKeyDown }></DangerText>
      </div>
    )
  }
}
