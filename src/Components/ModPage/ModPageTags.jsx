import React, { Component } from 'react'

export default class ModPageTags extends Component {
  render() {
    // Render category tags (needs to be redone)
    const categories = ['Admin Tools',
      'Anti-Griefing Tools',
      'Website Administration',
      'Management',
      'Chat Related',
      'Economy',
      'Teleportation',
      'Role Playing',
      'Fun',
      'Informational',
      'General',
      'Mechanics',
      'Miscellaneous',
    ]

    const renderTags = categories.map((category, i) => {
      return <span key={i} className="mod-tags__tag">{category}</span>
    });

    return (
      <React.Fragment>
        <hr className="linebreak" />

        <div className="mod-tags">
          <div className="mod-tags__wrap">
            <h3 className="mod-tags__title">Tags: </h3>
            {renderTags}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
