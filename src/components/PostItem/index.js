import React from "react";
import { getDistanceDate, formatNumComments } from "../../helpers";

export const PostItem = ({ list, dispatch, showPostView }) => {
  const handleShowPost = (postData) => dispatch(showPostView(postData));

  return list.map(
    ({ data }) => {
      const { title, thumbnail, author, created, num_comments } = data;
      return (
        <li className="post-content__list">
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
              <button className="post-item__button">Dismiss Post</button>
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
