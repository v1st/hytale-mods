import React, { Component } from 'react'
import TabAccount from './TabAccount';
import TabMods from './TabMods';
import TabPassword from './TabPassword';

import './ProfileEdit.scss';

export default class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      selectedTab: 0,
    }

    this.handleTabs = this.handleTabs.bind(this);
  }

  handleTabs(e) {
    this.setState({
      selectedTab: e.target.value
    })
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="profile__wrap">
        <div className="profile">

          <section className="p-content">
            <div className="p-user-info">
              <div className="p-user-card">
                <img className="p-user-avatar" src="" alt="" />
                <div className="p-user-details">
                  <h3 className="p-user__username">HytaleUser</h3>
                  <span className="p-user__dates">Member for 4 years, 6 months, and 22 days</span>
                  <span className="p-user__dates">Last active Sat, Mar, 30 2019</span>
                </div>
              </div>
            </div>

            <div className="p-user-interaction">
              <div className="p-nav">
                <ul className="p-nav__list">
                  <li onClick={this.handleTabs} value="0" className="p-nav__list-item">Account Info</li>
                  <li onClick={this.handleTabs} value="1" className="p-nav__list-item">Your Mods</li>
                  <li onClick={this.handleTabs} value="2" className="p-nav__list-item">Password</li>
                </ul>
              </div>

              <div className="p-user-content">
                {selectedTab === 0 && <TabAccount />}
                {selectedTab === 1 && <TabMods />}
                {selectedTab === 2 && <TabPassword />}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
