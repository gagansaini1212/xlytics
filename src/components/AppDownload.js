import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';

const Section = styled.div`
  margin-top: 6rem;
  margin-bottom: 2rem;
  img.mockup {
    height: 400px;
    width: auto;
    transform: rotate(20deg);
  }
  .title {
    margin-top: 5rem;
  }
`;

const StoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  @media screen and (max-width: 600px) {
    display: flex;
  }
  img {
    margin-right: 10px;
    width: auto;
    height: 42px;
  }
`;

const AppDownload = () => (
  <Section className="container">
    <div className="columns is-centered">
      <div className="column is-two-fifths">
        <h3 className="title is-3 has-text-centered has-text-weight-bold">
          Download the Packrs app
        </h3>
        <StoreContainer>
          <a href={config.iosStore}>
            <img src="/images/store-ios.png" alt="Packrs ios store" />
          </a>
          <a href={config.androidStore}>
            <img src="/images/store-android.png" alt="Packrs android store" />
          </a>
        </StoreContainer>
      </div>
      <div className="column is-two-fifths">
        <img
          className="mockup"
          src="/images/mockup-dashboard.png"
          alt="packrs dashboard mockup"
        />
      </div>
    </div>
  </Section>
);

export default AppDownload;
