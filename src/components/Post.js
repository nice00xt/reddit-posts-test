import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../actions";

export const Post = () => {
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector(({ posts }) => posts);
  useEffect(() => dispatch(fetchPost()), [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div className='post-sidebar'>
      <ul>
        { list.map(({ data: { title }}) => {
          return (
            <li>
              <span>{title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Post;
