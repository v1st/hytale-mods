import React, { Component } from 'react'

import ModPreview from './ModPreview';

export default class LandingPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }

  render() {
    const { isLoading } = this.state;
    // Render mod Previews TEMP
    const mods = [];
    let tick = 100
    for (let i = 0; i < 21; i++) {
      if (tick > 300) {
        tick = 100;
      }
      mods.push(
        <ModPreview key={i} delay={tick} />
      );
      tick += 100;
    }

    // Display Loader if waiting
    if (isLoading) {
      return (
        <section className="lp-content">
          <div className="loader">Loading...</div>
        </section>
      );
    }


    return (
      <section className="lp-content">
        <header className="header">
          <div className="header__img" alt="Banner logo for hytale mods"></div>
        </header>

        <div className="mod-previews">
          {mods}
        </div>
      </section>
    )
  }
}
