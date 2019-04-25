import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';

import './AccountForm.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      passwd: '',
      cpasswd: '',
      validName: true,
      validEmail: true,
      validPassword: true,
      validCPassword: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.confirmPassword = this.confirmPassword.bind(this);
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
    const { validName, validEmail, validPassword, validCPassword } = this.state;
    if (validName === false || validEmail === false || validPassword === false || validCPassword === false) {
      return;
    }

    const data = new FormData(e.target);
    console.log(...data)
    try {
      axios.post('/api/v1/updates/signup', {
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

  // Refactor in future
  validateName() {
    if (this.state.name === '') {
      return this.setState({ validName: true });
    }
    const regex = /^[a-zA-Z0-9]+$/;
    let valid = regex.test(String(this.state.name));
    this.setState({ validName: valid });
  }

  validateEmail() {
    if (this.state.email === '') {
      return this.setState({ validEmail: true });
    }
    const regex = /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/g;
    let valid = regex.test(String(this.state.email).toLowerCase());
    this.setState({ validEmail: valid });
  }

  validatePassword() {
    if (this.state.passwd === '') {
      return this.setState({ validPassword: true });
    }
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    let valid = regex.test(String(this.state.passwd));
    this.setState({ validPassword: valid });
  }

  confirmPassword() {
    if (this.state.passwd === this.state.cpasswd) {
      return this.setState({ validCPassword: true });
    } else {
      return this.setState({ validCPassword: false });
    }
  }

  render() {
    return (
      <div className="modal--full" id="modal">
        <div className="account__form--signup" data-aos="fade-up">
          <div className="form__wrap">
            <h3 className="form__title">Register your account</h3>
            <form onSubmit={this.handleSubmit} encType="application/x-www-form-urlencoded" className="form" autoComplete="off">
              <div className="form__input-wrap">
                <input onBlur={this.validateName}
                  onChange={this.handleInput}
                  name="name"
                  type="text"
                  className="form__input"
                  required />
                <label htmlFor="name" className="form__label">Username</label>
                <span className={this.state.validName ? "form__error--hidden" : "form__error"}>Please enter a valid email user.</span>
              </div>
              <div className="form__input-wrap">
                <input onBlur={this.validateEmail}
                  onChange={this.handleInput}
                  name="email"
                  type="text"
                  className="form__input"
                  required />
                <label htmlFor="email" className="form__label">Email</label>
                <span className={this.state.validEmail ? "form__error--hidden" : "form__error"}>Please enter a valid email address.</span>
              </div>
              <div className="form__input-wrap">
                <input onBlur={this.validatePassword}
                  onChange={this.handleInput}
                  name="passwd"
                  type="password"
                  className="form__input"
                  required />
                <label htmlFor="passwd" className="form__label">Password</label>
                <span className={this.state.validPassword ? "form__error--hidden" : "form__error"}>1 uppercase, 1 number, 1 special character. Min length 8.</span>
              </div>
              <div className="form__input-wrap">
                <input onBlur={this.confirmPassword}
                  onChange={this.handleInput}
                  name="cpasswd"
                  type="password"
                  className="form__input"
                  required />
                <label htmlFor="cpasswd" className="form__label">Confirm Password</label>
                <span className={this.state.validCPassword ? "form__error--hidden" : "form__error"}>Passwords don't match.</span>
              </div>
              <div className="big-button-wrap">
                <button type="submit" className="big-button">Sign up</button>
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
