import { useFilterContext } from "../context/filterContext";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
const GridView = () => {
  const { filtered_products } = useFilterContext();

  return (
    <Wrapper>
      {filtered_products.map((product) => {
        return (
          <article
            className='single-item'
            key={product.id}
            style={{ marginBottom: "2rem" }}
          >
            <div
              className='slider-img-container'
              style={{
                position: "relative",
                background:
                  "linear-gradient(90deg, rgba(5,3,28,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9699230033810399) 100%, rgba(5,3,28,0.6449930313922444) 100%, rgba(0,0,0,1) 100%)",
                borderRadius: "0.25rem",
              }}
            >
              <img
                src={product.image}
                style={{
                  height: "10rem",
                  borderRadius: "0.25rem",
                }}
                className='product-img'
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
              <h3 style={{ fontSize: "1.2em" }}>{product.name}</h3>
              <p style={{ fontSize: "1.2rem", color: "var(--clr-primary-5)" }}>
                {formatPrice(product.price)}
              </p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  column-gap: 1rem;
  .product-img {
    transition: var(--transition);
  }
  .product-img:hover {
    opacity: 0.3; /*try to figure out a way arround this lol */
  }
`;

export default GridView;
