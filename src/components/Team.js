import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Team = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Our Team
      </h2>
      <div className="columns is-multiline">members here</div>
    </div>
  </Section>
);

export default Team;
