import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductsContext } from "../context/productsContext";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function ProductSwipper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { single_product } = useProductsContext();

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className='mySwiper2'
      >
        {single_product.images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        className='mySwiper'
      >
        {single_product.images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
