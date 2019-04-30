import React, { Component } from 'react'

export default class TabPassword extends Component {
  render() {
    return (
      <section className="tab">
        <h2 className="tab__title">Change your password</h2>
        <form action="" encType="multipart/form-data" autoComplete="off">
          <div className="tab__input-wrap">
            <label htmlFor="crtpasswd" className="tab__label">Current Password:</label>
            <input type="password" name="crtpasswd" className="tab__input" />
          </div>
          <div className="tab__input-wrap">
            <label htmlFor="passwd" className="tab__label">New Password:</label>
            <input type="password" name="passwd" className="tab__input" />
          </div>
          <div className="tab__input-wrap">
            <label htmlFor="cpasswd" className="tab__label">Confirm New Password:</label>
            <input type="password" name="cpasswd" className="tab__input" />
          </div>

          <button type="submit" className="tabBtn">Update</button>
        </form>
      </section>
    )
  }
}
