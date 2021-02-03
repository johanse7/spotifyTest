import { useState, useEffect } from "react";
import useTracks from "./useTracks";
import { getTrackById } from "../services/spotifyService";

const useSingleTrack = ({ id }) => {
  const { tracks } = useTracks();
  const [isLoading, setIsLoading] = useState(false);

  const trackCache = tracks.find((singleTrack) => singleTrack.id === id);
  const [track, setTrack] = useState(trackCache);

  useEffect(() => {
    (async () => {
      try {
        if (!track) {
          setIsLoading(true);

          const trackResult = await getTrackById({ id });
          setTrack(trackResult);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error.toString());
        setIsLoading(false);
      }
    })();
  }, [id, track]);

  return {
    track,
    isLoading,
  };
};

export default useSingleTrack;
