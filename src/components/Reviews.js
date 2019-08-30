import React from 'react';
import styled from 'styled-components';

import ReviewItem from './ReviewItem';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const items = [
  {
    id: 1,
    personName: 'John Smith',
    text:
      "Very Good App!!! just arrived in my hotel in Chandigarh and starving. didn't want leave hotel so I ordered for delivery using this app. Plus, I forgot my phone charger at home, Packrs delivered even phone charger to me.",
    handle: '@johnsmith',
    image: '/images/reviews/gurkaran.jpg',
  },
  {
    id: 2,
    personName: 'Anushkha',
    text:
      'A good app and company, they do their best to make sure you get your order or are compensated fairly. If anything is missing or wrong definitely contact them, they are usually fast to fix the issue.',
    handle: '@anushkha',
    image: '/images/reviews/samar.jpg',
  },
];

const Reviews = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <p className="title is-2">
            Reviews{' '}
            <span role="img" aria-label="Writing Hand">
              ✍️
            </span>
          </p>
          <p className="subtitle is-4">What our customers say?</p>
        </div>
        <div className="column">
          <div className="columns">
            {items.map(item => (
              <ReviewItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Reviews;
