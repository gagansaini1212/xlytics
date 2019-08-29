import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  h1 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }
  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export default function PageTemplate({ children }) {
  return (
    <Layout>
      <Container className="container">{children}</Container>
    </Layout>
  );
}
