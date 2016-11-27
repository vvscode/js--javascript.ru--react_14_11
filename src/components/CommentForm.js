import React,  { Component } from 'react';

export default class CommentForm extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    const { user, title, text } = this.refs;
    this.props.onSubmit({
      user: user.value,
      title: title.value,
      text: text.value
    });
  }

  render() {
    const { user, title, text } = this.props;
    return (<form className="CommentForm" onSubmit={this.onFormSubmit} ref="form">
      <div className="form-group user">
        <label htmlFor="user" className="user-label">User:</label>
        <input ref="user" ref="user" id="user" value={user} />
      </div>
      <div className="form-group title">
        <label htmlFor="title" className="title-label">Title:</label>
        <input ref="title" ref="title" id="title" value={title} />
      </div>
      <div className="form-group text">
        <label htmlFor="text" className="text-label">User:</label>
        <textarea ref="text" ref="text" id="text">{text}</textarea>
      </div>
      <div className="form-group submit">
        <button>Send</button>
      </div>
    </form>)
  }

  static defaultProps = {
    onSubmit: () => null
  }
}
