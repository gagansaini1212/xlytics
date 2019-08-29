import React from 'react';

const Footer = () => (
  <section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <div className="content">
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
          <div className="column">
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="column">
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{' '}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  </section>
);

export default Footer;
