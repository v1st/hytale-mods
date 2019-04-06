import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import Signup from '../AccountForm/SignupModal';
import Login from '../AccountForm/LoginModal';
import SignupPage from '../AccountForm/Signup';
import LoginPage from '../AccountForm/Login';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import ModPage from '../ModPage/ModPage';
import NotFound from '../404/NotFound';

class ModalRoutes extends Component {
  previousLocation = this.props.location;

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <React.Fragment>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={LandingPage} />
          <Route path="/signup" component={SignupPage} /> 
          <Route path="/login" component={LoginPage} />
          <Route path="/search/:query" component={Search} />
          <Route path="/search/" component={Search} />
          <Route path="/profile/" component={Profile} />
          <Route path="/mod/" component={ModPage} />
          <Route component={NotFound} />
        </Switch>
        {isModal && <Route exact path='/signup' component={Signup} />}
        {isModal && <Route exact path='/login' component={Login} />}
      </React.Fragment>
    )
  }
}

export default withRouter(ModalRoutes);