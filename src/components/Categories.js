import React from 'react';
import styled from 'styled-components';

import CategoryItem from './CategoryItem';

const Section = styled.section`
  h2.title {
    margin-bottom: 3.2rem;
  }
`;

const Categories = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title has-text-centered">What you can get from Packrs?</h2>
      <div className="columns is-multiline">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  </Section>
);

export default Categories;
