import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  background-color: ${props => props.theme.darkShades};
  color: ${props => props.theme.lightShades};
  .title {
    color: ${props => props.theme.lightShades};
  }
  .footer {
    background-color: ${props => props.theme.darkShades};
    padding: 3rem 1.5rem 3rem;
    .content {
      margin-top: 3rem;
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
              <a href="#">
                <img src="/images/store-ios.png" alt="Packrs ios store" />
              </a>
              <a href="#">
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
                <a>About Us</a>
              </li>
              <li>
                <a>News & Updates</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Service Stats</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Our Information</h4>
            <ul>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Return Policy</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Reach Us</h4>
            <ul>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Apply as Business</a>
              </li>
              <li>
                <a>Apply as Delivery Partners</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="columns">
            <div className="column">
              <p>
                Copyright ©2019 <a href="https://www.packrs.co">Packrs</a> |
                Made with ❤️ in Punjab, India, and on the Internet.
              </p>
            </div>
            <div className="column">
              <Icons className="has-text-right">
                <a
                  target="_blank"
                  href="https://www.facebook.com/PackrsOfficial/?modal=admin_todo_tour"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-facebook-square" />
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/packrs_official/"
                >
                  <span className="icon has-text-info">
                    <i className="fab fa-instagram" />
                  </span>
                </a>
                <a target="_blank" href="https://twitter.com/PackrsOfficial">
                  <span className="icon has-text-info">
                    <i className="fab fa-twitter-square" />
                  </span>
                </a>
                <a target="_blank" href="/">
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
