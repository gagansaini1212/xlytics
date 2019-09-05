import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    margin: 3rem;
  }
`;

const HelpText = styled.p`
  margin-top: 1.5rem;
  font-size: 18px;
  line-height: 1.8rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  padding: 0rem 5.5rem;
`;

const WorkStep = ({ img, alt, title, subtitle, btnText }) => (
  <Wrapper className="column has-text-centered">
    <img src={img} alt={alt} />
    <h1 className="title is-3">{title}</h1>
    <HelpText>{subtitle}</HelpText>
    <a className="button is-primary is-large is-rounded has-text-weight-bold">
      {btnText}
    </a>
  </Wrapper>
);

export default WorkStep;
