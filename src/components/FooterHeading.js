import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem 0;
  h4 {
    color: ${props => props.theme.lightHeading};
  }
`;

const FooterHeading = ({ heading, size, ...otherProps }) => (
  <Wrapper>
    <h4
      className={`has-text-weight-bold ${size ? 'is-size-6' : 'is-size-7'}`}
      {...otherProps}>
      {heading}
    </h4>
  </Wrapper>
);

export default FooterHeading;
