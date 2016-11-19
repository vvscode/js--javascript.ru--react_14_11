import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    getClosedBody = () => null

    getOpenedBody() {
      const { article } = this.props

      return (
        <div>
          <p>{article.text}</p>
          <CommentList comments={article.comments} />
        </div>
      )
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? this.getOpenedBody() : this.getClosedBody()
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
