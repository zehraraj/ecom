import React, { Component } from 'react';
import './Checkbox.css'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.tick = React.createRef()
  }

  componentDidMount = () => {
    if (this.props.active)
      this.setState({ active: this.props.active })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.active !== this.state.active) {
      this.tick.current.className = this.state.active ? "tickCircle activate" : "tickCircle"
      this.props.handleChange(this.props.data, this.props.index, this.state.active)
    }
  }

  handleClick = (e) => {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div className="checkbox" onClick={(e) => this.handleClick(e)}>
        <div className="tickCircle" ref={this.tick} />
        <div className="checkboxText noselect">{this.props.data.value}</div>
      </div>
    );
  }
}

export default Checkbox;