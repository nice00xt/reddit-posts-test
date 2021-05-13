
import { FETCH_POST } from '../constants';

const initialState = {
  posts: []
}
export const posts = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case FETCH_POST:
      return { ...state, posts: payload }
    default:
      return state;
  }
}

export default posts;