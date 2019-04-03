import React, { Component } from 'react';
import Swiper from 'swiper';

import '../../../node_modules/swiper/dist/css/swiper.css';

export default class ModPageCarousel extends Component {

  componentDidMount() {
    // Init Swiper.js Carousel
    // eslint-disable-next-line
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      init: true,
      spaceBetween: 5,
      slidesPerView: 4,
      loop: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      centeredSlides: true,
      grabCursor: true,
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is <= 640px
        850: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }
    });
    // Init Swiper.js Carousel
    // eslint-disable-next-line
    const galleryTop = new Swiper('.gallery-top', {
      init: true,
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      grabCursor: true,
      effect: 'slide',
    });
  }

  render() {
    return (
      <section className="mod__images">
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
            <div className="swiper-slide" ></div>
          </div>
          <div className="swiper-button-next swiper-button-white"></div>
          <div className="swiper-button-prev swiper-button-white"></div>
        </div>

        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
            <div className="mod__image--small swiper-slide" src=""></div>
          </div>
        </div>
      </section>
    )
  }
}
