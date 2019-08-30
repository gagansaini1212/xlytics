import React from 'react';
import styled from 'styled-components';

import TeamMember from './TeamMember';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  .title {
    margin-bottom: 2rem;
  }
`;

const team = [
  {
    id: 1,
    title: 'Perminder Klair',
    subtitle: 'Founder & CEO',
    image: '/images/team/perminder.jpeg',
  },
  {
    id: 2,
    title: 'Nasim Akthar',
    subtitle: 'Lead Developer',
    image: '/images/team/nasim.jpeg',
  },
  {
    id: 3,
    title: 'Gagan Saini',
    subtitle: 'Front-End Developer',
    image: '/images/team/gagan.jpeg',
  },
  {
    id: 4,
    title: 'Balwinder Klair',
    subtitle: 'Marketing Strategist',
    image: '/images/team/balwinder.jpg',
  },
  {
    id: 5,
    title: 'Sourav Arya',
    subtitle: 'Manager',
    image: '/images/team/sourav.jpg',
  },
  {
    id: 5,
    title: 'Simranpreet Baweja',
    subtitle: 'Advisor',
    image: '/images/team/simran.jpg',
  },
];

const Team = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        Meet Our Team
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
