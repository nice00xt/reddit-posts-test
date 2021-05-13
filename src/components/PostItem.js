import React from "react";

export const PostItem = ({ list }) => {
  const commentText = (numComments) => {
    return <span className='post-item__comments'>
      { numComments } {`comment${numComments > 1 || numComments === 0 ? 's' : ''}`}
    </span>
  }
  return list.map(({ data: { title, thumbnail, author, created, num_comments }}) => {
    return (
      <li className='post-content__list'>
        <div className='post-item'>
          <div className='post-item__header'>
            <span className='post-item__name'>{author} -- </span>
            <span className='post-item__created'>{created}</span>
          </div>
          <div className='post-item__body'>
            <div className='post-item__preview'>
              <img src={thumbnail} alt=''/>
            </div>
            <span className='post-item__title'>{title}</span>
          </div>
          <div className='post-item__footer'>
            <button className='post-item__button'>Dismiss Post</button>
            {commentText(num_comments)}
          </div>
        </div>
      </li>
    )
  })
}

export default PostItem;