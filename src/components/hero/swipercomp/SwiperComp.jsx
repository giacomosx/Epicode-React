import React from "react";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import HeroCard from "../herocard/HeroCard";
import "swiper/css";
import "swiper/css/pagination";
import "./swipercomp.css";

const SwiperComp = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 5,
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
    <swiper-container init="false" ref={swiperRef}>
      {data.map((book, indx) => (
        <swiper-slide className="p-2 h-100 " key={"swiper-" + indx}>
          <HeroCard title={book.title} img={book.img} price={book.price} />
        </swiper-slide>
      ))}
    </swiper-container>
  );
};

export default SwiperComp;
