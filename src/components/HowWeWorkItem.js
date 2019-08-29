import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  box-shadow: none;
`;

const CategoryItem = ({ item }) => (
  <div className="column is-half">
    <Box className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img src={item.image} alt={item.title} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h3 className="title is-3">{item.title}</h3>
            <p className="is-size-5">{item.details}</p>
          </div>
        </div>
      </article>
    </Box>
  </div>
);

export default CategoryItem;
