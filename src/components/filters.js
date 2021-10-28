import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { getUniqueValues } from "../utils/helpers";
import { formatPrice } from "../utils/helpers";
import { BsCheck } from "react-icons/bs";
import { boilerPlate } from "../utils/data";

const Filters = () => {
  const {
    all_products,
    updateFilters,
    clearFilters,
    filters: {
      text,
      category,
      color,
      company,
      price,
      max_price,
      min_price,
      shipping,
    },
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <article className='filter-container'>
        {/*search */}
        <div className='form-control'>
          <input
            type='text'
            name='text'
            className='search-input'
            placeholder='Search'
            value={text}
            onChange={updateFilters}
          />
        </div>
        {/*category */}
        <div className='categories'>
          <h5>categories</h5>
          {categories.map((c) => {
            return (
              <button
                name='category'
                type='button'
                className={`category-btn ${c === category && `active`}`}
                onClick={updateFilters}
              >
                {c}
              </button>
            );
          })}
        </div>
        {/*companies */}

        <div className='companies'>
          <h5 style={{ marginBottom: "0.25rem" }}>company</h5>
          <select
            name='company'
            value={company}
            id=''
            className='company'
            onChange={updateFilters}
          >
            {companies.map((c) => {
              return <option value={c}>{c}</option>;
            })}
          </select>
        </div>

        {/*colors */}
        <div className='colors'>
          <h5>colors</h5>
          <div className='colors-container'>
            {colors.map((c) => {
              if (c === "all") {
                return (
                  <button
                    name='color'
                    className={`color-btn ${color === "all" && `active`}`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {c}
                  </button>
                );
              } else {
                return (
                  <button
                    style={{ background: c }}
                    className={`color-circle ${c === color && `active`}`}
                    data-color={c}
                    onClick={updateFilters}
                    name='color'
                  >
                    {color === c && <BsCheck className='color-icon' />}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div className='price'>
          <h5 style={{ marginBottom: "0.1rem", marginTop: "1rem" }}>price</h5>
          <p>{formatPrice(price)}</p>
          <input
            type='range'
            name='price'
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
        {/*shipping */}
        <div className='shipping'>
          <label htmlFor='shipping'>Free shipping</label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onClick={updateFilters}
          />
        </div>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .filter-container {
    position: sticky;
    top: 2rem;
  }
  .search-input {
    font-size: 1rem;
    padding: 0.35rem;
    border: transparent;
    background: var(--clr-grey-9);
  }
  h5 {
    margin: 0.75rem 0;
    font-weight: bold;
  }
  .category-btn {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    border: transparent;
    background: transparent;
    text-transform: capitalize;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  .category-btn.active {
    border-bottom: 2px solid var(--clr-primary-5);
  }

  .company {
    font-size: 1rem;
    padding: 0.25rem;
    background-color: var(--clr-grey-9);
    border: transparent;
    text-transform: capitalize;
  }
  .colors-container {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }

  .color-circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    opacity: 0.5;
    transition: var(--transition);
    border: transparent;
  }
  .color-icon {
    color: white;
  }
  .color-circle.active {
    opacity: 1;
  }
  .color-circle:hover {
    opacity: 1;
  }
  .color-btn {
    font-size: 1rem;
    border: transparent;
    background: transparent;
    text-transform: capitalize;
    cursor: pointer;
  }
  .color-btn.active {
    border-bottom: 2px solid var(--clr-primary-5);
  }
  .shipping {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .clear-btn {
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 7rem;
    font-size: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border: transparent;
    background: #ff7f7f;
    color: white;
    border-radius: var(--radius);
    cursor: pointer;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .clear-btn:hover {
    background: #ff3232;
  }
`;

export default Filters;
