import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import { userLogin, userSignup } from '../../actions';


import './AccountForm.scss';

class Login extends Component {
  // Need to delete later, just for testing redux
  constructor() {
    super();

    this.click = this.click.bind(this);
  }

  click() {
    this.props.userLogin({'test': 123});
  }

  render() {
    return (
      <div className="modal--full" id="modal" >
        <div className="account__form--login" data-aos="fade-up">
          <div className="form__wrap">
            <h3 className="form__title">Login to your account</h3>
            <form action="/login" method="" encType="application/x-www-form-urlencoded" className="form">
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
                <button onClick={this.click} type="" className="big-button">Login</button>
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = { userLogin, userSignup }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
