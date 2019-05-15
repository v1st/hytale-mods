import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import queryString from 'query-string';
import { searchMods } from '../../_actions';

import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.resize = null;
    this.state = {
      searchInput: '',
      isOpen: false,
      isResizing: false,
      isMobile: false,
      loggedin: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.resizingWindow = this.resizingWindow.bind(this);
    this.submitHandler = this.submitHandler.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentDidMount() {
    // Check width on load
    window.innerWidth < 600 ? this.setState({ isMobile: true }) : this.setState({ isMobile: false });
    window.addEventListener('resize', this.resizingWindow);
    // Set redux search from initial URL params
    let { location } = this.props;
    let params = queryString.parse(location.search);
    this.props.searchMods(params.search);
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

    let overlay = document.getElementById('overlay');
    this.state.isOpen ? overlay.style.zIndex = '-1' : overlay.style.zIndex = '99';
  }

  closeMenu() {
    this.setState({ isOpen: false })
  }

  // Remove animations on window resize
  resizingWindow() {
    // Haven't resized in 100ms
    clearTimeout(this.resize);
    this.setState({
      isResizing: true,
      isOpen: false
    });
    this.resize = setTimeout(() => {
      this.setState({ isResizing: false });
      window.innerWidth < 600 ? this.setState({ isMobile: true }) : this.setState({ isMobile: false });
    }, 100);
  }

  // Handle search form submission  
  submitHandler(e) {
    e.preventDefault();
    // Change URL to search input and send query to redux store
    this.props.history.push(`/?search=${this.state.searchInput}`);
    this.props.searchMods(this.state.searchInput);
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { searchInput, isOpen, isResizing, isMobile } = this.state;

    // Need to fix this
    let openClass = isOpen && isMobile ? "navbar-collapse--open" : "navbar-collapse";
    let resizeClass = isResizing ? "" : "animated--in";
    let navRenderedClass = `${openClass}  ${resizeClass}`;

    // If menu is open, stop scrolling in background
    this.state.isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll";

    // if login change
    if (this.state.loggedin === true) {
      return (
        <React.Fragment>
          <nav className="navbar">
            <div className="navbar__container">
              {/* Site logo */}
              <Link to="/" className="logo">
                <div className="logo__img" alt="Hytale Mods logo"></div>
              </Link>
              <div className={navRenderedClass}>
                {/* Searchbar */}
                <form onSubmit={this.submitHandler} className="searchbar">
                  <div className="searchbar__wrap">
                    <input type="text" className="searchbar__input" onChange={this.handleChange} value={searchInput} placeholder="Search Hytale Mods" />
                    <span onClick={this.submitHandler} className="searchbar__icon"></span>
                  </div>
                </form>
                {/* Signin Buttons */}
                <div className="nav__button-container">
                  <Link to={{
                    pathname: "/signup",
                    state: { modal: true },
                  }} className="nav__button--primary">Profile</Link>
                  <Link to={{
                    pathname: "/signup",
                    state: { modal: true },
                  }} className="nav__button--primary">Upload </Link>
                  <Link to={{
                    pathname: "/login",
                    state: { modal: true },
                  }} className="nav__button">Logout</Link>
                </div>

                <span className="searchbar__icon--white"></span>
              </div>
              {/* Hamburger menu */}
              <div className="hamburger" onClick={this.openMenu}>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
              </div>
            </div>
          </nav>
          <div id="overlay" onClick={this.closeMenu}></div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="navbar__container">
            {/* Site logo */}
            <Link to="/" className="logo">
              <div className="logo__img" alt="Hytale Mods logo"></div>
            </Link>
            <div className={navRenderedClass}>
              {/* Searchbar */}
              <form onSubmit={this.submitHandler} className="searchbar">
                <div className="searchbar__wrap">
                  <input type="text" className="searchbar__input" onChange={this.handleChange} value={searchInput} placeholder="Search Hytale Mods" />
                  <span onClick={this.submitHandler} className="searchbar__icon"></span>
                </div>
              </form>
              {/* Signin Buttons */}
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
            {/* Hamburger menu */}
            <div className="hamburger" onClick={this.openMenu}>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
            </div>
          </div>
        </nav>
        <div id="overlay" onClick={this.closeMenu}></div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = { searchMods }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
