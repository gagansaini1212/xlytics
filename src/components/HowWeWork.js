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
    details: 'From food, fruits, gifts to keys we can get it for you!',
    icon: 'fas fa-stopwatch',
  },
  {
    id: 2,
    title: '45 mins delivery',
    details:
      'Delivery will be guaranteed to be delivered within the timeframe.',
    icon: 'fas fa-map-marked-alt',
  },
  {
    id: 3,
    title: 'Save time & money',
    details:
      'No need to go outside and waste time and energy, we are here for you.',
    icon: 'fas fa-piggy-bank',
  },
  {
    id: 4,
    title: 'Earn cash and free deliveries',
    details: 'Refer to your friends and family, both can earn free deliveries',
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
