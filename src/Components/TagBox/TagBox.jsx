import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategories } from '../../_actions';


import './TagBox.scss';

class TagBox extends Component {
  constructor(props) {
    super();
    this.selectTag = this.selectTag.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  selectTag() {
    
  }

  render() {
    console.log(this.props)
    const renderedTags = this.props.info.categories.map((category, index) => {
      return <li key={index} onClick={this.selectTag} className="mod-tags__tag">{category}</li>;
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

const mapStateToProps = state => ({ info: state.info })

const mapDispatchToProps = {
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(TagBox)
