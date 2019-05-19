import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCategories } from '../../_actions';
import TextEditor from '../TextEditor/TextEditor';
import TagBox from '../TagBox/TagBox';

import './Upload.scss';

class Upload extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedTags: new Set(),
    };

    this.selectTag = this.selectTag.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    // Populate list of available mod tags
    this.props.getCategories();
  }

  // Highlights selected tags
  selectTag(e) {
    e.target.className = (e.target.className === "mod-tags__tag") ? "mod-tags__tag--active" : "mod-tags__tag";
    console.log(e.target.innerHTML)
    // Edit state with list of selected tags
    this.state.selectedTags.has(e.target.innerHTML) ? this.removeTag(e.target.innerHTML) : this.addTag(e.target.innerHTML);
  }
  
  /**
   * Adds unique mod tag to current state
   * @param {String} item Selected Tag
   */
  addTag(item) {
    this.setState(({ selectedTags }) => ({
      selectedTags: new Set(selectedTags).add(item)
    }));
  }
  /**
  * Removes unique mod tag from current state
  * @param {String} item Selected Tag
  */
  removeTag(item) {
    this.setState(({ selectedTags }) => {
      const newChecked = new Set(selectedTags);
      newChecked.delete(item);

      return {
        selectedTags: newChecked
      };
    });
  }

  render() {
    return (
      <div className="upload__wrap">
        <div className="upload">
          <section className="tab">
            <h2 className="tab__title">Upload a new mod</h2>

            <form action="" className="form" encType="multipart/form-data" autoComplete="off">
              <div className="tab__input-wrap">
                <label htmlFor="user" className="tab__label">Name of your mod:</label>
                <input type="text" name="user" className="tab__input" placeholder="Enter mod name" />
              </div>
              <TextEditor />
              <TagBox
                categories={this.props.info.categories}
                selectTag={this.selectTag}
              />
              <button type="submit" className="tabBtn">Submit Your Mod</button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ info: state.info })

const mapDispatchToProps = {
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);

