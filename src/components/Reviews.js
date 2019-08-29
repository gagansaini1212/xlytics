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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum laoreet lectus, et efficitur sapien. Maecenas porttitor interdum mattis. Sed risus justo, euismod id vehicula in, pellentesque in turpis. Vestibulum semper, turpis sed commodo molestie, nisi urna facilisis eros, vitae eleifend elit odio eu ex.',
    handle: '@johnsmith',
    image: 'https://bulma.io/images/placeholders/96x96.png',
  },
  {
    id: 2,
    personName: 'John Smith',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum laoreet lectus, et efficitur sapien. Maecenas porttitor interdum mattis. Sed risus justo, euismod id vehicula in, pellentesque in turpis. Vestibulum semper, turpis sed commodo molestie, nisi urna facilisis eros, vitae eleifend elit odio eu ex.',
    handle: '@johnsmith',
    image: 'https://bulma.io/images/placeholders/96x96.png',
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
