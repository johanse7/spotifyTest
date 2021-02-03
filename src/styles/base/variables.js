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
};
