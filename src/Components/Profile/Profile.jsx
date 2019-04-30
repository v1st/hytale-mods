import React, { Component } from 'react'

import './Profile.scss';
import ProfileProjects from './ProfileProjects';

// import banner from '../../images/banner-test.png';

export default class Profile extends Component {
  render() {
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
              <div className="">

              </div>
            </div>

            <div className="p-user-interaction">
              <div className="p-nav">
                <ul className="p-nav__list">
                  <li className="p-nav__list-item">Posts</li>
                  <li className="p-nav__list-item">Followers</li>
                </ul>
              </div>

              <div className="p-user-content">
                <ProfileProjects />
              </div>
            </div>
          </section>
{/* 
          <article className="p-sidebar">
            <a className="sponsored-banner" href="/">
              <img className="sponsored-banner__image" src={banner} alt="Sponsored banner" />
            </a>
            <a className="sponsored-banner" href="/">
              <img className="sponsored-banner__image" src={banner} alt="Sponsored banner" />
            </a>
            <a className="sponsored-banner" href="/">
              <img className="sponsored-banner__image" src={banner} alt="Sponsored banner" />
            </a>
            <a className="sponsored-banner" href="/">
              <img className="sponsored-banner__image" src={banner} alt="Sponsored banner" />
            </a>
          </article> */}
        </div>
      </div>
    )
  }
}
