import styled from "styled-components";
import { grayscale } from "../base/colors";

const SearchInput = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
  width: 100%;

  .search-icon {
    position: absolute;
    top: 13px;
    left: 8px;
    width: 14px;
    color: ${grayscale.gray};
  }
  & input {
    border-radius: 15px;
    height: 40px;
    width: 550px;
    padding: 2px 23px 2px 30px;
    outline: 0;
    border: solid 1.5px ${grayscale.graymedium};
    -webkit-transition: 1s; /* Safari */
    transition: 1s;
    &:hover {
      box-shadow: 0 0 5pt 0.5pt ${grayscale.graymedium};
    }
    &:focus {
      box-shadow: 0 0 5pt 2pt ${grayscale.graymedium};
      outline-width: 0px;
    }
  }
`;

export default SearchInput;
