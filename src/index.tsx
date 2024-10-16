import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import "./scss/app.scss";
import { BrowserRouter } from "react-router-dom";
import { store } from "./services/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
