import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "../redux/sidebarSlice";
import themeReducer from "../redux/themeSlice";
import booksReducer from "../redux/booksSlice";
import commentsReducer from "../redux/commentsSlice"
import bookSelectedReducer from "../redux/bookSelectedSlice"

export const rootReducer = combineReducers({
  actualSidebarState: sidebarReducer,
  themeState: themeReducer,
  booksState: booksReducer,
  commentsState: commentsReducer,
  bookSelectedState: bookSelectedReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    })
}