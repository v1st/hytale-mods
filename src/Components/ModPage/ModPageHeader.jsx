import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import ModPageCarousel from './ModPageCarousel';

export default class ModPageHeader extends Component {
  render() {
    return (
      <div className="mod-header">
        <section className="banner">
          <h2 className="banner__title">Hytale Mod Name</h2>
          <div className="banner__button">
            <div className="big-button-wrap--dl">
              <div type="" className="big-button--dl">Download Mod</div>
              <div className="big-button--shade"></div>
            </div>
          </div>
        </section>

        <section className="mod-info">
          <ModPageCarousel />

          <div className="mod-stats">
            <div className="mod-card__wrap">
              <div className="mod-card">
                <img className="mod-card__image" src="" alt="" />
                <div className="mc__wrap">
                  <h2 className="mod-card__name">Modder: <Link to="/profile" className="mod-card__name--primary">HytaleModder</Link></h2>
                  <Link to="/" className="sub__button">Subscribe</Link>
                </div>
              </div>
              <div className="ms-dates__wrap">
                <span className="ms-dates__date">Updated on Jan 1st, 2019</span>
                <span className="ms-dates__date">Published on Jan 1st, 2019</span>
              </div>
            </div>
            <div className="ms-stat__wrap">
              <span className="ms-stat__stat">Views: <span className="ms-stat__stat--primary">1,000,000</span></span>
              <span className="ms-stat__stat">Downloads: <span className="ms-stat__stat--primary">1,000,000</span></span>
              <span className="ms-stat__stat">Likes: <span className="ms-stat__stat--primary">1,000,000</span></span>
              <span className="ms-stat__stat">Comments: <span className="ms-stat__stat--primary">1,000,000</span></span>
              <span className="ms-stat__stat">Favorites: <span className="ms-stat__stat--primary">1,000,000</span></span>
            </div>
          </div>

        </section>
      </div>
    )
  }
}
