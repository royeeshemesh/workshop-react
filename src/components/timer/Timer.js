import React, {Component} from 'react';
import Clock from "../clock/Clock";
import Actions from "../actions/Actions";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.onPauseCount = this.onPauseCount.bind(this);
    this.onResumeCount = this.onResumeCount.bind(this);
    this.onStopCount = this.onStopCount.bind(this);

    this.state = {
      count: 0,
      countStatus: 'stopped'
    };
  }

  startCount() {
    this.countInterval = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  componentDidUpdate(pervProps, prevState) {
    if (prevState.countStatus !== this.state.countStatus) {
      switch (this.state.countStatus) {
        case 'started':
          this.startCount();
          break;
        case 'paused':
          clearInterval(this.countInterval);
          break;
        case 'stopped':
          clearInterval(this.countInterval);
          break;
        default:
          break;
      }
    }
  }

  startTimer() {
    this.setState({
      countStatus: 'started'
    });
  }

  onPauseCount() {

    this.setState({
      countStatus: 'paused'
    });
  }

  onResumeCount() {
    this.setState({
      countStatus: 'started'
    });
  }

  onStopCount() {
    this.setState({
      count: 0,
      countStatus: 'stopped'
    });
  }

  render() {
    const getControls = () => {
      if (this.state.countStatus === 'stopped') {
        return (
          <button className={'btn btn-default btn-block'} onClick={this.startTimer}>Start</button>
        )
      }
      else {
        return (
          <Actions status={this.state.countStatus} onPauseCount={this.onPauseCount} onResumeCount={this.onResumeCount} onStopCount={this.onStopCount}/>
        )
      }
    };

    return (
      <div>
        <h1 className={'text-center'}>Timer</h1>

        <Clock status={this.state.countStatus} count={this.state.count}/>

        <div className={'controls'}>
          {getControls()}
        </div>

      </div>
    );
  }
}

export default Timer;