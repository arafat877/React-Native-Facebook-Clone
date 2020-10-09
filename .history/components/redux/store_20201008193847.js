import { createStore } from "redux";
import { combineReducers } from "redux";
import postReducer from "./postReducer";

// const rootReducer = combineReducers({
//     auth: authReducer,
//     user: userReducer,
//     post: postReducer,
//     category: categoryReducer,
//   });

export const store = createStore(postReducer);
