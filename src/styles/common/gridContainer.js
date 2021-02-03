import styled from "styled-components";

const GridContainer = styled.section`
  padding: 1.5em 0;
  grid-template-columns: minmax(auto, 100%);
  display: grid;
  justify-content: center;

  & .grid-item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
`;

export default GridContainer;
