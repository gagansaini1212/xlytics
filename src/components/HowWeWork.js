import React from 'react';
import styled from 'styled-components';

import HowWeWorkItem from './HowWeWorkItem';

const Section = styled.section`
  h2.title {
    margin-bottom: 3.2rem;
  }
`;

const HowWeWork = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title has-text-centered has-text-weight-bold">
        Our deliveries process
      </h2>
      <div className="columns is-multiline">
        <HowWeWorkItem />
        <HowWeWorkItem />
        <HowWeWorkItem />
        <HowWeWorkItem />
      </div>
    </div>
  </Section>
);

export default HowWeWork;
