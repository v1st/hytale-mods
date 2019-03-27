import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { searchInput } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="logo">
            <div className="logo__img" alt="Hytale Mods logo"></div>
          </Link>
          <form action="" className="searchbar">
            <input type="text" className="searchbar__input" onChange={this.handleChange} value={searchInput} placeholder="Search Hytale Mods" />
          </form>
          <div className="nav__button-container">
            <Link to={{
              pathname: "/signup",
              state: { modal: true },
            }} className="nav__button--primary">Sign up</Link>
            <Link to={{
              pathname: "/login",
              state: { modal: true },
            }} className="nav__button">Login</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar);
