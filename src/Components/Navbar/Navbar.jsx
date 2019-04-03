import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.resize = null;
    this.state = {
      searchInput: '',
      isOpen: false,
      isResizing: false,
      isMobile: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.resizingWindow = this.resizingWindow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizingWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizingWindow);
  }

  // Handle user input on nav searchbar
  handleChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  // Click hamburger to open menu
  openMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  // Remove animations on window resize
  resizingWindow() {
    // Haven't resized in 100ms
    clearTimeout(this.resize);
    this.setState({ isResizing: true });
    this.resize = setTimeout(() => {
      this.setState({ isResizing: false });
      window.innerWidth < 600 ? this.setState({ isMobile: true }) : this.setState({ isMobile: false });
    }, 100);
  }

  render() {
    const { searchInput, isOpen, isResizing, isMobile } = this.state;
    const searchUrl = `/search/${this.state.searchInput}`;

    // Need to fix this
    let openClass = isOpen && isMobile ? "navbar-collapse--open" : "navbar-collapse";
    let resizeClass = isResizing ? "" : "animated--in";
    let navRenderedClass = `${openClass}  ${resizeClass}`;

    return (
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="logo">
            <div className="logo__img" alt="Hytale Mods logo"></div>
          </Link>
          <div className={navRenderedClass}>

            <form action={searchUrl} className="searchbar">
              <div className="searchbar__wrap">
                <input type="text" className="searchbar__input" onChange={this.handleChange} value={searchInput} placeholder="Search Hytale Mods" />
                <span className="searchbar__icon"></span>
              </div>
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

            <span className="searchbar__icon--white"></span>
          </div>

          <div className="hamburger" onClick={this.openMenu}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar);
