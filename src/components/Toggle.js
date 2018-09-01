import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toggle extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      on: false,
    }
  }

  handleToggle() {
    this.setState(prevState => ({ on: !prevState.on }))
  }

  render() {
    const { children } = this.props
    return children({ on: this.state.on, toggle: () => this.handleToggle() })
  }
}
