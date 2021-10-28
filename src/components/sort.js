import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const {
    filtered_products,
    sort,
    gridView,
    setGridView,
    setListView,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          className={`view-btn ${gridView && "active"}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`view-btn ${!gridView && "active"}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{filtered_products.length} products found</p>
      <hr style={{ color: "var(--clr-primary-5)" }} />
      <form>
        <label htmlFor='sort' style={{ fontSize: "1rem" }}>
          Sort By
        </label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-container {
    display: flex;
    gap: 0.5rem;
  }
  .view-btn {
    font-size: 1.2rem;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    background: transparent;
    border: 1px solid var(--clr-primary-5);
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .view-btn.active {
    background: var(--clr-primary-5);
    color: white;
  }
  .view-btn:hover {
    background: var(--clr-primary-5);
    color: white;
  }
  .sort-input {
    font-size: 1rem;
    padding: 0.25rem;
    border: 2px solid var(--clr-primary-5);
  }
  form {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    gap: 1rem;
    form {
      margin-top: 0;
    }
  }
`;
export default Sort;
