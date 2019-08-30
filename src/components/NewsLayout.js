/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PageLayout from './PageLayout';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <PageLayout>
      <h1 className="title is-1 has-text-centered has-text-weight-bold">
        {mdx.frontmatter.title}
      </h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query NewsPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
