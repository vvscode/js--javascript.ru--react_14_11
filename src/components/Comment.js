import React, {PropTypes} from 'react';
import { COMMENT } from '../types';

function Comment({ comment: { title, text, user } }) {
  const header = title && <h4>{title}</h4>
  return (
    <div>
      {header}
      <p>{text} <b>by {user}</b></p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape(COMMENT).isRequired
}

export default Comment
