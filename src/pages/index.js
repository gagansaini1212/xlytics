import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import WorkProcess from '../components/WorkProcess';
import OurWork from '../components/OurWork';
import GuideInfo from '../components/GuideInfo';

import Categories from '../components/Categories';
import HowWeWork from '../components/HowWeWork';
import AboutApp from '../components/AboutApp';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout hideHeader>
        <Seo
          title="Get anything from anywhere you want"
          description="Packrs Delivery"
          url={config.siteUrl}
          image={config.image}
        />
        <Header />
        <HomeHero />
        <WorkProcess />
        <OurWork />
        <GuideInfo />
        
        <Categories />
        <AboutApp />
        <HowWeWork />
        <Partners />
        <Reviews />
      </Layout>
    );
  }
}
