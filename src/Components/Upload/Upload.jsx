import React, { Component } from 'react'
import TextEditor from '../TextEditor/TextEditor';
import TagBox from '../TagBox/TagBox';

import './Upload.scss';

export default class Upload extends Component {
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
              <TagBox />
              <button type="submit" className="tabBtn">Submit Your Mod</button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}
