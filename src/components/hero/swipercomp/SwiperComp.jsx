import React from "react";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import HeroCard from "../herocard/HeroCard";

import "./swipercomp.css";

const SwiperComp = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      injectStyles: [
        `.swiper-button-prev,
    .swiper-button-next {
        color: #7949FF ;
    }`,
      `
      .swiper-slide {
        height: 100%;
        padding: 0.5rem
      }
      `
    ,
        `
    @media only screen and (max-width: 767px) {
    
        .swiper-button-prev,
        .swiper-button-next {
            display: none;
        }
    }
      `,
      ],
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container
      init="false"
      ref={swiperRef}
      navigation="true"
    >
      {data.map((book, indx) => (
        <swiper-slide className="p-2 h-100 " key={"swiper-" + indx}>
          <HeroCard title={book.title} img={book.img} price={book.price} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default SwiperComp;
