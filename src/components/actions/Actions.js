import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Actions extends Component {

  render() {
    const {status} = this.props;

    const getRelevantSection = () => {
      if (status === 'paused') {
        return (
          <button className={'btn btn-default btn-block'} onClick={this.props.onResumeCount}>Resume</button>
        )
      }
      else {
        return (
          <button className={'btn btn-primary btn-block'} onClick={this.props.onPauseCount}>Pause</button>
        )
      }
    };

    return (
      <div>
        {getRelevantSection()}
        <button className={'btn btn-danger btn-block'} onClick={this.props.onStopCount}>Stop</button>
      </div>
    );
  }
}

Actions.propTypes = {
  status: PropTypes.string.isRequired,
  onPauseCount: PropTypes.func.isRequired,
  onResumeCount: PropTypes.func.isRequired,
  onStopCount: PropTypes.func.isRequired
};

export default Actions;