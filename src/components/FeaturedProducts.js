import { useEffect, useState } from "react";
import styled from "styled-components";
import Swipper from "./swipper";
import { useProductsContext } from "../context/productsContext";
import FeaturedList from "./FeaturedList";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { products_loading } = useProductsContext();
  const [realWidth, setRealWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setRealWidth(window.innerWidth);
  };

  useEffect(() => {
    const listener = window.addEventListener("resize", handleResize);
  }, []);

  if (products_loading === true) {
    return (
      <Wrapper>
        <div className='section-center'>
          <h1 className='section-title'>
            {" "}
            <span>/</span> Featured Products
          </h1>
          <div className='underline'></div>
          <div class='lds-roller'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='section-center'>
        <h1 className='section-title'>
          {" "}
          <span>/</span> Featured Products
        </h1>
        <div className='underline'></div>
        {realWidth > 992 && (
          <div className='swipper-container'>
            <Swipper />
          </div>
        )}
        {realWidth < 992 && <FeaturedList />}
        <Link to='/products' className='btn'>
          All Products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 80vh;
  background: var(--clr-grey-10);
  padding-bottom: 4rem;
  .btn {
    display: block;
    width: 10rem;
    margin: 0 auto;
    font-size: 1.5rem;
    padding: 0.25rem;
    color: var(--clr-primary-5);
    margin-top: 2rem;
    cursor: pointer;
    transition: var(--transition);
    border-bottom: 2px solid transparent;
    text-align: center;
  }
  .btn:hover {
    color: var(--clr-primary-7);
    border-bottom: 2px solid var(--clr-primary-7);
  }
`;

export default FeaturedProducts;
