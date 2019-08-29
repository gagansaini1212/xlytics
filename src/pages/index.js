import React from 'react';
import { Link } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import Categories from '../components/Categories';
import HowWeWork from '../components/HowWeWork';
import AboutApp from '../components/AboutApp';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Packrs"
          description="Deliver anything, anywhere, anytime"
          url={config.siteUrl}
          image={config.image}
        />
        <HomeHero />
        <Categories />
        <HowWeWork />
        <AboutApp />
        <Partners />
        <Reviews />
      </Layout>
    );
  }
}
