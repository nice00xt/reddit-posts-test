import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";
import PostItem from '../PostItem';
import Spinner from '../Spinner';

export const PostList = () => {
  const dispatch = useDispatch();
  const { list, isLoading } = useSelector(({ posts }) => posts);
  useEffect(() => dispatch(fetchPost()), [dispatch]);

  return (
    <div className='post-sidebar'>
      {isLoading ? <Spinner /> : (        
        <div className='post-content fade-in--top'>
          <div className='post-content__header'>
            <h3 className='post-content__title'>Reddit Posts</h3>
          </div>
          <ul className='post-content__list'>
            <PostItem list={list}/>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostList;