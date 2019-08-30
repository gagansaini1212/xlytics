import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Categories from '../components/Categories';
import HowWeWork from '../components/HowWeWork';
import AboutApp from '../components/AboutApp';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';

const TopContainer = styled.div`
  background-image: url('/images/hero-bg.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: top;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout hideHeader>
        <Seo
          title="Deliver anything, anywhere, anytime"
          description="Packrs Delivery"
          url={config.siteUrl}
          image={config.image}
        />
        <TopContainer>
          <Header />
          <HomeHero />
        </TopContainer>
        <Categories />
        <AboutApp />
        <HowWeWork />
        <Partners />
        <Reviews />
      </Layout>
    );
  }
}
