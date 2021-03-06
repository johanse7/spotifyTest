import { useContext, useState, useEffect, useRef } from "react";
import Context from "../context/contextTracks";
import { getTrackByName } from "../services/spotifyService";
import { NEX_URL_RESULTS, STORAGE_TRACKS } from "../utils/constans";

const useTracks = (delaySearch = 600) => {
  const { tracks, setTraks } = useContext(Context);
  const [urlNextResults, setUrlNextResults] = useState(null);
  const refInput = useRef();
  const [keyWord, setKeyWord] = useState(null);
  const [loader, setLoader] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        try {
          if (keyWord === refInput.current?.value) {
            setLoader(true);
            const {
              tracks: { items, next },
            } = await getTrackByName({ keyWord });

            setLoader(false);
            setTraks(items);
            localStorage.setItem(NEX_URL_RESULTS, next);
            localStorage.setItem(STORAGE_TRACKS, JSON.stringify(items));
          }
        } catch (error) {
          console.error(error.toString());
          setLoader(false);
        }
      }, delaySearch);
    })();
  }, [keyWord, delaySearch]);

  useEffect(() => {
    (async () => {
      try {
        if (!keyWord) return;

        setLoadingNextPage(true);
        const {
          tracks: { items, next },
        } = await getTrackByName({ nextUrl: urlNextResults });

        setTraks((prevState) => [...prevState, ...items]);
        setLoadingNextPage(false);
        localStorage.setItem(NEX_URL_RESULTS, next);
        localStorage.setItem(STORAGE_TRACKS, JSON.stringify(tracks));
      } catch (error) {
        setLoadingNextPage(false);
        console.error(error.toString());
      }
    })();
  }, [urlNextResults]);

  return {
    tracks,
    refInput,
    setKeyWord,
    setUrlNextResults,
    loader,
    loadingNextPage,
  };
};

export default useTracks;
