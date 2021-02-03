import React from "react";
import SearchForm from "../../components/searchForm";
import TracksList from "../../components/Tracks";
import useTracks from "../../hooks/useTracks";
import SkeletonLoader from "../../components/skeleton";

const Home = () => {
  const {
    tracks,
    refInput,
    setKeyWord,
    setUrlNextResults,
    loader,
  } = useTracks();

  console.log(tracks);
  const handleInput = (e) => {
    const value = e.target.value;
    if (!!value) setKeyWord(value);
  };

  return (
    <>
      <SearchForm handleInput={handleInput} refInput={refInput} />
      {loader ? <SkeletonLoader count={12} /> : <TracksList tracks={tracks} />}
    </>
  );
};

export default Home;
