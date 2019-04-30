import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import placeholder from '../../images/hytalemod.jpg';

/**
 * 
 * @param {number} delay - Milliseconds of delay for transistion (100 - 300)
 */
export default function ModPreview({ delay }) {
  return (
    <div className="mp" data-aos="fade-up" data-aos-delay={delay} data-aos-once="true">
      <Link to="/mod">
        <img className="mod-card__img" src={placeholder} alt="place holder" />
      </Link>
      <h2 className="mp__title">Hytale Mod</h2>
      <div className="mp-title__container">
        <Link to="/profile/" className="mp__author">Username</Link>
        <Link to="/mod">
          <button className="more-info__button">More Info</button>
        </Link>

      </div>
      <hr className="mp__underline" />
      <p className="mp__info">Hytale mods are mods for hytale, made from hytale players that play hytale. Download their mods from hytale mods.</p>
    </div>
  )
}

ModPreview.propTypes = {
  delay: PropTypes.number.isRequired
}
