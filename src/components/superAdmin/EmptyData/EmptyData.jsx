import React, { Component } from 'react';
import './EmptyData.css'

class EmptyData extends Component {
  state = {}
  render() {
    return (
      <div className="EmptyData no-select">
        NO DATA PRESENT FOR {this.props.for}
      </div>
    );
  }
}

export default EmptyData;