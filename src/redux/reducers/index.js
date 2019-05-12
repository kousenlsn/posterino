import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  posts: postsReducer,
  page: pageReducer
});
