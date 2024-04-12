import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swipercomp.css'
import HeroCard from "../herocard/HeroCard";

const SwiperComp = ({ category }) => {
  return (
    <div className="container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: { 
            slidesPerView: 3
          },
        }}
      >
        {category.map((book) => (
          <SwiperSlide className="p-1 h-100 " key={`swiperBook-${book.asin}`}>
            <HeroCard title={book.title} img={book.img} price={book.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComp;
