import { keyframes, css } from "styled-components";

const fade = keyframes`
 from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const noFount = keyframes`
    0% {transform: scale(1);}
    100% {transform: scale(2);}
`;

export const animateNoFount = css`
  animation-name: ${noFount};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: alternate;
  will-change: opacity;
`;

export const animationFade = css`
  animation-duration: 1s;
  animation-name: ${fade};
  animation-fill-mode: forwards;
`;
