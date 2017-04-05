import React from 'react'

export default ({comment}) => (<div className="comment">
  <span className="user">{comment.user}:</span>
  <span className="text">{comment.text}</span>
</div>)
