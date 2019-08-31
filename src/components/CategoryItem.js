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
    img {
      height: 80px;
      width: auto;
      margin: 0 auto;
    }
  }
  .emoji {
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

const CategoryItem = ({ item }) => (
  <Container className="column is-one-quarter">
    <figure className="image is-96x96">
      <img src={item.image} alt={item.title} />
    </figure>
    {/* <span className="emoji" role="img" aria-label={item.title}>
      {item.emoji}
    </span> */}
    <h5 className="has-text-centered has-text-weight-semibold is-size-5">
      {item.title}
    </h5>
  </Container>
);

export default CategoryItem;
