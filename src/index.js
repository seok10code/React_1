import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import React from 'react';
// import 'index.css';
// import * as serviceWorker from './serviceWorker';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
