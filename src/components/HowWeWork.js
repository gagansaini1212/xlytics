import React from 'react';

import HowWeWorkItem from './HowWeWorkItem';

const HowWeWork = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <HowWeWorkItem />
        </div>
        <div className="column">
          <HowWeWorkItem />
        </div>
        <div className="column">
          <HowWeWorkItem />
        </div>
      </div>
    </div>
  </section>
);

export default HowWeWork;
