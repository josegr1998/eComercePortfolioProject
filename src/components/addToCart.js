import { useProductsContext } from "../context/productsContext";
import { useCartContext } from "../context/cartContext";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import styled from "styled-components";
import AmountBtns from "./amountBtns";
import { Link } from "react-router-dom";
const AddToCart = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [amountIndex, setAmountIndex] = useState(1);

  const {
    single_product: { colors, id, stock },
    single_product,
  } = useProductsContext();

  const { addToCart } = useCartContext();
  const mainColor = colors[colorIndex];

  const increase = () => {
    let newAmount = amountIndex + 1;
    if (newAmount > stock) {
      newAmount = stock;
    }
    setAmountIndex(newAmount);
  };

  const decrease = () => {
    let newAmount = amountIndex - 1;
    if (newAmount < 1) {
      newAmount = 1;
    }
    setAmountIndex(newAmount);
  };

  return (
    <Wrapper>
      <p className='info'>
        <span>colors :</span>
        <span className='clr-container'>
          {colors.map((color, index) => {
            return (
              <span
                className={`color ${index === colorIndex && `active`}`}
                style={{ background: color }}
                onClick={() => setColorIndex(index)}
              >
                {index === colorIndex && <BsCheck className='clr-icon' />}
              </span>
            );
          })}
        </span>
      </p>
      <AmountBtns
        increase={increase}
        decrease={decrease}
        amountIndex={amountIndex}
      />
      <Link
        to='/cart'
        className='cart-btn'
        onClick={() => addToCart(id, amountIndex, mainColor, single_product)}
      >
        Add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .color {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: var(--transition);
    opacity: 0.5;
  }
  .color.active {
    opacity: 1;
  }
  .color:hover {
    opacity: 1;
  }
  .clr-container {
    display: flex;
    gap: 0.5rem;
  }
  .clr-icon {
    color: white;
  }
  .cart-btn {
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    width: 15rem;
    padding: 0.25rem;
    background: transparent;
    border: transparent;
    padding-left: 0;
    margin-top: 2rem;
    transition: var(--transition);
    margin: 0 auto;
    display: block;
    text-align: center;
  }
  .cart-btn:hover {
    cursor: pointer;
    color: var(--clr-primary-5);
  }
`;

export default AddToCart;
