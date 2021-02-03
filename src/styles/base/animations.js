import { keyframes, css } from "styled-components";

const fade = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const animationFade = css`
  animation-duration: 1s;
  animation-name: ${fade};
  animation-fill-mode: forwards;
`;
