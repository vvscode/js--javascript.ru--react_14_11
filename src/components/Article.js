import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';
import { ARTICLE } from '../types';

const {
  array,
  bool,
  func,
  shape,
  string,
} = PropTypes;

const Article = (props) => {
  const { article, toggleOpen } = props;
  return (<section>
    <h3 onClick={toggleOpen}>{article.title}</h3>
    {getBody(props)}
  </section>)
};

Article.defaultProps = { isOpen: false };

Article.propTypes = {
    article: shape(ARTICLE).isRequired,
    isOpen: bool.isRequired,
    toggleOpen: func.isRequired
}

function getBody({ article, isOpen }) {
    if (!isOpen) return null;
    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments} />
        </div>
    )
}

export default Article
