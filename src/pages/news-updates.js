import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import NewsItem from '../components/NewsItem';

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Helmet title="News & Updates" />
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-weight-bold">
          News & Updates
        </h2>
        <div className="columns is-centered">
          <div className="column is-four-fifths">
            {posts.map(({ node: post }) => (
              <NewsItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsUpdates;

export const pageQuery = graphql`
  query newsIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
