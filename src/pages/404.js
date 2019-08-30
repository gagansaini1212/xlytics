import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/Layout';
import AppDownload from '../components/AppDownload';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet title="NOT FOUND" />
    <section className="section">
      <Container className="container">
        <h1 className="title">NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </section>
    <AppDownload />
  </Layout>
);

export default NotFoundPage;
