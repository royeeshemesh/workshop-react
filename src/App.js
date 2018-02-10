import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import './components/countdown/countdown.css';
import './components/clock/clock.css';

import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import Timer from './components/timer/Timer';
import Countdown from './components/countdown/Countdown';


class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>

          <Nav/>

          <div className={'container-fluid'}>
            <div className={'row'}>
              <div className={'col-xs-12'}>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/timer'} component={Timer}/>
                <Route path={'/countdown'} component={Countdown}/>
              </div>
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
