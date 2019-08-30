import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Team = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Our Team
      </h2>
      <div className="columns is-multiline">
        <div className="column is-one-third">
          <div className="card has-text-centered">
            <div className="card-image">
              <figure className="image is-128x128 is-inline-block">
                <img
                  src="https://i.imgsafe.org/ba/baa924a5e3.png"
                  alt="team memeber"
                  className="is-rounded"
                />
              </figure>
              <div className="card-content">
                <div className="content">
                  <h5 className="has-text-weight-semibold is-size-5">
                    Perminder Klair
                  </h5>
                  <p>Founder & CEO</p>
                  <p>social icon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card has-text-centered">
            <div className="card-image">
              <figure className="image is-128x128 is-inline-block">
                <img
                  src="https://i.imgsafe.org/ba/baa924a5e3.png"
                  alt="team memeber"
                  className="is-rounded"
                />
              </figure>
              <div className="card-content">
                <div className="content">
                  <h5 className="has-text-weight-semibold is-size-5">
                    Nasim Akthar
                  </h5>
                  <p>Lead Developer</p>
                  <p>social icon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card has-text-centered">
            <div className="card-image">
              <figure className="image is-128x128 is-inline-block">
                <img
                  src="https://i.imgsafe.org/ba/baa924a5e3.png"
                  alt="team memeber"
                  className="is-rounded"
                />
              </figure>
              <div className="card-content">
                <div className="content">
                  <h5 className="has-text-weight-semibold is-size-5">
                    Gagan Saini
                  </h5>
                  <p>Front-End Developer</p>
                  <p>social icon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card has-text-centered">
            <div className="card-image">
              <figure className="image is-128x128 is-inline-block">
                <img
                  src="https://i.imgsafe.org/ba/baa924a5e3.png"
                  alt="team memeber"
                  className="is-rounded"
                />
              </figure>
              <div className="card-content">
                <div className="content">
                  <h5 className="has-text-weight-semibold is-size-5">
                    Balwinder Klair
                  </h5>
                  <p className="is-size-5">Marketing Strategist</p>
                  <p>social icon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card has-text-centered">
            <div className="card-image">
              <figure className="image is-128x128 is-inline-block">
                <img
                  src="https://i.imgsafe.org/ba/baa924a5e3.png"
                  alt="team memeber"
                  className="is-rounded"
                />
              </figure>
              <div className="card-content">
                <div className="content">
                  <h5 className="has-text-weight-semibold is-size-5">
                    Sourav Arya
                  </h5>
                  <p className="is-size-5">Marketing Strategist</p>
                  <p>social icon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Team;
