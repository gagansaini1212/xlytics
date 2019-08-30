import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    title: 'Dashboard',
    image: '/images/app-screens/screen-1.png',
  },
  {
    id: 2,
    title: 'Delivery Details',
    image: '/images/app-screens/screen-2.png',
  },
  {
    id: 3,
    title: 'Wallet',
    image: '/images/app-screens/screen-3.png',
  },
  {
    id: 4,
    title: 'Location Select',
    image: '/images/app-screens/screen-4.png',
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
  .slick-slider {
    width: 328px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 18px;
    padding: 8px;
    border-radius: 61px;
    ::before {
      content: '';
      background-image: url(/images/iphone-mokeup.png);
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: 1;
      background-size: contain;
      background-repeat: no-repeat;
    }
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
  width: 300px;
  height: 640px;
  border-radius: 50px;
`;

const AboutApp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Section className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered has-text-weight-bold">
          Have you got the Packrs?
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
