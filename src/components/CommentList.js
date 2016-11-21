import React, { Component } from 'react'
import Comment from './Comment';

class CommentList extends Component {

    constructor() {
        super()
        this.state = { isOpen: false }
        this.toggleOpened = this.toggleOpened.bind(this)
    }

    renderOpened() {
      const commentsItems = this.props.comments.map(comment => (<li key={comment.id}><Comment comment={comment} /></li>));
      return (<div>
          <ul>{commentsItems}</ul>
          <button onClick={this.toggleOpened}>Close &uarr;</button>
        </div>)
    }

    renderClosed() {
      const { comments } = this.props;
      if (!(comments && comments.length)) {
        return null
      }
      const count = comments.length
      const commentsText = count === 1 ? 'Comment' : 'Comments'

      return (<button onClick={this.toggleOpened}>Open {count} {commentsText} &darr;</button>)
    }

    render() {
      return (<div className="comment-list">
        {/*Вот тут ты перемудрил, не советую так писать. В остальном все ок*/}
        {this[this.state.isOpen ? 'renderOpened' : 'renderClosed']()}
      </div>)
    }

    toggleOpened = ev => this.setState({ isOpen: !this.state.isOpen })
}

export default CommentList
