import { useFilterContext } from "../context/filterContext";
import GridView from "./gridView";
import ListView from "./listView";
import styled from "styled-components";

const ProductList = () => {
  const { gridView } = useFilterContext();

  return (
    <Wrapper>
      {gridView && <GridView />}
      {!gridView && <ListView />}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ProductList;
