import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonStyle from "./skeletonStyle";
import GridContainer from "../../styles/common/gridContainer";

const SkeletonLoader = ({ count = 1 }) => {
  const arraySkeleton = new Array(count).fill(0);

  return (
    <GridContainer>
      <div className="grid-item">
        {arraySkeleton.map((_, index) => (
          <SkeletonTheme key={index} color="#202020" highlightColor="#444">
            <SkeletonStyle>
              <Skeleton className="avatar-image " count={1} />
              <div className="content">
                <Skeleton count={2} />
              </div>
            </SkeletonStyle>
          </SkeletonTheme>
        ))}
      </div>
    </GridContainer>
  );
};

export default SkeletonLoader;
