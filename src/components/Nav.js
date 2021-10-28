import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/data";
import CartBtns from "./cartBtns";
import { useProductsContext } from "../context/productsContext";
import { useUserContext } from "../context/userContext";
import comfy from "../assets/compfy-o.png";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <Wrapper>
      <div className='section-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={comfy} className='logo' alt='' style={{ with: "2rem" }} />
          </Link>

          <FaBars className='nav-toggle' onClick={openSidebar} />
        </div>
        {/*links */}
        <div className='links-container'>
          {links.map((link) => {
            return (
              <Link key={link.id} to={`${link.path}`} className='link'>
                {link.name}
              </Link>
            );
          })}
          {myUser && (
            <Link to='/checkout' className='link'>
              Checkout
            </Link>
          )}
        </div>

        {/*cart-btns */}
        <CartBtns />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 0.35rem;
  height: 4rem;
  display: grid;
  place-items: center;
  /*establecer el height del nav hace todo mas facil */

  /*add when scrolling down and making it fixed */
  border-bottom: 2px solid transparent;
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    /* width: 70%; */
    max-width: 20rem;
    /* height: 3rem; */
  }
  .nav-toggle {
    font-size: 1.6rem;
    cursor: pointer;
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .nav-toggle:hover {
    color: var(--clr-primary-8);
    transform: scale(1.05);
  }
  /*links */
  .links-container {
    display: none;
  }
  .link {
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .link:hover {
    color: var(--clr-primary-5);
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .links-container {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      font-size: 1.5rem;
    }
    .section-center {
      display: flex;
      justify-content: space-between;
    }
    .logo {
      width: 20rem;
    }
    .cart-btn-wrapper {
      display: flex;
    }
  }
`;

export default Nav;
