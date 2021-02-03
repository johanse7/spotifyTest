import styled from "styled-components";
import { grayscale } from "../../../styles/base/colors";
import { fontSizes } from "../../../styles/base/variables";
import { animationFade } from "../../../styles/base/animations";

const CardTrack = styled.article`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &.fade-anima {
    ${animationFade};
  }
  & img {
    height: auto;
    object-fit: contain;
    width: 100px;
  }
  & .info {
    display: flex;
    flex-direction: column;
    font-size: ${fontSizes.sixthSize};

    & .track-name {
      color: ${grayscale.white};
    }

    & .tags {
      display: flex;
      gap: 10px;
      list-style: none;
      padding: 0;
      color: rgb(255 255 255 / 70%);
      margin: 0.5em 0;
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
    }
  }
`;

export default CardTrack;
