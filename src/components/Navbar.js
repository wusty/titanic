import React from 'react'
import { Link } from 'gatsby'
import instagram from '../img/social/instagram.svg'
import logo from '../img/titanic-logo.gif'

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

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="" title="Logo">
              <img src={logo} width="256" height="192" />
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
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link> */}
              <Link className="navbar-item" to="/archive">
                Archive
              </Link>
              <Link className="navbar-item" to="/connect">
                Connect
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item columns"
                target="_blank"
                title="instagram"
                href="https://instagram.com/titanic4u"
                style={{ color: 'black' }}
              >
                <div className="column">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '100%', height: '1em' }}
                  />
                  <span>@titanic4u</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
