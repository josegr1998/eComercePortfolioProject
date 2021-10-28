import PageHero from "../components/pageHero";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import CartItem from "../components/cartItem";
import { Link } from "react-router-dom";
import { columns } from "../utils/data";
import CartTotal from "../components/cartTotal";

const CartPage = () => {
  const { cart, clearCart } = useCartContext();
  const testItem = cart[0];
  if (cart.length < 1) {
    return (
      <main>
        <Empty>
          <div className='container'>
            <h1>Your Cart Its Empty!</h1>
            <Link
              className='shopping-btn'
              to='/products'
              style={{ margin: "2rem auto" }}
            >
              continue shopping
            </Link>
          </div>
        </Empty>
      </main>
    );
  }
  return (
    <Wrapper>
      <PageHero title='Cart' />
      <div className='section-center'>
        <div className='info-container'>
          {columns.map((item) => {
            return <h4 className='heading-4'>{item}</h4>;
          })}
        </div>

        <div className='products'>
          {cart.map((item) => {
            const { amount } = item;
            return <CartItem item={item} />;
          })}
        </div>
        <hr />
        <div className='btn-container'>
          <Link className='shopping-btn' to='/products'>
            continue shopping
          </Link>
          <button className='shopping-btn clear' onClick={clearCart}>
            clear cart
          </button>
        </div>
        <CartTotal />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mini-price {
    font-size: 1.2rem;
    color: var(--clr-primary-5);
  }
  .color {
    border-radius: 50%;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .shopping-btn {
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
  .product-container {
    display: grid;
    grid-template-columns: 250px 1fr 1fr;
    /*fijar que puedo hacer con el width de las columnas */
    column-gap: 1rem;
    /* justify-items: center; */
    align-items: center;
    margin-top: 2rem;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
  .shopping-btn:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: var(--clr-primary-5);
  }
  .shopping-btn.clear {
    background: #ff4d4d;
  }
  .shopping-btn.clear:hover {
    background: #ff0000;
  }
  .info-container {
    margin: 0 auto;
    grid-template-columns: 350px 1fr 1fr 1fr;
    justify-items: center;
    text-transform: capitalize;
    display: none;
  }
  .price,
  .amount-btns,
  .subTotal {
    justify-self: center;
  }

  .subTotal {
    display: none;
    color: var(--clr-primary-5);
  }
  .heading-4 {
    border-right: 2px solid var(--clr-primary-5);
    padding-right: 2rem;
    font-weight: 500;
  }
  .trash-btn {
    transition: var(--transition);
    font-size: 1.2rem;
  }
  .trash-btn:hover {
    color: red;
    transform: scale(1.1);
    cursor: pointer;
  }
  .price {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .info-container {
      display: grid;
    }
    .price {
      display: block;
    }
    .main-info {
      display: grid;
      grid-template-columns: 120px 1fr;
      align-items: center;
      gap: 1rem;
    }
    .product-container {
      display: grid;
      grid-template-columns: 350px 1fr 1fr 1fr auto;
      /* justify-items: center; */
      align-items: center;
      margin-top: 2rem;
      text-transform: capitalize;
      margin-bottom: 2rem;
    }
    .subTotal {
      display: block;
    }
    .mini-price {
      display: none;
    }
  }
`;

const Empty = styled.section`
  height: calc(100vh - 11rem);
  display: grid;
  place-items: center;
  .shopping-btn {
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
  .shopping-btn:hover {
    cursor: pointer;
    transform: scale(1.05);
    background: var(--clr-primary-5);
  }
`;
export default CartPage;
