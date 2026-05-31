import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";
// setup axios

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const apiKey = process.env.REACT_APP_TMDB_API_KEY;

if (accessToken) {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
} else if (apiKey) {
  axios.defaults.params = {
    ...axios.defaults.params,
    api_key: apiKey,
  };
} else {
  console.error(
    "Missing TMDB credentials. Set REACT_APP_ACCESS_TOKEN or REACT_APP_TMDB_API_KEY in .env.local."
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
