import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import HeroCard from "../herocard/HeroCard";
import "swiper/css";
import "swiper/css/pagination";
import './swipercomp.css'

const SwiperComp = ({ data }) => {
  return (
    <div className="container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        grabCursor
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1024: { 
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1440: { 
            slidesPerView: 3,
            spaceBetween: 5
          },
        }}
      >
        {data.map((book, indx) => (
          <SwiperSlide className="p-2 h-100 " key={'swiper-' + indx}>
            <HeroCard title={book.title} img={book.img} price={book.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
