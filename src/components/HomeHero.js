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
  img {
    margin-right: 10px;
    width: auto;
    height: 42px;
  }
`;

const HomeHero = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <section className="hero is-medium">
            <div className="hero-body">
              <h1 className="title is-1">
                Get anything from anywhere want to be.
              </h1>
              <h2 className="subtitle is-1">{`It\'s in your hand.`}</h2>
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
