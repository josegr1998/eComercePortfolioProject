import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = () => {
  const { filtered_products } = useFilterContext();
  return (
    <Wrapper>
      {filtered_products.map((product) => {
        const { name, price, id, description, image } = product;
        return (
          <article className='single-product' key={id}>
            <img src={image} alt='just an image' />
            <div className='info-container'>
              <h4>{name}</h4>
              <p className='price'>{formatPrice(price)}</p>
              <p className='desc'>{description.slice(0, 150)}...</p>

              <Link to={`/products/${id}`} className='details-btn'>
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-bottom: 2rem;
  .single-product {
    margin-top: 2rem;
  }
  img {
    height: 20rem;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .price {
    margin-bottom: 1rem;
    color: var(--clr-primary-5);
  }
  .desc {
    margin-bottom: 1rem;
  }
  .details-btn {
    margin: 0 auto;
    display: block;
    width: 7rem;
    text-align: center;
    font-size: 1.2rem;
    transition: var(--transition);
    color: var(--clr-grey-1);
  }
  .details-btn:hover {
    cursor: pointer;
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 1170px) {
    .single-product {
      display: grid;
      grid-template-columns: 25rem auto;
      grid-template-rows: 20rem;
      column-gap: 2rem;
      row-gap: 2rem;
    }
  }
`;

export default ListView;
