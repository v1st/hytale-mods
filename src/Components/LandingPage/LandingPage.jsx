import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import LandingPageContainer from './LandingPageContainer';

import './LandingPage.scss';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="content__wrap">
          <Sidebar />
          <LandingPageContainer />
        </div>
      </div>
    )
  }
}
