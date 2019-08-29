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

const Header = () => (
  <Section className="section">
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="/images/packrs-logo.png" alt="Packrs logo" />
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item">Home</Link>
            <Link className="navbar-item">About</Link>
            <Link className="navbar-item">Support</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary">
                  <strong>Become a Rider</strong>
                </Link>
                <Link className="button is-light">Become a Partner</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </Section>
);

export default Header;
