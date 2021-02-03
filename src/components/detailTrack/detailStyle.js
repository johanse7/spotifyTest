import styled from "styled-components";
import { animationFade } from "../../styles/base/animations";
import { fontSizes } from "../../styles/base/variables";
import { grayscale } from "../../styles/base/colors";

const DetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin: auto 0;
  /* top: 50%;
  transform: translateY(-50%); */
  justify-content: center;

  &.fade-anima {
    ${animationFade};
  }
  & .media {
    position: relative;
    & img {
      height: auto;
      object-fit: contain;
      width: 230px;
    }

    & .audio-content {
      position: absolute;
      bottom: 0;

      & audio {
        width: 230px;
        height: 30px;
        background-color: rgba(200, 200, 200, 1);
      }
    }
  }
  & .info {
    display: flex;
    flex-direction: column;
    font-size: ${fontSizes.sixthSize};

    & .track-name {
      color: ${grayscale.white};
      font-size: ${fontSizes.mainSize};
    }
  }
`;

export default DetailContainer;
