import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';
import FeatureItem from '../components/FeatureItem';

const Container = styled.div`
  margin-top: 4rem;
  .button {
    display: flex;
    margin: 0 auto;
    width: 200px;
  }
`;

const Features = styled.div`
  margin-top: 5rem;
  padding-bottom: 6rem;
`;

const items = [
  {
    id: 1,
    title: 'Choose when to work',
    details:
      'You’ll be self-employed and free to work to your availability. The Packrs rider app makes it easy to plan.',
    icon: 'fas fa-clock',
  },
  {
    id: 2,
    title: 'Deliver with ease',
    details:
      "Know where you're going, and when to get there. Earn more with weekly guarantees and keep 100% of the tips you receive.",
    icon: 'fas fa-map-marked-alt',
  },
  {
    id: 3,
    title: 'Clear earnings, instant deposits',
    details:
      'See how much you earned after each delivery and exactly how your earnings were calculated. Get free weekly deposits or cash out instantly anytime you want.',
    icon: 'fas fa-coins',
  },
  {
    id: 4,
    title: 'All the tools you need',
    details:
      'Sign up and we’ll send you a free delivery bag and prepaid card so you can deliver food, drinks, retail, and more—from anywhere in your city—literally.',
    icon: 'fas fa-toolbox',
  },
  {
    id: 5,
    title: 'You will need',
    details:
      'A grin from ear to ear, your vehicle (motorcycle, bike or car), an iPhone or Android device and you must be 18+.',
    icon: 'fas fa-motorcycle',
  },
  {
    id: 6,
    title: 'Your ride. Your city',
    details: 'All deliveries will be within the city limits.',
    icon: 'fas fa-city',
  },
];

const Partner = () => (
  <Layout>
    <Helmet title="Become a delivery partner" />
    <Container className="container">
      <h1 className="title is-1 has-text-centered has-text-weight-bold">
        Become a delivery partner
      </h1>
      <p className="subtitle is-3 has-text-centered">
        Flexible work, competitive fees
      </p>
      <a
        href="https://airtable.com/shrNYyLynebosW850"
        target="_blank"
        rel="noopener noreferrer"
        className="button is-secondary is-large"
      >
        Apply now
      </a>
      <Features className="columns is-multiline">
        {items.map(item => (
          <FeatureItem key={item.id} item={item} />
        ))}
      </Features>
    </Container>
  </Layout>
);

export default Partner;
