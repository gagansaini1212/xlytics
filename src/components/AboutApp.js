import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    title: 'screen 1',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
  {
    id: 2,
    title: 'screen 2',
    image: 'https://bulma.io/images/placeholders/1280x960.png',
  },
];

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-image: url('/images/about-app-bg.svg');
  background-repeat: no-repeat;
  background-position-y: bottom;
  h2.title {
    margin-bottom: 3.2rem;
  }
  .slick-slide {
    > div {
      > div {
        outline: none !important;
      }
    }
  }
`;

const Slide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 270px;
  height: 450px;
`;

const AboutApp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-weight-bold">
          Using Packrs
        </h2>
        <Slider {...settings}>
          {slides.map(item => (
            <div key={item.id}>
              <Slide>
                <Image src={item.image} alt={item.title} />
              </Slide>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default AboutApp;
