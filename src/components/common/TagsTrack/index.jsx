import React from "react";
import TagsStyle from "./tragsTracksStyle";
import { millisToMinutesAndSeconds } from "../../../utils";

const TagsTrack = ({ duration, ...tags }) => {
  return (
    <>
      {tags && (
        <TagsStyle>
          {Object.keys(tags).map((key, index) => (
            <li key={index} className="tag">
              {tags[key]}
            </li>
          ))}
          {duration ? (
            <li className="tag">{millisToMinutesAndSeconds(duration)}</li>
          ) : (
            ""
          )}
        </TagsStyle>
      )}
    </>
  );
};

export default TagsTrack;
