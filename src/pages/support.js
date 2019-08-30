import React from 'react';
import Seo from '../components/Seo';

import Layout from '../components/Layout';

class Support extends React.Component {
  componentDidMount() {
    window.location.replace('https://packrs.freshdesk.com/support/tickets/new');
  }

  render() {
    return (
      <Layout>
        <Seo title="Support" />
        <section className="section">
          <div className="container">
            <p>Loading ...</p>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Support;
