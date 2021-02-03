import React from "react";
import CardTrack from "./cardTrack";
import TagsTrack from "../../common";
import { useHistory } from "react-router-dom";

const Track = ({ id, name, duration, album, image, artists }) => {
  const history = useHistory();

  const handleClickDetail = () => {
    history.push(`/detail-song/${id}`);
  };
  return (
    <CardTrack className="fade-anima" onClick={handleClickDetail}>
      <img src={image} alt={name} loading="lazy" />
      <div className="info">
        <span className="track-name">{name}</span>
        <TagsTrack artists={artists} album={album} duration={duration} />
      </div>
    </CardTrack>
  );
};

export default Track;
