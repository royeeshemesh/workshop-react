import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SetCount extends Component {
  constructor(props) {
    super(props);

    this.onNewCountSubmit = this.onNewCountSubmit.bind(this);
  }

  onNewCountSubmit(e) {
    e.preventDefault();

    const newCountStr = this.refs.newTimeInput.value;
    const newCount = parseInt(newCountStr, 10);

    if (newCount && newCount > 0) {
      this.props.onNewCount(newCount);
    }
  }

  render() {
    return (
      <form onSubmit={this.onNewCountSubmit}>

        <div className={'form-group'}>
          <div className={'input-group'}>
            <input ref={'newTimeInput'} type={'number'} className={'form-control'}/>
            <span className={'input-group-btn'}>
                <button className={'btn btn-default'}>Set new time</button>
            </span>
          </div>
        </div>

      </form>
    )
  }
}

SetCount.propTypes = {
  onNewCount: PropTypes.func.isRequired
};

export default SetCount;