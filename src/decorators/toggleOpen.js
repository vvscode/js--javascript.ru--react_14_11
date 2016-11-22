import React from 'react'

const ToggleOpen = (Component) => class WrappedComponent extends React.Component {
    render() {
        return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    state = { isOpen: false }

    toggleOpen = ev => this.setState({ isOpen: !this.state.isOpen })
}

export default ToggleOpen