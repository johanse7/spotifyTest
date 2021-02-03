import styled from "styled-components";
import { displays, fontSizes } from "../../styles/base/variables";
import { grayscale, colors } from "../../styles/base/colors";

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  ${displays.flexCenter};
  gap: 1em;
  font-size: ${fontSizes.mainSize};
  font-weight: 600;
  background: ${grayscale.black};

  & svg {
    color: ${colors.first};
    font-size: ${fontSizes.eigthSize};
  }
  & p {
    color: ${grayscale.white};
  }
`;

export default HeaderStyle;
