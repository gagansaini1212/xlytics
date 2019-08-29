import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Helmet title="NOT FOUND" />
    <div className="container">
      <h1 className="title">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
