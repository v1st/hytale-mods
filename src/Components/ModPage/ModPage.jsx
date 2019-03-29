import React, { Component } from 'react'

import ModPageHeader from './ModPageHeader';
import ModPageDetails from './ModPageDetails';
import ModPageComments from './ModPageComments';

import './ModPage.scss';

class ModPage extends Component {
  render() {
    return (
      <div className="mod-page">
        <div className="mod-page__container">
          <ModPageHeader />
          <section className="mod-content">
            <ModPageDetails />
            <ModPageComments />
          </section>
        </div>
      </div>
    )
  }
}

export default ModPage;
