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
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        What you can get from Packrs?
      </h2>
      <div className="columns is-multiline">
        <CategoryItem title="Pick n Drop" />
        <CategoryItem title="Food & Drinks" />
        <CategoryItem title="Groceries" />
        <CategoryItem title="Fruit & Veg" />
        <CategoryItem title="Meet & Fish" />
        <CategoryItem title="Pharmacy" />
        <CategoryItem title="Gifts & Stationary" />
        <CategoryItem title="Electronics" />
      </div>
    </div>
  </Section>
);

export default Categories;
