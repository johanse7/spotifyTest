import styled from "styled-components";

const Button = styled.button`
  /* border: 1px solid blue; */
  background: white;
  display: flex;
  align-items: center;
  padding: 5px 1em 5px 0.5em;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  & svg {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`;
export default Button;
