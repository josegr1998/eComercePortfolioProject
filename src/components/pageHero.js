import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = (props) => {
  const { title, product } = props;

  return (
    <Wrapper>
      <div className='section-center'>
        <h2>
          <Link to='/' className='link'>
            Home
          </Link>
          {product && (
            <Link to='/products' className='link'>
              <span> / </span>
              products
            </Link>
          )}
          <span> / </span>
          {title}
        </h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  min-height: 20vh;
  display: grid;
  align-items: center;
  background: var(--clr-primary-1);
  margin-bottom: 4rem;
  span {
    color: var(--clr-primary-5);
  }
  h2 {
    color: white;
  }
  .link {
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .link:hover {
    color: var(--clr-primary-9);
  }
`;

export default PageHero;
