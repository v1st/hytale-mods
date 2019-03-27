import React, { Component } from 'react'

import ModPreview from './ModPreview';

export default class LandingPageContainer extends Component {
  render() {
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
