import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import logo from '../img/titanic-logo.gif'
import logoFrame from '../img/titanic-logo-frame_10_delay-0.1s.gif'

// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  getSource = () => {
    console.log('this.props.location.pathname: ', this.props.location.pathname)
    return this.props.location.pathname === '/' ? logo : logoFrame
  }

  render() {
    console.log('render navbar with props', this.props)
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="" title="Logo">
              <img src={this.getSource()} width="128" height="96" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            style={{ justifyContent: 'space-around' }}
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            {/* <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link> */}
            <Link className="navbar-item" to="/catalogue">
              Catalogue
            </Link>
            <Link className="navbar-item" to="/misc">
              Misc.
            </Link>
            <Link className="navbar-item" to="/connect">
              Connect
            </Link>
            {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default (props) => (
  <Location>
    {(locationProps) => <Navbar {...locationProps} {...props} />}
  </Location>
)
