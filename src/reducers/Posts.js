import { ActionType } from "redux-promise-middleware";
import { FETCH_POSTS, POST_VIEW, DISMISS_POST } from "../constants";

const initialState = {
  list: [],
  isLoading: "notAsked",
  postView: {},
};

export const posts = (state = initialState, action) => {
  const { Pending, Fulfilled, Rejected } = ActionType;
  const { type, payload, postId } = action;

  switch (type) {
    case `${FETCH_POSTS}_${Pending}`:
      return { ...state, isLoading: true };
    case `${FETCH_POSTS}_${Rejected}`:
      return { ...state, isLoading: true };
    case `${FETCH_POSTS}_${Fulfilled}`:
      return { ...state, isLoading: false, list: payload.data.children };
    case POST_VIEW:
      return { ...state, postView: payload };
    case DISMISS_POST:
      return { ...state, list: dismissPost(state.list, postId) };
    default:
      return state;
  }
};

const dismissPost = (list, postId) =>
  list.filter((post) => post.data.id !== postId);

export default posts;
