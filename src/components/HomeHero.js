import React from 'react';
import styled from 'styled-components';

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
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Your mobile number"
                  />
                </p>
                <p className="control">
                  <a className="button is-primary is-medium">Text me a link</a>
                </p>
              </div>
              <HelpText>
                We’ll send you a text with a link to download the app.
              </HelpText>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Section>
);

export default HomeHero;
