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
    image: '/images/categories/pick-drop.png',
    emoji: '📦',
  },
  {
    id: 2,
    title: 'Food & Drinks',
    image: '/images/categories/food-drinks.png',
    emoji: '🍲',
  },
  {
    id: 3,
    title: 'Groceries',
    image: '/images/categories/groceries.png',
    emoji: '🛒',
  },
  {
    id: 4,
    title: 'Fruit & Veg',
    image: '/images/categories/fruit-veg.png',
    emoji: '🍌',
  },
  {
    id: 5,
    title: 'Meat & Fish',
    image: '/images/categories/meat.png',
    emoji: '🍗',
  },
  {
    id: 6,
    title: 'Pharmacy',
    image: '/images/categories/pharmacy.png',
    emoji: '💊',
  },
  {
    id: 7,
    title: 'Gifts & Stationary',
    image: '/images/categories/gifts.png',
    emoji: '🎁',
  },
  {
    id: 8,
    title: 'Electronics',
    image: '/images/categories/electronics.png',
    emoji: '🔌',
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
