import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/app";
import { TracksProvider } from "./context/contextTracks";

ReactDOM.render(
  <TracksProvider>
    <App />
  </TracksProvider>,
  document.getElementById("app")
);
