import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { useUserContext } from "../context/userContext";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser } = useUserContext();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Wrapper>
        <div>
          <div className='total-container'>
            <h4 style={{ marginTop: "0" }}>
              subtotal : <span>{formatPrice(total_amount)}</span>{" "}
            </h4>
            <h4 className='fee'>
              shipping fee : <span>{formatPrice(shipping_fee)}</span>{" "}
            </h4>
            <hr />
            <h4 style={{ fontWeight: "700" }}>
              order total :{" "}
              <span>{formatPrice(total_amount + shipping_fee)}</span>{" "}
            </h4>
          </div>
          {myUser ? (
            <Link to='/checkout'>
              <button className='shopping-btn checkout'>Checkout</button>
            </Link>
          ) : (
            <button
              className='shopping-btn checkout'
              onClick={loginWithRedirect}
            >
              Login
            </button>
          )}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.article`
  margin: 0 auto;

  h4 {
    display: grid;
    grid-template-columns: 15rem auto;
    margin-top: 1rem;
  }
  .shopping-btn.checkout {
    width: 100%;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-top: 1rem;
  }
  .shopping-btn.checkout:hover {
    transform: scale(1);
  }
  .total-container {
    border: 1px solid var(--clr-primary-5);
    padding: 2rem;
  }
  .fee {
    margin-bottom: 1rem;
    font-weight: 300;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    /* width: var(--max-width); */
  }
`;
export default CartTotal;
