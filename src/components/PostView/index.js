import React from "react";
import { isEmpty } from 'lodash';
import { useSelector } from "react-redux";

export const PostView = () => {
  const { postView } = useSelector(({ posts }) => posts);
  const { author, url, title } = postView;

  return (
    <section>
      { isEmpty(postView) ? (
        <div className='post-view'>
          <span>No Post to show</span>
        </div>
      ) : (
        <div className='post-view fade-in--top'>
          <div className='post-view__header'>
            <h3 className='post-view__auhor'>{author}</h3>
          </div>
          <div className='post-view__body'>
            <div className='post-view__image'>
              <img src={url} alt=''/>
            </div>
            <div className='post-view__title'>
              <span>{title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PostView;