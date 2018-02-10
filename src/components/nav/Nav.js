import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className={'navbar navbar-default'}>
        <div className={'container-fluid'}>
          <div className="navbar-header">
            <NavLink className={'navbar-brand'} to={'/'}>React Workshop</NavLink>
          </div>
          <ul className={'nav navbar-nav'}>
            <li>
              <NavLink activeClassName={'active-link'} to={'/timer'}>Timer</NavLink>
            </li>
            <li>
              <NavLink activeClassName={'active-link'} to={'/countdown'}>Countdown</NavLink>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Nav;