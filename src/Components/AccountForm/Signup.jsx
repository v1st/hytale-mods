import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";


import './AccountForm.scss';

class Signup extends Component {
  render() {
    const { location, history } = this.props;
    const { state = {} } = location;
    const { modal } = state;

    // Clicking outside of the modal closes it
    let back = e => {
      if (e.target.id === 'modal') {
        e.stopPropagation();
        history.goBack();
      }
    };

    return (
      <div className="modal" onClick={back} id="modal">
        {modal}
        <div className="account__form--signup" data-aos="fade-up">
          <div className="form__wrap">

            <h3 className="form__title">Register your account</h3>
            <form action="" method="" className="form">
              <div className="form__input-wrap">
                <input type="text" className="form__input" required />
                <label htmlFor="" className="form__label">Email</label>
              </div>
              <div className="form__input-wrap">
                <input type="password" className="form__input" required />
                <label htmlFor="" className="form__label">Password</label>
              </div>
              <div className="form__input-wrap">
                <input type="password" className="form__input" required />
                <label htmlFor="" className="form__label">Confirm Password</label>
              </div>
              <div className="big-button-wrap">
                <div type="" className="big-button">Sign up</div>
                <div className="big-button--shade"></div>
              </div>
            </form>
            <span className="form__subtext">Already have an account&#63; <Link to={{
              pathname: "/login",
              state: { modal: true },
            }}
              className="form__link">Login</Link></span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Signup);
