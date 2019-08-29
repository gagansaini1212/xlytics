import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-bottom: 4rem;
  background-color: ${props => props.theme.darkAccent};
  color: ${props => props.theme.lightShades};
  padding: 5rem 1.5rem;
  h2.title {
    margin-bottom: 3.2rem;
    color: ${props => props.theme.lightShades} !important;
  }
  .city {
    :hover {
      color: #ffffff;
    }
  }
`;

const AvailableCities = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Available at{' '}
        <span role="img" aria-label="Map pin">
          📍
        </span>
      </h2>
      <div className="columns has-text-centered">
        <div className="column">
          <a
            href="https://www.google.com/maps/place/31.322393,75.5383999"
            target="_blank"
            rel="noopener noreferrer"
            className="city is-size-5"
          >
            Jalandhar
          </a>
        </div>
        <div className="column">
          <a
            href="https://www.google.com/maps/place/30.9003405,75.8216539"
            target="_blank"
            rel="noopener noreferrer"
            className="city is-size-5"
          >
            Ludhiana
          </a>
        </div>
        <div className="column">
          <a
            href="https://www.google.com/maps/place/30.7350767,76.7285096"
            target="_blank"
            rel="noopener noreferrer"
            className="city is-size-5"
          >
            Chandigarh
          </a>
        </div>
        <div className="column">
          <a
            href="https://www.google.com/maps/place/31.6335394,74.835101"
            target="_blank"
            rel="noopener noreferrer"
            className="city is-size-5"
          >
            Amritsar
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default AvailableCities;
