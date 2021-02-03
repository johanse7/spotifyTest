import styled from "styled-components";
import { animateNoFount } from "../../../styles/base/animations";
import { grayscale } from "../../../styles/base/colors";

const NotFountContent = styled.section`
  background-image: linear-gradient(
    ${grayscale.black},
    ${grayscale.blackLight}
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  min-height: calc(100vh - 200px);
  color: ${grayscale.white};

  & .animate-not-found {
    ${animateNoFount};
  }
`;

export default NotFountContent;
