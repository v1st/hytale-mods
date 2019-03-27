import React from 'react'
import PropTypes from 'prop-types';

/**
 * 
 * @param {number} delay - Milliseconds of delay for transistion (100 - 300)
 */
export default function ModPreview({ delay }) {
  return (
    <div className="mp" data-aos="fade-up" data-aos-delay={delay} data-aos-once="true">
      <img className="mod-card__img" src="https://www.minecraftmods.com/wp-content/uploads/2019/03/bigchug-375x200.png" alt="place holder" />
      <h2 className="mp__title">Lorem Ipsum dolar</h2>
      <div className="mp-title__container">
        <span className="mp__author">Username</span>
        <button className="more-info__button">More Info</button>
      </div>
      <hr className="mp__underline" />
      <p className="mp__info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam impedit, quam hic ducimus perspiciatis nulla provident praesentium.</p>
    </div>
  )
}

ModPreview.propTypes = {
  delay: PropTypes.number.isRequired
}
