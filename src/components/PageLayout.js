/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Layout from './Layout';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  h1 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export default function PageTemplate({ children }) {
  return (
    <Layout>
      <Container className="container">
        <MDXProvider
          components={{
            h1: props => <h1 className="title is-1" {...props} />,
            h2: props => <h2 className="title is-2" {...props} />,
            h3: props => <h3 className="title is-3" {...props} />,
            p: props => <p className="" {...props} />,
          }}
        >
          {children}
        </MDXProvider>
      </Container>
    </Layout>
  );
}
