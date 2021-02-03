import styled from "styled-components";

const SkeletonStyle = styled.article`
  display: flex;
  align-items: center;
  gap: 1em;

  & .avatar-image {
    width: 100px;
    height: 100px;
  }

  & .content > span {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    & span {
      width: 250px;
    }
  }
`;

export default SkeletonStyle;
