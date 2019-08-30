import React from 'react';
import styled from 'styled-components';

import HowWeWorkItem from './HowWeWorkItem';

const Section = styled.section`
  h2.title {
    margin-bottom: 3.2rem;
  }
  .media-left {
    min-width: 78px;
    text-align: center;
  }
`;

const items = [
  {
    id: 1,
    title: 'Any product you love',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'fas fa-stopwatch',
  },
  {
    id: 2,
    title: '45 mins delivery',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'fas fa-map-marked-alt',
  },
  {
    id: 3,
    title: 'Save time & money',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'fas fa-piggy-bank',
  },
  {
    id: 4,
    title: 'Earn cash and free deliveries',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'fas fa-gift',
  },
];

const HowWeWork = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        You want it, we deliver it
      </h2>
      <div className="columns is-multiline">
        {items.map(item => (
          <HowWeWorkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </Section>
);

export default HowWeWork;
