import { ActionType } from "redux-promise-middleware";
import { FETCH_POSTS, POST_VIEW } from "../constants";

const initialState = {
  list: [],
  isLoading: "notAsked",
  postView: {},
};

export const posts = (state = initialState, action) => {
  const { Pending, Fulfilled, Rejected } = ActionType;
  const { type, payload } = action;

  switch (type) {
    case `${FETCH_POSTS}_${Pending}`:
      return { ...state, isLoading: true };
    case `${FETCH_POSTS}_${Rejected}`:
      return { ...state, isLoading: true };
    case `${FETCH_POSTS}_${Fulfilled}`:
      return { ...state, isLoading: false, list: payload.data.children };
    case POST_VIEW:
      return { ...state, postView: payload };
    default:
      return state;
  }
};

export default posts;
