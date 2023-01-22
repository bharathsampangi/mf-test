import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";

const render = (containerID, history = []) => {
  const root = createRoot(document.getElementById(containerID));
  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>
  );
};

window.renderMFtest = (containerID, history) => {
  render(containerID, history);
};

window.unmountMFtest = (containerID) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerID));
};

// if not a mf
if (!document.getElementById("MFtest-container")) {
  render("root", []);
}
