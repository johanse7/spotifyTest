import React from "react";
import { useHistory } from "react-router-dom";
import NotFountContent from "./notFountStyle";
import Botton from "../../../styles/common/button";
import { IoMdArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  const history = useHistory();
  return (
    <NotFountContent>
      <h2 class="animate-not-found">404</h2>
      <h3>Pagina no encontrada</h3>
      <Botton onClick={() => history.goBack()}>
        <IoMdArrowRoundBack />
        Regresar
      </Botton>
    </NotFountContent>
  );
};

export default NotFound;
