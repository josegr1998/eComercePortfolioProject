import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductsContext } from "../context/productsContext";

// Import Swiper styles
import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { formatPrice } from "../utils/helpers";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Swipper() {
  const { featuredProducts } = useProductsContext();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        className='mySwiper'
      >
        {featuredProducts.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <div
                className='slider-img-container'
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(90,169,230,1) 100%, rgba(0,212,255,1) 100%)",
                  borderRadius: "0.25rem",
                }}
              >
                <img
                  src={product.image}
                  style={{
                    height: "20rem",
                    borderRadius: "0.25rem",
                    opacity: "0.5",
                  }}
                />
                <Link to={`/products/${product.id}`}>
                  <BsSearch
                    className='slide-search-btn'
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "50%",
                      width: "2.5rem",
                      height: "2.5rem",
                      transform: "translateY(-50%) translateX(50%)",
                    }}
                  />
                </Link>
              </div>

              <div className='information-container'>
                <h3 style={{ fontSize: "1.7rem" }}>{product.name}</h3>
                <p
                  style={{ fontSize: "1.2rem", color: "var(--clr-primary-5)" }}
                >
                  {formatPrice(product.price)}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
