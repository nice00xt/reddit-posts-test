import { FETCH_POSTS, POST_VIEW, DISMISS_POST } from "../constants";
import { get, getResponseData } from "../libs";

export const fetchPost = () => {
  return {
    type: FETCH_POSTS,
    payload: get("/top.json")
      .then(getResponseData())
      .catch((err) => {
        throw err;
      }),
  };
};

export const showPostView = (postView) => {
  return { type: POST_VIEW, payload: postView };
};

export const dismissPost = (postId) => {
  return {
    type: DISMISS_POST,
    postId
  }
}
