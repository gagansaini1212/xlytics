import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import FooterHeading from './FooterHeading';

const Section = styled.section`
  background-color: ${props => props.theme.darkShades};
  color: ${props => props.theme.lightShades} !important;
  .title {
    color: ${props => props.theme.lightShades} !important;
  }
  .footer {
    background-color: ${props => props.theme.darkShades};
    padding: 3rem 1.5rem 3rem;
    .content {
      margin-top: 3rem;
      p {
        color: ${props => props.theme.lightShades} !important;
      }
    }
  }
  ul {
    li {
      margin-bottom: 1.2rem;
    }
  }
  a {
    :hover {
      color: #fff;
    }
  }
  .margin {
    margin-right: 3rem;
  }
  .space {
    margin: 3rem 0rem 3rem 0rem;
  }
`;

const PolicyWrapper = styled.div`
  margin-top: 0.5rem;
`;

const Navigation = styled.div`
  display: grid;
  margin-top: 2rem;
  a {
    margin: 1.2rem 0rem;
  }
`;

const InfoContainer = styled.div`
  padding: 2rem 10rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Icons = styled.div`
  .icon {
    color: ${props => props.theme.lightShades} !important;
    font-size: 1.7rem;
    margin-right: 10px;
  }
`;

const Footer = () => (
  <Section className="section">
    <div className="container">
      <footer className="footer">
        <div className="columns">
          <div className="column is-5">
            <h1 className="title is-1">
              Let’s build something great together.
            </h1>
            <h4 className="has-text-weight-bold space">
              Copyright 2019 Sidekick Digital - All rights reserved.
            </h4>
            <FooterHeading heading="COMPANY NUMBER" />
            <PolicyWrapper className="is-flex">
              <h4 className="has-text-weight-bold margin">08897147</h4>
              <a className="has-text-weight-bold margin">Privacy Policy</a>
              <a className="has-text-weight-bold">Cookie Policy</a>
            </PolicyWrapper>
            <Navigation>
              <FooterHeading heading="NAVIGATION" />
              <a className="has-text-weight-bold">Design Sprints</a>
              <a className="has-text-weight-bold">Design Sprint Training</a>
              <a className="has-text-weight-bold">About</a>
              <a className="has-text-weight-bold">Blog</a>
            </Navigation>
          </div>
          <InfoContainer className="column">
            <FooterHeading heading="NEW BUSINESS" size />
            <a href="mailto:" className="is-size-3">
              hello@sidekickdigital.co.uk
            </a>
            <FooterHeading heading="PHONE" size />
            <a href="tel:" className="is-size-3">
              01553 750 006
            </a>
            <FooterHeading heading="ADDRESS" size />
            <h3 className="title is-4">
              Sidekick Digital King’s Lynn Innovation Centre King’s Lynn Norfolk
              PE30 5BY
            </h3>
            <FooterHeading heading="ADDRESS" size />
            <h3 className="title is-4">
              Sidekick Digital St John's Innovation Centre Cowley Road Cambridge
              CB4 0WS
            </h3>
            <FooterHeading heading="SOCIAL" size />
            <Icons>
              <a
                target="_blank"
                href={config.instagram}
                rel="noopener noreferrer">
                <span className="icon has-text-info">
                  <i className="fab fa-instagram" />
                </span>
              </a>
              <a
                target="_blank"
                href={config.instagram}
                rel="noopener noreferrer">
                <span className="icon has-text-info">
                  <i className="fab fa-twitter-square" />
                </span>
              </a>
            </Icons>
          </InfoContainer>
        </div>
      </footer>
    </div>
  </Section>
);

export default Footer;
