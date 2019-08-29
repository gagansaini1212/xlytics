import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <section className="section">
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="/images/packrs-logo.png" />
          </a>

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

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">About</a>
            <a className="navbar-item">Support</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Become a Rider</strong>
                </a>
                <a className="button is-light">Become a Partner</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
