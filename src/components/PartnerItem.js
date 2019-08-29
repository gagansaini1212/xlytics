import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  a {
    color: ${props => props.theme.darkAccent};
  }
`;

const PartnerItem = ({ title }) => (
  <div className="column">
    <Card className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder "
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h3 className="title is-4">{title}</h3>
          <p className="is-size-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
          </p>
          <a href="#">Find out more</a>
        </div>
      </div>
    </Card>
  </div>
);

export default PartnerItem;
