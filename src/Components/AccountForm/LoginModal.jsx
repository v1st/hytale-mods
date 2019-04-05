import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

import './AccountForm.scss';

class LoginModal extends Component {
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
      <div className="modal" onClick={back} id="modal" >
        {modal}
        <div className="account__form--login" data-aos="fade-up">
          <div className="form__wrap">
            <h3 className="form__title">Login to your account</h3>
            <form action="" method="" encType="application/x-www-form-urlencoded" className="form">
              <div className="form__input-wrap">
                <input type="text" className="form__input" required />
                <label htmlFor="" className="form__label">Email</label>
              </div>
              <div className="form__input-wrap">
                <input type="password" className="form__input" required />
                <label htmlFor="" className="form__label">Password</label>
              </div>
              <span className="form__subtext--fp">Forgot Password&#63;</span>
              <div className="big-button-wrap">
                <div type="" className="big-button">Login</div>
                <div className="big-button--shade"></div>
              </div>
            </form>
            <span className="form__subtext">Don't have an account&#63; <Link to={{
              pathname: "/signup",
              state: { modal: true },
            }}
              className="form__link">Sign up</Link></span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginModal);
