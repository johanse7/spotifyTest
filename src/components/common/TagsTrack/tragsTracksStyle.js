import styled from "styled-components";

const TagsStyle = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  color: rgb(255 255 255 / 70%);
  margin: 0.5em 0;
  flex-wrap: wrap;
  & .tag {
    display: flex;
    &:before {
      content: "•";
      margin-right: 5px;
      position: relative;
      top: 2px;
    }
    &:first-child::before {
      display: none;
    }
  }
`;

export default TagsStyle;
