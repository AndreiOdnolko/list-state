import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/accordion'


const CommentsList = ({ comments = [], isOpen, toggleOpen }) => {
  return (
    <div>
      <button onClick={toggleOpen}>
        {!isOpen ? "Show Comments" : "Hide Comments"}
      </button>
      {getBody(comments, isOpen)}
    </div>
  )
}

const getBody = (comments, isOpen) => {
  if (!isOpen) return null
  if (!comments.length) return <p>No comments yet</p>
  return (
    <ul>
      {comments.map(comment => <li key={comment.id}><Comment {...comment} /></li>)}
    </ul>
  )
}


export default toggleOpen(CommentsList);