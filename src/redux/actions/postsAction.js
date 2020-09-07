import axios from "axios";

import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILURE,
  PERSIST_POST_SUCCESS,
  PERSIST_POST_REQUEST,
  PERSIST_POST_FAILURE,
  FETCH_OWNER_REQUEST,
  FETCH_OWNER_SUCCESS,
  FETCH_OWNER_FAILURE
} from "./actionTypes";

const UNAVAILABLE_SERVICE_MESSAGE =
  "Unable to reach the service, please try again later.";
const MOCKED_DELAY = 400;

export function fetchPostsSuccess(result) {
  return { type: FETCH_POSTS_SUCCESS, payload: result };
}
export function fetchPostsRequest() {
  return { type: FETCH_POSTS_REQUEST };
}
export function fetchPostsFailure(error) {
  return { type: FETCH_POSTS_FAILURE, payload: error };
}

export function fetchPosts(notify) {
  return async dispatch => {
    dispatch(fetchPostsRequest());

    try {
      let result = await axios.get("https://jsonplaceholder.typicode.com/posts");

      return dispatch(
        fetchPostsSuccess({
          posts: result.data,
          message: notify && "Successfully updated data."
        })
      );
    } catch (error) {
      return dispatch(
        fetchPostsFailure(
          error.response
            ? error.response.data
            : { message: UNAVAILABLE_SERVICE_MESSAGE }
        )
      );
    }
  };
}

export function deletePostSuccess(results) {
  return { type: DELETE_POST_SUCCESS, payload: results };
}
export function deletePostRequest() {
  return { type: DELETE_POST_REQUEST };
}
export function deletePostFailure(error) {
  return { type: DELETE_POST_FAILURE, payload: error };
}

export function deletePost(postId) {
  return async dispatch => {
    dispatch(deletePostRequest());

    try {
      // MOCKED DELETE
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve(dispatch(deletePostSuccess(postId)));
        }, MOCKED_DELAY);
      });
    } catch (error) {
      return dispatch(
        deletePostFailure(
          error.response
            ? error.response.data
            : { message: UNAVAILABLE_SERVICE_MESSAGE }
        )
      );
    }
  };
}

export function persistPostSuccess(post) {
  return { type: PERSIST_POST_SUCCESS, payload: post };
}
export function persistPostRequest() {
  return { type: PERSIST_POST_REQUEST };
}
export function persistPostFailure(error) {
  return { type: PERSIST_POST_FAILURE, payload: error };
}

export function persistPost(post) {
  return async dispatch => {
    dispatch(persistPostRequest());

    try {
      // MOCKED PERSIST
      return await new Promise(resolve => {
        setTimeout(() => {
          const nextPost = Object.assign({}, post, {
            title: post.title.trim(" ")
          });

          resolve(
            dispatch(
              persistPostSuccess({
                post: nextPost,
                message: "Successfully saved post."
              })
            )
          );
        }, MOCKED_DELAY);
      });
    } catch (error) {
      return dispatch(
        persistPostFailure(
          error.response
            ? error.response.data
            : { message: UNAVAILABLE_SERVICE_MESSAGE }
        )
      );
    }
  };
}

export function fetchPostOwnerSuccess(user) {
  return { type: FETCH_OWNER_SUCCESS, payload: user };
}
export function fetchPostOwnerRequest() {
  return { type: FETCH_OWNER_REQUEST };
}
export function fetchPostOwnerFailure(error) {
  return { type: FETCH_OWNER_FAILURE, payload: error };
}

export function fetchPostOwner(userId) {
  return async dispatch => {
    dispatch(fetchPostOwnerRequest());

    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      return dispatch(fetchPostOwnerSuccess(result.data));
    } catch (error) {
      return dispatch(
        fetchPostOwnerFailure(
          error.response
            ? error.response.data
            : { message: UNAVAILABLE_SERVICE_MESSAGE }
        )
      );
    }
  };
}
