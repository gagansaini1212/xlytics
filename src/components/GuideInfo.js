import React from 'react';

import entertainment from '../../static/images/xlytics/guide.jpg';

const GuideInfo = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="">
            Our guide to launching a successful digital product.
          </h1>
          <p>
            Read our 8 Secrets to designing, building and launching successful
            digital products.
          </p>
          <a className="button is-primary is-rounded">Download the guide</a>
        </div>
        <div className="column">
          <img src={entertainment} alt="Guide Book" />
        </div>
      </div>
    </div>
  </section>
);

export default GuideInfo;
