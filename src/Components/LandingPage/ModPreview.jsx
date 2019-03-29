import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {number} delay - Milliseconds of delay for transistion (100 - 300)
 */
export default function ModPreview({ delay }) {
  return (
    <div className="mp" data-aos="fade-up" data-aos-delay={delay} data-aos-once="true">
      <Link to="/mod">
        <img className="mod-card__img" src="https://assets.rockpapershotgun.com/images/2018/12/hytale1.jpg" alt="place holder" />
      </Link>
      <h2 className="mp__title">Lorem Ipsum dolar</h2>
      <div className="mp-title__container">
        <span className="mp__author">Username</span>
        <Link to="/mod">
          <button className="more-info__button">More Info</button>
        </Link>

      </div>
      <hr className="mp__underline" />
      <p className="mp__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam impedit, quam hic ducimus perspiciatis nulla provident praesentium.</p>
    </div>
  )
}

ModPreview.propTypes = {
  delay: PropTypes.number.isRequired
}
