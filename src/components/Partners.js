import React from 'react';
import styled from 'styled-components';

import PartnerItem from './PartnerItem';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Partners = () => (
  <Section className="section" id="partners">
    <div className="container">
      <div className="columns">
        <PartnerItem title="Become a Rider" />
        <PartnerItem title="Become a Partner" />
      </div>
    </div>
  </Section>
);

export default Partners;
