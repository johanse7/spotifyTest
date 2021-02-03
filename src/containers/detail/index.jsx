import React from "react";
import useSingleTrack from "../../hooks/useSingleTrack";
import DatailTrack from "../../components/detailTrack";
import SkeletonLoader from "../../components/skeleton";

const Detail = ({ match }) => {
  const { track, isLoading } = useSingleTrack({ id: match.params.id });

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <DatailTrack
          image={track?.album?.images[0].url}
          srcTrack={track?.preview_url}
          name={track?.name}
          album={track?.album?.name}
          date={track?.album?.release_date}
          duration={track?.duration_ms}
        />
      )}
    </>
  );
};

export default Detail;
