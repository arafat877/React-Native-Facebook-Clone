import { createStore } from "redux";
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export const store = createStore(postReducer);
