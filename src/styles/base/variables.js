import { css } from "styled-components";

export const displays = {
  flexBase: css`
    display: flex;
    justify-content: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  flexWrap: css`
    display: flex;
    flex-wrap: wrap;
  `,
};

export const fontSizes = {
  mainSize: "16px",
  secondSize: "18px",
  thirdSize: "20px",
  fourthSize: "22px",
  fivethSize: "24px",
  sixthSize: "14px",
  seventhSize: "10px",
  eigthSize: "28px",
  tenthSize: "35px",
};

const sizes = {
  mobile: {
    portrait: {
      miWidth: "320px",
      maxWidth: "480px",
    },
    landscape: {
      miWidth: "481px",
      maxWidth: "767px",
    },
  },
  tablet: {
    portrait: {
      miWidth: "768px",
      maxWidth: "1024px",
    },
    landscape: {
      miWidth: "600px",
      maxWidth: "1024px",
    },
  },
  desktop: "1024px",
};

export const device = {
  mobilePortrait: (styles) => {
    const { miWidth, maxWidth } = sizes.mobile.portrait;
    return `@media (min-width: ${miWidth}) and (max-width: ${maxWidth}) {
      ${styles}
    }`;
  },
  mobileLandscape: (styles) => {
    const { miWidth, maxWidth } = sizes.mobile.landscape;
    return `@media (min-width: ${miWidth}) and (max-width: ${maxWidth}) {
      ${styles}
    }`;
  },

  tablet: (styles) => {
    return `
      @media (min-width: ${sizes.tablet.landscape.miWidth}) {
        ${styles}
      }
    `;
  },

  desktop: (styles) => {
    return css`
      @media (min-width: ${sizes.desktop}) {
        ${styles}
      }
    `;
  },
};
