import React from 'react';
import Helmet from 'react-helmet';

import styled from 'styled-components';
import Layout from '../components/Layout';

const Section = styled.div`
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    margin: 0rem auto;
    object-position: center;
  }
  .button:active {
    border-color: none;
  }
`;

const Contact = () => (
  <Layout>
    <Helmet title="Contact Us" />
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2 className="title is-1 has-text-weight-bold">Contact Us</h2>
            <p>
              We’re as accessible as your good neighbour. So much so that you
              <br />
              can hand us over your keys too
            </p>
            <p className="is-4">
              <span role="img" aria-label="e-mail">
                📧
              </span>{' '}
              <a href="mailto:hi@packrs.co">hi@packrs.co</a>
            </p>
            <p>
              <span role="img" aria-label="Round Pushpin">
                📍
              </span>{' '}
              Punjab, India
            </p>
            <p>
              <span role="img" aria-label="telephone">
                ☎️
              </span>{' '}
              <a href="tel:+911815195423">+91-181-5195423</a>
            </p>
            <p className="control">
              <a
                href="https://packrs.freshdesk.com/support/tickets/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="submit" className="button is-secondary is-medium">
                  get in touch
                </button>
              </a>
            </p>
          </div>
          <div className="column">
            <img className="image" src="/images/contact.jpg" alt="box" />
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;
