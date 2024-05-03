import React from "react";
import ReactDOM from "react-dom/client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import sidebarReducer from "./redux/sidebarSlice";
import themeReducer from "./redux/themeSlice";
import booksReducer from "./redux/booksSlice";

const rootReducer = combineReducers({
  actualSidebarState: sidebarReducer,
  themeState: themeReducer,
  booksState: booksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
