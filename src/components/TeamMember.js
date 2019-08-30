import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    :hover {
      box-shadow: none;
    }
  }
  .image {
    margin: 0 auto;
  }
`;

const TeamMember = ({ item }) => (
  <Container className="column is-one-third">
    <div className="card has-text-centered">
      <div className="card-image">
        <figure className="image is-96x96">
          <img className="is-rounded" src={item.image} alt={item.title} />
        </figure>
        <div className="card-content">
          <div className="content">
            <h5 className="has-text-weight-semibold is-size-5">{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default TeamMember;
