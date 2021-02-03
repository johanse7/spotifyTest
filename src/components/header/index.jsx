import React from "react";
import HeaderStyle from "./headerStyle";
import { GrSpotify } from "react-icons/gr";
import { useHistory, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = () => {
  const history = useHistory();
  const params = useParams();
  const hasRouteParameter = params.hasOwnProperty("id");

  return (
    <HeaderStyle>
      {hasRouteParameter && (
        <IoMdArrowRoundBack className="back" onClick={() => history.goBack()} />
      )}
      <GrSpotify />
      <p>Encuentra Cualquier canción!</p>
    </HeaderStyle>
  );
};

export default Header;
