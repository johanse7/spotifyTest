import React from "react";

const AudioTrack = ({ src }) => {
  return (
    <div className="audio-content">
      <audio controls autoPlay={true}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default AudioTrack;
