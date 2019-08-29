import React from 'react';
import styled from 'styled-components';

import CategoryItem from './CategoryItem';

const Section = styled.section`
  h2.title {
    margin-bottom: 3.2rem;
  }
`;

const categories = [
  {
    id: 1,
    title: 'Pick n Drop',
    image: '',
  },
  {
    id: 2,
    title: 'Food & Drinks',
    image: '',
  },
  {
    id: 3,
    title: 'Groceries',
    image: '',
  },
  {
    id: 4,
    title: 'Fruit & Veg',
    image: '',
  },
  {
    id: 5,
    title: 'Meet & Fish',
    image: '',
  },
  {
    id: 6,
    title: 'Pharmacy',
    image: '',
  },
  {
    id: 7,
    title: 'Gifts & Stationary',
    image: '',
  },
  {
    id: 8,
    title: 'Electronics',
    image: '',
  },
];

const Categories = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        What you can get from Packrs?
      </h2>
      <div className="columns is-multiline">
        {categories.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </Section>
);

export default Categories;
