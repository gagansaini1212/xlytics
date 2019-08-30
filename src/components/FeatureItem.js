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
  p {
    text-align: center;
    margin-top: 8px;
  }
`;

const FeatureItem = ({ item }) => (
  <Container className="column is-one-third">
    <figure className="image is-96x96">
      <img className="is-rounded" src={item.image} alt={item.title} />
    </figure>
    <h5 className="has-text-centered has-text-weight-semibold is-size-5">
      {item.title}
    </h5>
    {item.details && <p>{item.details}</p>}
  </Container>
);

export default FeatureItem;
