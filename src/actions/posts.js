import { FETCH_POSTS } from "../constants";
import { get, getResponseData } from "../libs";

export const fetchPost = () => {
  return {
    type: FETCH_POSTS,
    payload: get("/top.json")
      .then(getResponseData())
      .catch((err) => { throw err; })
  };
};
