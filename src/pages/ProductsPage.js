import styled from "styled-components";
import PageHero from "../components/pageHero";
import Filters from "../components/filters";
import Sort from "../components/sort";
import ProductList from "../components/productList";
import { useFilterContext } from "../context/filterContext";

const ProductsPage = () => {
  const { filtered_products } = useFilterContext();
  return (
    <main>
      <PageHero title='products' />
      <Wrapper>
        <div className='section-center'>
          <Filters />
          <div>
            <Sort />
            {filtered_products.length < 1 ? (
              <h3 style={{ textAlign: "center", marginTop: "4rem" }}>
                Sorry, no product matched your search
              </h3>
            ) : (
              <ProductList />
            )}
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  @media screen and (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 300px 1fr;
    }
  }
`;

export default ProductsPage;
