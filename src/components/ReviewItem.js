import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  a {
    color: ${props => props.theme.darkAccent};
  }
`;

const ReviewItem = ({ item }) => (
  <div className="column">
    <Card className="card">
      <div className="card-content">
        <div className="content">
          <p>{item.text}</p>
        </div>
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                className="is-rounded"
                src={item.image}
                alt={item.personName}
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{item.personName}</p>
            <p className="subtitle is-6">{item.handle}</p>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default ReviewItem;
