import { useState } from "react";

import styled from "styled-components";

import { FiMinus, FiPlus } from "react-icons/fi";
import { useProductsContext } from "../context/productsContext";

const AmountBtns = (props) => {
  const { increase, decrease, amountIndex } = props;

  return (
    <Wrapper>
      <div className='info'>
        <span>Amount :</span>
        <div className='container'>
          <FiMinus onClick={decrease} className='amount-icon' />
          <p>{amountIndex}</p>
          <FiPlus onClick={increase} className='amount-icon' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  p {
    font-size: 1.5rem;
  }
  .amount-icon:hover {
    cursor: pointer;
  }
`; //SIEMRPE PERO SIEMPRE PONER LAS COMILLAS AL REENDERIZAR EL COMPONENTE O TIRA UN ERROR QUE NADA QUE VER

export default AmountBtns;
