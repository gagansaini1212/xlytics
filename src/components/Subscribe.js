import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Subscribe = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Subscribe
      </h2>
      <div>form here</div>
    </div>
  </Section>
);

export default Subscribe;
