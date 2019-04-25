import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import { connect } from 'react-redux'
import { userLogin, userSignup } from '../../actions';


import './AccountForm.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passwd: '',
      validEmail: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // check if anything is invalid
    const { email, passwd } = this.state;
    if (email === false || passwd === false) {
      return;
    }

    const data = new FormData(e.target);
    console.log(...data)
    try {
      axios.post('/api/v1/updates/login', {
        body: data
      })
        .then((res) => {
          console.log(res);
          res.json();
        })
        .catch(e => console.log(e));
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Error: ', err.message);
      }
    }
  }

  validateEmail() {
    if (this.state.email === '') {
      return this.setState({ validEmail: true });
    }
    const regex = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/g;
    let valid = regex.test(String(this.state.email).toLowerCase());
    this.setState({ validEmail: valid });
  }

  render() {
    return (
      <div className="modal--full" id="modal" >
        <div className="account__form--login" data-aos="fade-up">
          <div className="form__wrap">
            <h3 className="form__title">Login to your account</h3>
            <form onSubmit={this.handleSubmit} encType="application/x-www-form-urlencoded" className="form" autoComplete="off">
              <div className="form__input-wrap">
                <input onBlur={this.validateEmail}
                  onChange={this.handleInput}
                  name="email" type="text"
                  className="form__input"
                  maxLength="65"
                  autoComplete="off"
                  required />
                <label htmlFor="email" className="form__label">Email</label>
                <span className={this.state.validEmail ? "form__error--hidden" : "form__error"}>Please enter a valid email address.</span>
              </div>
              <div className="form__input-wrap">
                <input onChange={this.handleInput}
                  name="passwd" type="password"
                  className="form__input"
                  autoComplete="off"
                  required />
                <label htmlFor="passwd" className="form__label">Password</label>
              </div>
              <span className="form__subtext--fp">Forgot Password&#63;</span>
              <div className="big-button-wrap">
                <button type="submit" className="big-button">Login</button>
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
