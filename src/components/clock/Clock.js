import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Clock extends Component {
  render() {
    const {status, count} = this.props;

    let seconds = count % 60;
    let minutes = Math.floor(count / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    const classes = classNames({
      'clock': true,
      'on': status !== 'stopped',
      'off': status === 'stopped'
    });

    return (
      <div className={classes}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
    );
  }
}

Clock.propTypes = {
  status: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

export default Clock;