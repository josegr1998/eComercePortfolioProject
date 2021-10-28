import PageHero from "../components/pageHero";
import styled from "styled-components";
import StripeCheckout from "../components/stripeCheckout";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper>
        {cart.length < 1 ? (
          <div className='empty'>
            <div className='container'>
              <h2>your cart is empty</h2>
              <Link to='/products' className='btn'>
                fill it
              </Link>
            </div>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .empty {
    height: calc(100vh - 26rem);
  }
  .container {
    display: grid;
    place-items: center;
  }
  h2 {
    text-align: center;
  }
  .btn {
    margin: 2rem auto;
    border: transparent;
    border-radius: var(--radius);
    color: white;
    background: var(--clr-primary-3);
    width: 12rem;
    font-size: 1.2rem;
    text-align: center;
    display: block;
    margin-bottom: 2rem;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    transition: var(--transition);
  }
  .btn:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: var(--clr-primary-5);
  }
`;

export default CheckoutPage;
