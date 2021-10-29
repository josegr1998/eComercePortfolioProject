import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/data";
import CartBtns from "./cartBtns";
import { useProductsContext } from "../context/productsContext";
import { useUserContext } from "../context/userContext";
import comfy from "../assets/compfy-o.png";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      <aside className={`sidebar section-center ${isSidebarOpen && `show`}`}>
        <div className='sidebar-header'>
          <img src={comfy} alt='main icon' className='logo' />
          <FaTimes className='close-sidebar' onClick={closeSidebar} />
        </div>
        <div className='links-container'>
          {links.map((link) => {
            return (
              <Link
                to={`${link.path}`}
                key={link.id}
                className='link'
                onClick={closeSidebar}
              >
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
        <CartBtns />
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .logo {
    justify-self: center;
    max-width: 20rem;
    width: 15rem;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background: var(--clr-grey-9);
    transform: translateY(-100%);
    transition: var(--transition);
  }
  .show {
    transform: translateY(0);
  }
  .close-sidebar {
    font-size: 2.5rem;
    transition: var(--transition);
    margin-right: 1rem;
  }
  .close-sidebar:hover {
    color: red;
    transform: rotateZ(-90deg);
    cursor: pointer;
  }
  .links-container {
    margin-top: 2rem;
  }
  .link {
    display: block;
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
  }
  .link:hover {
    background: var(--clr-primary-5);
    color: white;
    cursor: pointer;
    padding-left: 2.5rem;
  }
  .cart-btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 100%;
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
