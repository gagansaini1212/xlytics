import React from 'react';
import styled from 'styled-components';

import PartnerItem from './PartnerItem';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const items = [
  {
    id: 1,
    title: 'Become a Rider',
    details:
      'Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts.',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
    link: 'https://airtable.com/shrNYyLynebosW850',
  },
  {
    id: 2,
    title: 'Become a Partner',
    details:
      'Partner with Packrs and reach more customers than ever. We handle delivery, so you can focus on the business.',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
    link: 'https://airtable.com/shrzgjKLLyiwUVRA0',
  },
];

const Partners = () => (
  <Section className="section" id="partners">
    <div className="container">
      <div className="columns">
        {items.map(item => (
          <PartnerItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </Section>
);

export default Partners;
