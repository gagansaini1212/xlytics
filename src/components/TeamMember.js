import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  padding: 1rem 0.75rem;
  margin-bottom: 2rem;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  .image {
    margin: 0 auto;
  }
  h5 {
    margin-bottom: 6px;
  }
`;

const TeamMember = ({ item }) => (
  <Container className="column is-one-third">
    <div className="card-image">
      <figure className="image is-128x128">
        <img className="is-rounded" src={item.image} alt={item.title} />
      </figure>
      <div className="card-content has-text-centered">
        <div className="content">
          <h5 className="has-text-weight-semibold is-size-5">{item.title}</h5>
          <p>{item.subtitle}</p>
        </div>
      </div>
    </div>
  </Container>
);

export default TeamMember;
