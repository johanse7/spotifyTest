import React from "react";
import Track from "./cardTracks";
import GridContainer from "../../styles/common/gridContainer";

const TracksList = ({ tracks = [] }) => {
  return (
    <GridContainer>
      {tracks.length == 0 ? (
        <p className="not-results">No hay resultados</p>
      ) : (
        <div className="grid-item">
          {tracks.map(({ name, id, duration_ms, album, artists = [] }) => (
            <Track
              key={id}
              id={id}
              name={name}
              duration={duration_ms}
              album={album?.name}
              image={album?.images[0]?.url}
              artists={artists[0].name}
            />
          ))}
        </div>
      )}
    </GridContainer>
  );
};

export default TracksList;
