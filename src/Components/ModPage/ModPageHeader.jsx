import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ModPageHeader extends Component {
  render() {
    return (
      <div className="mod-header">
        <section className="banner">
          <h1 className="banner__title">Hytale Mod Name</h1>
          <div className="banner__button">
            <div className="big-button-wrap--dl">
              <div type="" className="big-button">Download Mod</div>
              <div className="big-button--shade"></div>
            </div>
          </div>
        </section>

        <section className="mod-info">
          <div className="mod__images">
            <img className="mod__image--big" src="" alt="" />
            <div className="mod__image-previews">
              <img className="mod__image--small" src="" alt="" />
              <img className="mod__image--small" src="" alt="" />
              <img className="mod__image--small" src="" alt="" />
              <img className="mod__image--small" src="" alt="" />
            </div>
          </div>

          <div className="mod-stats">
            <div className="mod-card">
              <img className="mod-card__image" src="" alt="" />
              <div className="mc__wrap">
                <h2 className="mod-card__name">Author: <span className="mod-card__name--primary">HytaleModder</span></h2>
                <Link to="/" className="sub__button">Subscribe</Link>
              </div>
            </div>
            <div className="ms-dates__wrap">
              <span className="ms-dates__date">Updated on Jan 1st, 2019</span>
              <span className="ms-dates__date">Published on Jan 1st, 2019</span>
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
