import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import config from '../utils/config';

const Section = styled.section`
  background-color: ${props => props.theme.darkShades};
  color: ${props => props.theme.lightShades} !important;
  .title {
    color: ${props => props.theme.lightShades} !important;
  }
  .footer {
    background-color: ${props => props.theme.darkShades};
    padding: 3rem 1.5rem 3rem;
    .content {
      margin-top: 3rem;
      p {
        color: ${props => props.theme.lightShades} !important;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.2rem;
    }
  }
  a {
    :hover {
      color: #fff;
    }
  }
`;

const StoreContainer = styled.div`
  margin-top: 3rem;
  @media screen and (max-width: 600px) {
    display: flex;
  }
  img {
    margin-right: 10px;
    width: auto;
    height: 42px;
  }
`;

const Icons = styled.div`
  .icon {
    color: ${props => props.theme.lightShades} !important;
    font-size: 1.7rem;
    margin-left: 10px;
  }
`;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4">Download The App</h4>
            <StoreContainer>
              <a href={config.iosStore}>
                <img src="/images/store-ios.png" alt="Packrs ios store" />
              </a>
              <a href={config.androidStore}>
                <img
                  src="/images/store-android.png"
                  alt="Packrs android store"
                />
              </a>
            </StoreContainer>
          </div>
          <div className="column">
            <h4 className="title is-4">Packrs</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/news-updates">News & Updates</Link>
              </li>
              <li>
                <a
                  href="https://packrs.freshdesk.com/support/tickets/new"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="https://packrs-334.freshstatus.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Server Stats
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Our Information</h4>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Reach Us</h4>
            <ul>
              <li>
                <a
                  href="https://perminderklair.freshteam.com/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <Link to="/business">Apply as Business</Link>
              </li>
              <li>
                <Link to="/partner">Apply as Rider</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="columns">
            <div className="column">
              <p>
                © 2019 <a href="https://www.packrs.co">Packrs</a> | Made with ❤️
                in Punjab, India, and on the Internet.
              </p>
            </div>
            <div className="column">
              <Icons className="has-text-right">
                <a
                  target="_blank"
                  href={config.facebook}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-facebook-square" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href={config.instagram}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-instagram" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href={config.twitter}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-twitter-square" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href={config.linkedin}
                  rel="noopener noreferrer"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-linkedin" />
                  </span>
                </a>
              </Icons>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
