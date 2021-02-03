import React, { useState } from "react";
import { STORAGE_TRACKS } from "../utils/constans";

const Context = React.createContext();

export const TracksProvider = ({ children }) => {
  let tracksCache = localStorage.getItem(STORAGE_TRACKS);
  tracksCache = tracksCache ? JSON.parse(tracksCache) : [];

  const [tracks, setTraks] = useState(tracksCache);

  return (
    <Context.Provider value={{ tracks, setTraks }}>{children}</Context.Provider>
  );
};

export default Context;
