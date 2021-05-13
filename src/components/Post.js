import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../actions";
import PostItem from './PostItem';

export const Post = () => {
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector(({ posts }) => posts);
  useEffect(() => dispatch(fetchPost()), [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div className='post-sidebar'>
      <div className='post-content'>
        <div className='post-content__header'>
          <h3 className='post-content__title'>Reddit Posts</h3>
        </div>
        <ul className='post-content__list'>
          <PostItem list={list}/>
        </ul>
      </div>
    </div>
  );
};

export default Post;
