import { isEmpty } from "lodash";
import React, { useState } from "react";
import { getDistanceDate, formatNumComments } from "../../helpers";

export const PostItem = ({ list, dispatch, showPostView, dismissPost }) => {
  const handleShowPost = (postData) => dispatch(showPostView(postData));
  const [currentId, setPostId] = useState('');

  const hanldeDismissPost = (postId) => {
    setPostId(postId);
    setTimeout(() => {dispatch(dismissPost(postId))}, 410);
  }

  if (isEmpty(list)) {
    return (<span style={{ color: 'white' }}>Sorry there are no post to show</span>)
  }

  return list.map(
    ({ data }) => {
      const { title, thumbnail, author, created, num_comments, id } = data;
      return (
        <li className={`post-content__list ${currentId === id && 'fade-out'}`}>
          <div className="post-item">
            <div className="post-item__header">
              <span className="post-item__name">{author}</span>
              <span className="post-item__created">
                {getDistanceDate(created)}
              </span>
            </div>
            <div className="post-item__body" onClick={() => handleShowPost(data)}>
              <div className="post-item__preview">
                <img src={thumbnail} alt="" />
              </div>
              <span className="post-item__title">{title}</span>
            </div>
            <div className="post-item__footer">
              <button
                onClick={() => hanldeDismissPost(id)}
                className="post-item__button">Dismiss Post</button>
              <a className="post-item__comments" href="/">
                <span>{`${num_comments} ${formatNumComments(
                  num_comments
                )}`}</span>
              </a>
            </div>
          </div>
        </li>
      );
    }
  );
};

export default PostItem;
