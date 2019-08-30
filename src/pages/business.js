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
    title: 'Real-time tracking',
    details: 'Follow your orders in real time from our dashboard',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 2,
    title: 'Plan your orders in advance',
    details:
      'Place an order for immediate pick-up or schedule it for another date and time.',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 3,
    title: 'Open 7 days a week',
    details:
      "We're ready to deliver your order 365 days a year. Don't worry about the day of the week, we've got it handled!",
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 4,
    title: 'Delivery in less than an hour',
    details:
      'Get our fleet working for you! We deliver every order within an hour of pick-up.',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 5,
    title: 'Fast customer support',
    details:
      'We have an amazing customer support team to help you through any doubts or questions, at every stage of the process.',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 6,
    title: 'No conditions',
    details:
      'No commitment required. Our services are easy and simple to use. We’re here whenever you need us.',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
];

const Business = () => (
  <Layout>
    <Helmet title="Become a business partner" />
    <Container className="container">
      <h1 className="title is-1 has-text-centered has-text-weight-bold">
        Become a business partner
      </h1>
      <p className="subtitle is-3 has-text-centered">
        Schedule your business deliveries in minutes!
      </p>
      <a
        href="https://airtable.com/shrzgjKLLyiwUVRA0"
        target="_blank"
        rel="noopener noreferrer"
        className="button is-secondary is-large"
      >
        Get started
      </a>
      <Features className="columns is-multiline">
        {items.map(item => (
          <FeatureItem key={item.id} item={item} />
        ))}
      </Features>
    </Container>
  </Layout>
);

export default Business;
