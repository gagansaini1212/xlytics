import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import DownloadAppForm from './DownloadAppForm';

const Section = styled.section`
  .title {
    font-size: 3.4rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 3.4rem;
  }
`;
const HelpText = styled.p`
  margin-top: 1.5rem;
`;

const StoreContainer = styled.div`
  margin-top: 3rem;
  @media screen and (max-width: 600px) {
    display: flex;
  }
  img {
    margin-right: 10px;
    width: auto;
    height: 46px;
  }
`;

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <section className="hero is-medium">
            <div className="hero-body">
              <h1 className="title is-size-3-mobile">
                Get anything from anywhere you want.
              </h1>
              <h2 className="subtitle is-1 is-size-4-mobile">
                It will be in your hand.
              </h2>
              <DownloadAppForm />
              <HelpText>
                We’ll send you a text with a link to download the app.
              </HelpText>
              <StoreContainer>
                <a href={config.iosStore}>
                  <img src="/images/store-ios.png" alt="Packrs ios store" />
                </a>
                <a href={config.androidStore}>
                  <img
                    src="/images/store-android.png"
                    alt="Packrs android store"
                  />
                </a>
              </StoreContainer>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
