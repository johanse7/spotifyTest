import React from "react";
import HeaderStyle from "./headerStyle";
import { GrSpotify } from "react-icons/gr";

const Header = () => (
  <HeaderStyle>
    <GrSpotify />
    <p>Encuentra Cualquier canción!</p>
  </HeaderStyle>
);

export default Header;
