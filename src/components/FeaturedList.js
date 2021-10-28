import React from "react";
import { useProductsContext } from "../context/productsContext";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { formatPrice } from "../utils/helpers";

const FeaturedList = () => {
  const { featuredProducts } = useProductsContext();

  return (
    <>
      {featuredProducts.map((product) => {
        return (
          <article style={{ marginTop: "2rem" }}>
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

            <div
              className='information-container'
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <h3 style={{ fontSize: "1.7rem" }}>{product.name}</h3>
              <p style={{ fontSize: "1.2rem", color: "var(--clr-primary-5)" }}>
                {formatPrice(product.price)}
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default FeaturedList;
