import React from 'react';

const HomeHero = () => (
  <section className="section">
    <div className="container">
      <section className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Medium title</h1>
            <h2 className="subtitle">Medium subtitle</h2>
            <div className="field">
              <div className="control">
                <input
                  className="input is-large"
                  type="text"
                  placeholder="Large input"
                />
              </div>
            </div>
            <a className="button is-primary">Primary</a>
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default HomeHero;
