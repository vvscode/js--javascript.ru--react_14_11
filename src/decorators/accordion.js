import React, { Component } from 'react';

export default (InComponent) => class WrappedComponent extends Component {
  render() {
    return <InComponent
      {...this.props}
      {...this.state}
      toggleOpen={this.toggleOpen}
      closeAllItems={this.closeAllItems}
    />
  }

  state = { openedId: null }

  toggleOpen = id => ev => (this.state.openedId === id ? this.closeAllItems() : this.openItem(id))

  closeAllItems = () => this.setState({ openedId: null })

  openItem = id => this.setState({ openedId: id })
}
