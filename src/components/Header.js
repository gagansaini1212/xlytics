/* eslint global-require: 0 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 2.75rem;
    }
  }
  .navbar-item {
    font-weight: 700;
    :hover {
      color: ${props => props.theme.darkAccent};
    }
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const SmoothScroll = require('smooth-scroll');
      const scroll = new SmoothScroll('a[href*="#"]');
    }
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src="/images/packrs-logo.png" alt="Packrs logo" />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/support" className="navbar-item">
                  Support
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons is-hidden-mobile">
                    <a
                      data-scroll
                      href="/#partners"
                      className="button is-primary"
                    >
                      <strong>Become a Rider</strong>
                    </a>
                    <a
                      data-scroll
                      href="/#partners"
                      className="button is-light"
                    >
                      Become a Partner
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
