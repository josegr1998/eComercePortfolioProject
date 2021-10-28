import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3 style={{ color: `var(--clr-grey-1)` }}>
          Sorry, the page you tried cannot be found
        </h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--clr-primary-5);
  height: calc(100vh - 11rem);
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    color: white;
    display: block;
    margin: 0 auto;
    font-size: 1.2rem;
    width: 10rem;
    background: var(--clr-primary-2);
    padding: 0.5rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
  }
`;

export default ErrorPage;
