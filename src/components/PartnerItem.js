import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  a {
    color: ${props => props.theme.darkAccent};
  }
  img {
    width: 100%;
    height: 400px;
  }
  .button {
    > span {
      margin-left: 6px !important;
    }
  }
`;

const PartnerItem = ({ item }) => (
  <div className="column">
    <Card className="card">
      <div className="card-image">
        <figure className="image">
          <img src={item.image} alt={item.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h3 className="title is-4">{item.title}</h3>
          <p className="is-size-6">{item.details}</p>
          <a className="button is-link" href={item.link}>
            Find out more
            <span
              className="icon is-small"
              role="img"
              aria-label="Pointing Right"
            >
              👉
            </span>
          </a>
        </div>
      </div>
    </Card>
  </div>
);

export default PartnerItem;
