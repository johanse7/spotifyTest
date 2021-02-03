import React from "react";
import DetailContainer from "./detailStyle";
import AudioTrack from "./audio";
import TagsTrack from "../common";

const DatailTrack = ({ image, srcTrack, name, album, date, duration }) => {
  return (
    <DetailContainer className="fade-anima">
      <div className="media">
        <img src={image} alt={name} loading="lazy" />
        <AudioTrack src={srcTrack} />
      </div>
      <div className="info">
        <span className="track-name ">{name}</span>
        <TagsTrack album={album} date={date} duration={duration} />
      </div>
    </DetailContainer>
  );
};

export default DatailTrack;
