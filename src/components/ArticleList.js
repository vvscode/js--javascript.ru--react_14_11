import React, { Component, PropTypes }  from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import { ARTICLE, COMMENT, ID } from '../types';


const {
    array,
    arrayOf,
    string,
    func,
    number,
    shape,
    oneOfType,
} = PropTypes;

class ArticleList extends Component {
    render() {
        const { articles, openedId, toggleOpen } = this.props;
        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openedId}
                    toggleOpen = {toggleOpen(article.id)}
                />
            </li>
        ));

        return (<ul>{articleItems}</ul>);
    }
}

ArticleList.propTypes = {
    articles: arrayOf(shape({
      ...ARTICLE,
      comments: arrayOf(shape(COMMENT))
    })).isRequired,
    toggleOpen: func.isRequired,

    // it's sad, but we can't define `null` - https://github.com/facebook/react/issues/2166
    openedId: oneOfType(ID)
};

export default accordion(ArticleList)
