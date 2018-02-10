import React, {Component} from 'react';
import Clock from "../clock/Clock";
import Actions from "../actions/Actions";
import SetCount from "./set-count/SetCount";

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.onNewCount = this.onNewCount.bind(this);
    this.onPauseCount = this.onPauseCount.bind(this);
    this.onResumeCount = this.onResumeCount.bind(this);
    this.onStopCount = this.onStopCount.bind(this);

    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      let newCount = this.state.count - 1;

      if (newCount < 1) {
        clearInterval(this.countdownInterval);

        this.setState({
          count: 0,
          countdownStatus: 'stopped'
        });
      }
      else {
        this.setState({
          count: newCount
        });
      }
    }, 1000);
  }

  componentDidUpdate(pervProps, prevState) {
    if (prevState.countdownStatus !== this.state.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startCountdown();
          break;
        case 'paused':
          clearInterval(this.countdownInterval);
          break;
        case 'stopped':
          clearInterval(this.countdownInterval);
          break;
        default:
          break;
      }
    }
  }

  onNewCount(newCount) {
    this.setState({
      count: newCount,
      countdownStatus: 'started'
    });
  }

  onPauseCount() {

    this.setState({
      countdownStatus: 'paused'
    });
  }

  onResumeCount() {
    this.setState({
      countdownStatus: 'started'
    });
  }

  onStopCount() {
    this.setState({
      count: 0,
      countdownStatus: 'stopped'
    });
  }

  render() {
    const getControls = () => {
      if (this.state.countdownStatus === 'stopped') {
        return (
          <SetCount onNewCount={this.onNewCount} />
        )
      }
      else {
        return (
          <Actions
            status={this.state.countdownStatus}
            onPauseCount={this.onPauseCount}
            onResumeCount={this.onResumeCount}
            onStopCount={this.onStopCount}
          />
        )
      }
    };

    return (
      <div>
        <h1 className={'text-center'}>Countdown</h1>

        <Clock status={this.state.countdownStatus} count={this.state.count}/>

        <div className={'controls'}>
          {getControls()}
        </div>

      </div>
    );
  }
}

export default Countdown;