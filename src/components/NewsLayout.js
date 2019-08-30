/* eslint jsx-a11y/heading-has-content: 0 */

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import PageLayout from './PageLayout';
import AppDownload from './AppDownload';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <PageLayout>
      <div className="page-content">
        <h1 className="title is-1 has-text-centered has-text-weight-bold">
          {mdx.frontmatter.title}
        </h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
      <AppDownload />
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
