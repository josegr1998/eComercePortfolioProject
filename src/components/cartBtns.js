import styled from "styled-components";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { useCartContext } from "../context/cartContext";
import { useProductsContext } from "../context/productsContext";
import { useUserContext } from "../context/userContext";

const CartBtns = () => {
  const { total_items, clearCart } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link className='bag-btn' to='/cart' onClick={closeSidebar}>
        <BsBag className='bag-icon' />
        <p className='cart-value'>{total_items}</p>
      </Link>
      {myUser ? (
        <div className='log'>
          <btn
            className='login-btn'
            onClick={() => {
              logout({ returnTo: window.location.origin });
              clearCart();
            }}
          >
            <AiOutlineUserDelete className='user-icon' />
            <p>Logout</p>
          </btn>
          <img src={myUser.picture} alt='' className='user-pic' />
        </div>
      ) : (
        <btn className='login-btn' onClick={loginWithRedirect}>
          <AiOutlineUserAdd className='user-icon' />
          <p>Login</p>
        </btn>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .log {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .user-pic {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  /* display: flex; at 992px*/
  /*en lugar de darle el display flex de aca se lo doy desde el componente donde lo llamo.
  Al principio lo puedo hacer todo desde aca pero despues configuro cuando lo muestro desde el componente
  donde lo invoco (le doy display flex a partir de determinado with,etc...) */
  gap: 1rem;
  align-items: center;

  .bag-btn {
    position: relative;
    /* background: blue; */
    border: transparent;
    background: transparent;
    color: black;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .bag-btn:hover {
    color: var(--clr-primary-5);
  }
  .bag-icon {
    font-size: 1.9rem;
  }
  .cart-value {
    position: absolute;
    top: -2px;
    right: -5px;
    background: var(--clr-primary-5);
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    font-size: 13px;
    color: white;
  }
  .login-btn {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.5rem;
    transition: var(--transition);
  }
  .login-btn:hover {
    color: var(--clr-primary-5);
    cursor: pointer;
  }
  .user-icon {
    font-size: 1.9rem;
  }
`;

export default CartBtns;
