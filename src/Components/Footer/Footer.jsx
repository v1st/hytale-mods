import React, { Component } from 'react'

import './Footer.scss';

import logo from '../../images/hytalemodslogo.png';
import facebook from '../../images/facebook-logo.png';
import twitter from '../../images/twitter-logo.png';
import reddit from '../../images/reddit-logo.png';
import discord from '../../images/discord-logo.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrap">
          <div className="f-section">
            <h5 className="footer__title">Site Info</h5>
            <hr className="f__underline" />
            <img className="f__logo" src={logo} alt="Hytale Mods Logo" />
            <div className="f-text__wrap">
              <span className="copyright">Copyright  &copy; 2019 Hytale-Mods.com</span>
              <span className="copyright">This site is not affiliated with Hypixel Studios or Hytale</span>
            </div>
            <div className="f-text__wrap">
              <div className="f-social-links">
                <img className="social__logo" src={facebook} alt="Hytale Mods Facebook Link" href="https://facebook.com/hytalemods" target="_blank" rel="noopener noreferrer"></img>
                <span className="social__break"></span>
                <img className="social__logo" src={twitter} alt="Hytale Mods Twitter Link" href="https://twitter.com/hytalemod" target="_blank" rel="noopener noreferrer"></img>
                <span className="social__break"></span>
                <img className="social__logo" src={discord} alt="Hytale Mods Discord Link" href="https://discord.gg/Zk24wmB" target="_blank" rel="noopener noreferrer"></img>
                <span className="social__break"></span>
                <img className="social__logo" src={reddit} alt="Hytale Mods Reddit Link" href="https://reddit.com/r/hytaleforum" target="_blank" rel="noopener noreferrer"></img>
              </div>
            </div>
          </div>
          <div className="f-section">
            <div className="f-links__wrap">
              <h5 className="footer__title">Links</h5>
              <hr className="f__underline" />
              <a className="site-link" href="/">Help</a>
              <a className="site-link" href="/">Contact</a>
              <a className="site-link" href="/">Terms</a>
              <a className="site-link" href="/">Privacy</a>
              <a className="site-link" href="/">Forums</a>
              <a className="site-link" href="/">Servers</a>
            </div>
          </div>
          <div className="f-section">
            <h5 className="footer__title">Twitter Feed</h5>
            <hr className="f__underline" />
            <a className="twitter-timeline" data-height="420" data-theme="dark" href="https://twitter.com/hytalemod?ref_src=twsrc%5Etfw">Tweets by hytalemod</a>
          </div>
        </div>
      </footer >
    )
  }
}
