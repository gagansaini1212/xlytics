import React from 'react';

import PartnerItem from './PartnerItem';

const Partners = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <PartnerItem />
        </div>
        <div className="column">
          <PartnerItem />
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
