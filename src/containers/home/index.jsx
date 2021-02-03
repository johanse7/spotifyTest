import React, { useEffect, useRef, useCallback } from "react";
import SearchForm from "../../components/searchForm";
import TracksList from "../../components/Tracks";
import useTracks from "../../hooks/useTracks";
import useNearScreen from "../../hooks/useNearScreen";
import SkeletonLoader from "../../components/skeleton";
import debounce from "just-debounce-it";
import { NEX_URL_RESULTS } from "../../utils/constans";

const Home = () => {
  const refElement = useRef();

  const {
    tracks,
    refInput,
    setKeyWord,
    setUrlNextResults,
    loader,
    loadingNextPage,
  } = useTracks();

  const { isNearScreen } = useNearScreen({
    refElement: loadingNextPage ? null : refElement,
  });

  const handleInput = (e) => {
    const value = e.target.value;
    if (!!value) setKeyWord(value);
  };

  const debounceHandleNextPage = useCallback(
    debounce(
      () => setUrlNextResults(localStorage.getItem(NEX_URL_RESULTS)),
      600
    ),
    [setUrlNextResults]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <>
      <SearchForm handleInput={handleInput} refInput={refInput} />
      {loader ? (
        <SkeletonLoader count={12} />
      ) : (
        <>
          <TracksList tracks={tracks} />
          {loadingNextPage && <SkeletonLoader count={12} />}
          <div ref={refElement}></div>
        </>
      )}
    </>
  );
};

export default Home;
