import React from 'react';
import styled from 'styled-components';

import ReviewItem from './ReviewItem';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Reviews = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <p className="title is-2">Reviews</p>
          <p className="subtitle is-4">What our customers say?</p>
        </div>
        <div className="column">
          <div className="columns">
            <ReviewItem title="Become a Rider" />
            <ReviewItem title="Become a Partner" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Reviews;
