import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './TagBox.scss';

export default class TagBox extends Component {
  render() {
    // Render list of selectable mod tags
    const renderedTags = this.props.categories.map((category, index) => {
      return <li key={index} onClick={this.props.selectTag} className="mod-tags__tag">{category}</li>;
    });

    return (
      <section>
        <ul className="mod-tags__wrap">
          <h3 className="mod-tags__title">Select Tags: </h3>
          {renderedTags}
        </ul>
      </section>
    )
  }
}

TagBox.propTypes = {
  selectTag: PropTypes.func.isRequired
}
