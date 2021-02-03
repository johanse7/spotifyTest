import styled from "styled-components";
import { fontSizes, device } from "../../styles/base/variables";
import { grayscale } from "../../styles/base/colors";

const GridContainer = styled.section`
  padding: 1.5em 0;
  grid-template-columns: minmax(auto, 100%);
  display: grid;
  justify-content: center;

  & .grid-item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
    justify-content: center;
    ${device.desktop(`
       grid-template-columns: 1fr 1fr;
     `)};
  }

  & .not-results {
    color: ${grayscale.graylight};
    font-size: ${fontSizes.eigthSize};
    margin: 0;
    margin: auto 0;
    display: flex;
    justify-content: center;
  }
`;

export default GridContainer;
