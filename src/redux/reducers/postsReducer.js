import {
  FETCH_POSTS_SUCCESS,
  DELETE_POST_SUCCESS,
  PERSIST_POST_SUCCESS,
  FETCH_OWNER_SUCCESS
} from "../actions/actionTypes";
import defaultState from "../store/defaultState";

const postsReducer = (state = defaultState.posts, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        entries: action.payload
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        entries: state.entries.filter(post => post.id !== action.payload.id)
      };

    case PERSIST_POST_SUCCESS:
      return {
        ...state,
        entries: state.entries.map(post =>
          post.id === action.payload.post.id ? action.payload.post : post
        )
      };

    case FETCH_OWNER_SUCCESS:
      return {
        ...state,
        userEntry: action.payload.post
      };

    default:
      return state;
  }
};

export default postsReducer;
