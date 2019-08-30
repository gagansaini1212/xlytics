import React from 'react';
import styled from 'styled-components';

import TeamMember from './TeamMember';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const team = [
  {
    id: 1,
    title: 'Nasim',
    subtitle: 'ceo',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 2,
    title: 'Nasim',
    subtitle: 'ceo',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 3,
    title: 'Groceries',
    subtitle: 'ceo',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 4,
    title: 'Nasim',
    subtitle: 'ceo',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 5,
    title: 'Nasim',
    subtitle: 'ceo',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 6,
    title: 'Nasim',
    subtitle: 'ceo',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
];

const Team = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Our Team
      </h2>
      <div className="columns is-multiline">
        {team.map(item => (
          <TeamMember key={item.id} item={item} />
        ))}
      </div>
    </div>
  </Section>
);

export default Team;
