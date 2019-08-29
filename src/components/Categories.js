import React from 'react';

import CategoryItem from './CategoryItem';

const Categories = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <CategoryItem />
        </div>
        <div className="column">
          <CategoryItem />
        </div>
        <div className="column">
          <CategoryItem />
        </div>
        <div className="column">
          <CategoryItem />
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
