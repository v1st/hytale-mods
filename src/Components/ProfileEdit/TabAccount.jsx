import React, { Component } from 'react'

import '../AccountForm/AccountForm.scss';

export default class TabAccount extends Component {
  render() {
    return (
      <section className="tab">
        <h2 className="tab__title">Update your account info</h2>
        <form action="" encType="multipart/form-data" autoComplete="off">
          <div className="tab__input-wrap">
            <label htmlFor="user" className="tab__label">Username:</label>
            <input type="text" name="user" className="tab__input" placeholder="Enter new username" />
          </div>
          <div className="tab__input-wrap">
            <label htmlFor="avatar" className="tab__label">Avatar:</label>
            <input type="file" name="avatar" className="tab__input" />
          </div>

          <button type="submit" className="tabBtn">Update</button>
        </form>
      </section>
    )
  }
}
