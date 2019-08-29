import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding-bottom: 4rem;
  background-color: ${props => props.theme.darkAccent};
  color: ${props => props.theme.lightShades};
  padding: 5rem 1.5rem;
  h2.title {
    margin-bottom: 3.2rem;
    color: ${props => props.theme.lightShades};
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
        Available Cities{' '}
        <span role="img" aria-label="Map pin">
          📍
        </span>
      </h2>
      <div className="columns has-text-centered">
        <div className="column">
          <a href="" className="city is-size-5">
            Jalandhar
          </a>
        </div>
        <div className="column">
          <a href="" className="city is-size-5">
            Ludhiana
          </a>
        </div>
        <div className="column">
          <a href="" className="city is-size-5">
            Chandigarh
          </a>
        </div>
        <div className="column">
          <a href="" className="city is-size-5">
            Amritsar
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default AvailableCities;
