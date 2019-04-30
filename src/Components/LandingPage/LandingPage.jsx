import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { searchMods } from '../../_actions';
import Sidebar from '../Sidebar/Sidebar';
import LandingPageContainer from './LandingPageContainer';

import './LandingPage.scss';

class LandingPage extends Component {
  componentDidUpdate(newProps) {
    // Get search result if they are different
    if (newProps.search.search !== this.props.search.search) { 
      console.log(this.props.search.search);
    }
  }

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

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = { searchMods };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
