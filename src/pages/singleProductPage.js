import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { single_product_url } from "../utils/data";
import { useProductsContext } from "../context/productsContext";
import styled from "styled-components";
import PageHero from "../components/pageHero";
import ProductSwipper from "../components/productSwipper";
import Stars from "../components/stars";
import AddToCart from "../components/addToCart";
import { formatPrice } from "../utils/helpers.js";

const SingleProductPage = () => {
  const { single_product, single_product_loading, fetchSingleProduct } =
    useProductsContext();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, []);

  if (single_product_loading) {
    return (
      <Wrapper className='loading-wrapper'>
        <div className='section-center.wrapper'>
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
      <PageHero title={single_product.name} product={true} />
      <div className='section-center'>
        <button onClick={() => history.goBack()} className='btn'>
          Go Back
        </button>
        <div className='all-container'>
          <div className='swiper-container'>
            <ProductSwipper />
          </div>
          <div className='content-container'>
            <div className='content'>
              <h1>{single_product.name}</h1>
              <Stars
                stars={single_product.stars}
                reviews={single_product.reviews}
              />
              <p className='price'>{formatPrice(single_product.price)}</p>
            </div>
            <p className='desc'>{single_product.description}</p>

            <p className='info'>
              <span>Aviable : </span>
              {single_product.stock > 0
                ? `In stock (${single_product.stock}) left`
                : "out of stock"}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {single_product.id}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {single_product.company}
            </p>
            <hr />
            {single_product.stock > 0 && <AddToCart />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-bottom: 2rem;
  .lds-roller {
    margin-top: 10rem;
  }
  .swiper-wrapper {
    height: 50vh;
  }
  .swiper-container-thumbs {
    height: 10vh;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .btn {
    font-size: 1.7rem;
    background: transparent;
    margin-bottom: 2rem;
    border: transparent;
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    color: var(--clr-primary-5);
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .price {
    font-size: 1.2rem;
    color: var(--clr-primary-5);
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    margin-top: 2rem;
    align-items: center;
    span {
      font-weight: 700;
    }
  }
  .desc {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 992px) {
    .all-container {
      display: flex;
      gap: 3rem;
    }
    .swiper-wrapper {
      height: 60vh;
    }
  }
`;
export default SingleProductPage;
