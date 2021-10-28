import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "../assets/main-img.jpeg";
import secondary from "../assets/secondary-picture.jpeg";

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='info-container'>
        <h1>
          <span>Perfect</span> for your house <span>!</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          porro reiciendis laudantium laboriosam similique facilis iusto minima,
          labore, voluptate voluptatum voluptas beatae ducimus quo aperiam,
          magnam non quam commodi fuga.
        </p>
        <Link to='/products' className='shop-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={image} alt='' className='main-img' />
        <img src={secondary} alt='' className='secondary-img' />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .info-container {
    h1 {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    span {
      color: var(--clr-primary-5);
    }
  }
  .img-container {
    display: none;
  }
  .shop-btn {
    display: block;
    width: 10rem;
    margin: 2rem auto;
    font-size: 1.5rem;
    color: white;
    background: var(--clr-primary-5);
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .shop-btn:hover {
    border-radius: var(--radius);
  }
  p {
    max-width: 55rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    height: calc(100vh - 4rem);
    h1 {
      text-align: center;
    }
    display: flex;
    align-items: center;
    gap: 2rem;
    .img-container {
      display: block;
    }
    .main-img {
      height: 40rem;
      width: 35rem;
      border-radius: var(--radius);
      position: relative;
    }
    .secondary-img {
      position: absolute;
      width: 30rem;
      height: 15rem;
      bottom: 9px;
      right: 0;
      transform: translateX(-5%);
    }
  }
`;

export default Hero;
