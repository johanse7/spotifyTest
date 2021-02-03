import styled from "styled-components";
import { displays, fontSizes } from "../../styles/base/variables";
import { grayscale, colors } from "../../styles/base/colors";
import { device } from "../../styles/base/variables";

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  ${displays.flexCenter};
  gap: 1em;
  font-size: ${fontSizes.mainSize};
  font-weight: 600;
  background: ${grayscale.black};
  position: relative;

  ${device.tablet(`
      font-size:${fontSizes.thirdSize};
     `)}

  & svg.back {
    position: absolute;
    left: 0;
    margin: 0 0.5em;
    color: ${grayscale.white};
    cursor: pointer;
  }

  & svg {
    color: ${colors.first};
    font-size: ${fontSizes.eigthSize};

    ${device.tablet(`
      font-size: ${fontSizes.tenthSize};
    }
     `)}
  }
  & p {
    color: ${grayscale.white};
  }
`;

export default HeaderStyle;
