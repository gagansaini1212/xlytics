import React from 'react';
import styled from 'styled-components';

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

const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <h4 className="title is-4">Download The App</h4>
            <p>app store image here</p>
          </div>
          <div className="column">
            <h4 className="title is-4">Title</h4>
            <ul>
              <li>
                <a>Coffee</a>
              </li>
              <li>
                <a>Tea</a>
              </li>
              <li>
                <a>Milk</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Title</h4>
            <ul>
              <li>
                <a>Coffee</a>
              </li>
              <li>
                <a>Tea</a>
              </li>
              <li>
                <a>Milk</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4 className="title is-4">Title</h4>
            <ul>
              <li>
                <a>Coffee</a>
              </li>
              <li>
                <a>Tea</a>
              </li>
              <li>
                <a>Milk</a>
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
              <p className="has-text-right">social icons here</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
