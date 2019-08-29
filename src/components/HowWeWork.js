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
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Our delivery process
      </h2>
      <div className="columns is-multiline">
        <HowWeWorkItem title="Any product you love" />
        <HowWeWorkItem title="45 mins delivery" />
        <HowWeWorkItem title="Save time & money" />
        <HowWeWorkItem title="Earn cash and free deliveries" />
      </div>
    </div>
  </Section>
);

export default HowWeWork;
