import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  box-shadow: none;
`;

const CategoryItem = () => (
  <div className="column is-half">
    <Box className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h3 className="title is-3">Title 5</h3>
            <p className="is-size-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </article>
    </Box>
  </div>
);

export default CategoryItem;
